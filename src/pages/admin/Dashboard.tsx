import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Users, Hotel, Calendar, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Booking {
  id: number;
  userEmail: string;
  userName: string;
  roomType: string;
  guests: string;
  startDate: string;
  endDate: string;
  status: string;
}

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const loadBookings = () => {
      const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      setBookings(savedBookings);
    };

    loadBookings();
    // Обновляем список каждые 30 секунд
    const interval = setInterval(loadBookings, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCancelBooking = (booking: Booking) => {
    const updatedBookings = bookings.filter(b => b.id !== booking.id);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setBookings(updatedBookings);

    toast({
      title: "Бронирование отменено",
      description: `Гость ${booking.userName} уведомлен об отмене бронирования`,
    });
  };

  const stats = [
    {
      title: "Всего номеров",
      value: "50",
      icon: <Hotel className="w-6 h-6" />,
      change: "+2 с прошлого месяца",
    },
    {
      title: "Активные бронирования",
      value: bookings.length.toString(),
      icon: <Calendar className="w-6 h-6" />,
      change: "Обновлено сейчас",
    },
    {
      title: "Гостей сегодня",
      value: bookings.reduce((acc, curr) => acc + parseInt(curr.guests), 0).toString(),
      icon: <Users className="w-6 h-6" />,
      change: "Обновлено сейчас",
    },
    {
      title: "Средний рейтинг",
      value: "4.8",
      icon: <Star className="w-6 h-6" />,
      change: "+0.2 с прошлого месяца",
    },
  ];

  return (
    <div className="section-padding">
      <div className="hotel-container">
        <div className="mb-8">
          <h1 className="text-3xl font-serif mb-2">Панель управления</h1>
          <p className="text-gray-600">Добро пожаловать в панель управления отелем</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
                <div className="text-hotel-gold">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-gray-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Управление бронированиями</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Гость</TableHead>
                  <TableHead>Тип номера</TableHead>
                  <TableHead>Даты</TableHead>
                  <TableHead>Кол-во гостей</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{booking.userName}</p>
                        <p className="text-sm text-gray-500">{booking.userEmail}</p>
                      </div>
                    </TableCell>
                    <TableCell>{booking.roomType}</TableCell>
                    <TableCell>
                      <div>
                        <p>С: {new Date(booking.startDate).toLocaleDateString()}</p>
                        <p>До: {new Date(booking.endDate).toLocaleDateString()}</p>
                      </div>
                    </TableCell>
                    <TableCell>{booking.guests}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        onClick={() => handleCancelBooking(booking)}
                      >
                        Отменить
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;