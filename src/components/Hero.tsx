import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
              <span className="text-4xl">🥚</span>
            </div>
          </div>

          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Свежие домашние яйца
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            От наших счастливых кур к вашему столу. Экологически чистые, без
            химии и добавок.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("catalog")}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Посмотреть каталог
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              Заказать сейчас
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-green-600" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                100% натуральные
              </h3>
              <p className="text-gray-600">
                Куры гуляют на свободном выгуле, питаются натуральным кормом
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                Всегда свежие
              </h3>
              <p className="text-gray-600">
                Собираем каждый день, доставляем в течение 24 часов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-orange-600" />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-2">
                С заботой
              </h3>
              <p className="text-gray-600">
                Наши куры живут в комфортных условиях и получают лучший уход
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
