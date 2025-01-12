import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Hotel, Calendar, Star } from "lucide-react";

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

const AdminDashboard = () => {
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
                <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
                <div className="text-hotel-gold">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-gray-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Последние бронирования</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((booking) => (
                  <div key={booking} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Бронирование #{booking}</p>
                      <p className="text-sm text-gray-600">2 гостя • 3 ночи</p>
                    </div>
                    <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                      Подтверждено
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Последние отзывы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Гость #{review}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-hotel-gold text-hotel-gold" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">2 часа назад</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;