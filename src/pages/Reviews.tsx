import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    author: "Айгуль Нурланова",
    rating: 5,
    date: "2024-02-15",
    content: "Превосходный отель! Вид на горы Алатау просто захватывает дух. Персонал очень внимательный, номера чистые и уютные. Обязательно вернусь снова!",
    likes: 12,
  },
  {
    id: 2,
    author: "Арман Сатыбалды",
    rating: 4,
    date: "2024-02-10",
    content: "Отличное расположение в центре Алматы, прекрасный вид на горы. Завтраки с национальными блюдами очень порадовали.",
    likes: 8,
  },
  {
    id: 3,
    author: "Динара Касымова",
    rating: 5,
    date: "2024-02-05",
    content: "Потрясающий сервис! Особенно понравился спа-центр и ресторан с казахской и европейской кухней. Рекомендую всем!",
    likes: 15,
  },
];

const Reviews = () => {
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest">("newest");

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="section-padding bg-hotel-beige">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Отзывы наших гостей</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Узнайте, что говорят о нас наши гости
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={sortBy === "newest" ? "default" : "outline"}
              onClick={() => setSortBy("newest")}
              className={sortBy === "newest" ? "bg-hotel-gold hover:bg-hotel-brown" : ""}
            >
              Новые
            </Button>
            <Button
              variant={sortBy === "highest" ? "default" : "outline"}
              onClick={() => setSortBy("highest")}
              className={sortBy === "highest" ? "bg-hotel-gold hover:bg-hotel-brown" : ""}
            >
              Лучшие
            </Button>
            <Button
              variant={sortBy === "lowest" ? "default" : "outline"}
              onClick={() => setSortBy("lowest")}
              className={sortBy === "lowest" ? "bg-hotel-gold hover:bg-hotel-brown" : ""}
            >
              Критические
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{review.author}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-hotel-gold text-hotel-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString("ru-RU")}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{review.content}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{review.likes}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;