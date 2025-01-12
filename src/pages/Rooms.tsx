import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bed, Users, Wifi, Tv } from "lucide-react";

const rooms = [
  {
    id: 1,
    type: "Люкс",
    price: "150000₸",
    description: "Роскошный номер с видом на горы Алатау",
    capacity: "2-3 гостя",
    amenities: ["Король-размер кровать", "Спа-ванная", "Мини-бар", "Вид на горы"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    type: "Стандарт",
    price: "75000₸",
    description: "Комфортный номер для отдыха",
    capacity: "2 гостя",
    amenities: ["Двуспальная кровать", "Ванная комната", "Телевизор", "Рабочая зона"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    type: "Семейный",
    price: "120000₸",
    description: "Просторный номер для всей семьи",
    capacity: "4 гостя",
    amenities: ["2 спальни", "Гостиная", "Кухонная зона", "Детская площадка"],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3",
  },
];

const Rooms = () => {
  return (
    <div className="section-padding bg-hotel-beige">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Наши номера</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Откройте для себя непревзойденный комфорт и элегантность в самом сердце Алматы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">{room.type}</CardTitle>
                  <span className="text-hotel-gold font-semibold">{room.price}</span>
                </div>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={20} />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="text-sm bg-hotel-cream px-3 py-1 rounded-full text-hotel-brown"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-hotel-gold hover:bg-hotel-brown">
                    <Link to="/booking">Забронировать</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;