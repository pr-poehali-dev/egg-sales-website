import { useState } from "react";
import Icon from "@/components/ui/icon";

interface EggProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
}

const Catalog = () => {
  const [selectedProduct, setSelectedProduct] = useState<EggProduct | null>(
    null,
  );

  const products: EggProduct[] = [
    {
      id: 1,
      name: "Куриные яйца С1",
      description:
        "Крупные яйца от кур породы Хайсекс. Ярко-оранжевый желток, плотный белок.",
      price: 120,
      unit: "10 шт",
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Куриные яйца С0",
      description:
        "Отборные крупные яйца. Идеальны для выпечки и приготовления блюд.",
      price: 150,
      unit: "10 шт",
      image:
        "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Перепелиные яйца",
      description:
        "Деликатесные перепелиные яйца. Богаты витаминами и микроэлементами.",
      price: 200,
      unit: "20 шт",
      image:
        "https://images.unsplash.com/photo-1627662236147-3ac7d3f8756f?w=400&h=300&fit=crop",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Наш каталог
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свежие яйца высочайшего качества
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="font-montserrat text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">
                      {product.price}₽
                    </span>
                    <span className="text-gray-500 ml-1">/ {product.unit}</span>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="ShoppingCart" size={18} />
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 text-center">
          <h3 className="font-montserrat text-2xl font-semibold mb-4">
            Оптовые заказы
          </h3>
          <p className="text-gray-600 mb-6">
            При заказе от 100 яиц действуют специальные цены. Свяжитесь с нами
            для расчёта стоимости.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Узнать цены
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
