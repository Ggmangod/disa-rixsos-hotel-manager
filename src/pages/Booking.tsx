import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { toast } from "@/components/ui/use-toast";

const Booking = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [roomType, setRoomType] = useState("standard");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    
    if (!user.email) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, войдите в систему для бронирования",
        variant: "destructive",
      });
      return;
    }

    if (!startDate || !endDate) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, выберите даты заезда и выезда",
        variant: "destructive",
      });
      return;
    }

    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const newBooking = {
      id: Date.now(),
      userEmail: user.email,
      userName: user.name,
      roomType,
      guests,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      status: "active"
    };
    
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    
    toast({
      title: "Бронирование отправлено",
      description: "Мы свяжемся с вами для подтверждения",
    });
  };

  return (
    <div className="section-padding bg-hotel-beige">
      <div className="hotel-container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Забронировать номер</h1>
          <p className="text-gray-600">
            Выберите даты проживания и тип номера для бронирования
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Детали бронирования</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дата заезда
                  </label>
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    locale={ru}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дата выезда
                  </label>
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    locale={ru}
                    className="rounded-md border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                    Тип номера
                  </label>
                  <select
                    id="roomType"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="standard">Стандарт</option>
                    <option value="luxury">Люкс</option>
                    <option value="family">Семейный</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Количество гостей
                  </label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="1">1 гость</option>
                    <option value="2">2 гостя</option>
                    <option value="3">3 гостя</option>
                    <option value="4">4 гостя</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Особые пожелания
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Укажите ваши пожелания или особые требования"
                />
              </div>

              <Button type="submit" className="w-full bg-hotel-gold hover:bg-hotel-brown">
                Забронировать
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;