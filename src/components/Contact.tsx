import { useState } from "react";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Контакты и заказ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для заказа свежих домашних яиц
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat text-2xl font-semibold mb-8">
              Как с нами связаться
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-600">+7 980 686 52 76</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-orange-600"
                  />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-600">+7 980 686 52 76</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-gray-600">Гаврилов Посад</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Globe" size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Сайт</p>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 transition-colors break-all"
                  >
                    www.example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold">Режим работы</p>
                  <p className="text-gray-600">Ежедневно с 9:00 до 15:00</p>
                </div>
              </div>
            </div>

            {/* Pickup Location */}
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
              <h4 className="font-montserrat text-xl font-semibold mb-6 text-center">
                Самовывоз
              </h4>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">Место встречи</p>
                  <p className="text-gray-600">ул. Розы Люксембург</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Договариваемся о времени
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
              <h4 className="font-montserrat text-xl font-semibold mb-6 text-center">
                Доставка
              </h4>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" size={24} className="text-green-600" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">По городу</p>
                  <p className="text-2xl font-bold text-green-600">200 руб</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-montserrat text-2xl font-semibold mb-6">
              Форма заказа
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+7 980 686 52 76"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип яиц
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Выберите тип яиц</option>
                  <option value="С1">Куриные яйца С1</option>
                  <option value="С0">Куриные яйца С0</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Количество
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="10 штук, 2 десятка и т.д."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Комментарий
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Дополнительные пожелания или вопросы"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={20} />
                Отправить заказ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
