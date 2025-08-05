import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "Мобильное приложение для медитации",
      description: "UX/UI дизайн приложения с интуитивным интерфейсом и успокаивающими визуальными элементами",
      category: "UI/UX Design",
      image: "/img/a9357a18-74bd-49bf-be9c-c3626fd47b7f.jpg"
    },
    {
      title: "Редизайн корпоративного сайта",
      description: "Полная переработка пользовательского опыта для технологической компании",
      category: "Web Design",
      image: "/img/81767b99-2606-4476-ac68-bba51fc9aaaf.jpg"
    },
    {
      title: "Брендинг стартапа",
      description: "Создание айдентики и визуального языка для экологичного стартапа",
      category: "Branding",
      image: "/img/4ca66ad7-fecf-4a39-9dc3-79dc4ea417cf.jpg"
    }
  ];

  const skills = [
    "UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping", 
    "User Research", "Visual Design", "Design Systems", "Wireframing"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl">Портфолио</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-black transition-colors">Главная</a>
              <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors">О себе</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-black leading-tight">
              UI/UX<br />
              <span className="font-normal">Дизайнер</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Создаю интуитивные и эстетичные пользовательские интерфейсы, 
              которые решают реальные задачи бизнеса
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
              Посмотреть работы
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-black">Портфолио</h2>
            <p className="text-gray-600 text-lg">Избранные проекты</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <div className="aspect-video bg-gray-100 mb-6 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-xl font-medium text-black">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6 text-black">О себе</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Более 5 лет создаю цифровые продукты, которые люди любят использовать. 
                Специализируюсь на UX/UI дизайне, графическом дизайне и креативных проектах.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Работаю с стартапами и крупными компаниями, помогая им создавать 
                продукты мирового уровня.
              </p>
              <Button className="bg-black hover:bg-gray-800 text-white">
                Скачать CV
              </Button>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6 text-black">Навыки</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-light mb-6">Свяжитесь со мной</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Готов обсудить ваш проект и воплотить ваши идеи в жизнь
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="mailto:hello@designer.com" 
              className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
            >
              <Icon name="Mail" size={24} />
              <span>hello@designer.com</span>
            </a>
            <a 
              href="https://t.me/designer" 
              className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
            >
              <Icon name="MessageCircle" size={24} />
              <span>@designer</span>
            </a>
            <a 
              href="https://behance.net/designer" 
              className="flex items-center space-x-3 text-lg hover:text-gray-300 transition-colors"
            >
              <Icon name="Globe" size={24} />
              <span>Behance</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-600">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;