import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="section-padding bg-hotel-beige">
      <div className="hotel-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">Свяжитесь с нами</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы всегда рады помочь вам с любыми вопросами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-hotel-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-hotel-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@disarixos.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-hotel-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-gray-600">ул. Приморская, 123, Сочи, Россия</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-hotel-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Часы работы</h3>
                  <p className="text-gray-600">Круглосуточно</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Ваше сообщение"
                  />
                </div>
                <Button className="w-full bg-hotel-gold hover:bg-hotel-brown">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.0235594822897!2d39.7289663!3d43.5850067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM1JzA2LjAiTiAzOcKwNDMnNDQuMyJF!5e0!3m2!1sru!2sru!4v1645549240619!5m2!1sru!2sru"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;