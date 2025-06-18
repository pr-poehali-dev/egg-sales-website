import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🥚</span>
            </div>
            <span className="font-montserrat font-bold text-xl text-gray-900">
              Домашние Яйца
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("catalog")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              >
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
