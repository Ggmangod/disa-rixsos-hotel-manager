import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Users, Hotel, Calendar, Star } from "lucide-react";

interface Room {
  id: number;
  number: string;
  type: string;
  occupant?: {
    name: string;
    email: string;
  };
}

const AdminDashboard = () => {
  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      number: "101",
      type: "Люкс",
      occupant: {
        name: "Айгуль Нурланова",
        email: "aigul@example.com",
      },
    },
    {
      id: 2,
      number: "102",
      type: "Стандарт",
      occupant: {
        name: "Арман Сатыбалды",
        email: "arman@example.com",
      },
    },
  ]);

  const { toast } = useToast();
  const stats = [
    {
      title: "Всего номеров",
      value: "50",
      icon: <Hotel className="w-6 h-6" />,
      change: "+2 с прошлого месяца",
    },
    {
      title: "Активные бронирования",
      value: "28",
      icon: <Calendar className="w-6 h-6" />,
      change: "+12% с прошлой недели",
    },
    {
      title: "Гостей сегодня",
      value: "42",
      icon: <Users className="w-6 h-6" />,
      change: "+8% с вчера",
    },
    {
      title: "Средний рейтинг",
      value: "4.8",
      icon: <Star className="w-6 h-6" />,
      change: "+0.2 с прошлого месяца",
    },
  ];

  const handleEviction = (room: Room) => {
    if (room.occupant) {
      // Here you would typically send an email notification
      toast({
        title: "Уведомление отправлено",
        description: `Гость ${room.occupant.name} уведомлен о выселении из номера ${room.number}`,
      });

      // Update rooms state
      setRooms(rooms.map(r => 
        r.id === room.id ? { ...r, occupant: undefined } : r
      ));
    }
  };

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
            <CardTitle>Управление номерами</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium">Номер {room.number} - {room.type}</p>
                    {room.occupant && (
                      <p className="text-sm text-gray-600">
                        Проживает: {room.occupant.name}
                      </p>
                    )}
                  </div>
                  {room.occupant && (
                    <Button
                      variant="destructive"
                      onClick={() => handleEviction(room)}
                    >
                      Выселить
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;