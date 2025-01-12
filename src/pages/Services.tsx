import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Coffee, Dumbbell, Car, Wifi, MapPin } from "lucide-react";

const services = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Ресторан",
    description: "Изысканная кухня от наших шеф-поваров",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Кафе",
    description: "Легкие закуски и освежающие напитки",
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Фитнес-центр",
    description: "Современное оборудование для поддержания формы",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Парковка",
    description: "Безопасная парковка для наших гостей",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Wi-Fi",
    description: "Высокоскоростной интернет на всей территории",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Экскурсии",
    description: "Организация туров по местным достопримечательностям",
  },
];

const Services = () => {
  return (
    <div className="section-padding bg-hotel-beige">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Наши услуги</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр услуг, чтобы сделать ваше пребывание максимально комфортным
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center text-hotel-gold mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;