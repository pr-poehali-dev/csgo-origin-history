import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const historyTimeline = [
    {
      year: "2012",
      title: "Выход CS:GO",
      description: "21 августа 2012 года Valve выпустила Counter-Strike: Global Offensive. Игра создана на движке Source и стала четвёртой игрой серии."
    },
    {
      year: "2013",
      title: "Появление скинов",
      description: "Введена система скинов оружия. Это изменило экономику игры и создало целую индустрию торговли внутриигровыми предметами."
    },
    {
      year: "2015",
      title: "Первый мейджор",
      description: "DreamHack Winter стал первым мейджором с призовым фондом $250,000. Начало эры профессионального киберспорта в CS:GO."
    },
    {
      year: "2018",
      title: "Free-to-Play",
      description: "CS:GO стала бесплатной. Введён режим Prime и Trust Factor для борьбы с читерами."
    },
    {
      year: "2023",
      title: "Переход на Source 2",
      description: "Анонсирована Counter-Strike 2 на движке Source 2, ознаменовав новую эру игры."
    }
  ];

  const esportsTournaments = [
    {
      name: "Intel Extreme Masters",
      prize: "$1,000,000",
      location: "Катовице, Польша",
      icon: "Trophy"
    },
    {
      name: "ESL One",
      prize: "$500,000",
      location: "Кёльн, Германия",
      icon: "Award"
    },
    {
      name: "BLAST Premier",
      prize: "$425,000",
      location: "Копенгаген, Дания",
      icon: "Star"
    },
    {
      name: "PGL Major",
      prize: "$1,000,000",
      location: "Различные локации",
      icon: "Crown"
    }
  ];

  const legendaryTeams = [
    {
      name: "Natus Vincere",
      country: "Украина",
      achievements: "Чемпионы PGL Major Stockholm 2021",
      players: "s1mple, electronic, Perfecto, b1t, sdy",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      name: "FaZe Clan",
      country: "Международная",
      achievements: "Чемпионы PGL Major Antwerp 2022",
      players: "rain, karrigan, Twistzz, ropz, broky",
      color: "from-red-500 to-red-700"
    },
    {
      name: "Astralis",
      country: "Дания",
      achievements: "4x Major Champions, Era 2018-2019",
      players: "device, dupreeh, Xyp9x, gla1ve, Magisk",
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Fnatic",
      country: "Швеция",
      achievements: "3x Major Champions, Легенды 2013-2015",
      players: "JW, flusha, KRIMZ, olofmeister, dennis",
      color: "from-orange-500 to-orange-700"
    },
    {
      name: "Team Liquid",
      country: "США",
      achievements: "Intel Grand Slam Winners 2019",
      players: "EliGE, NAF, Stewie2K, nitr0, Twistzz",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Virtus.pro",
      country: "Россия",
      achievements: "Легенды CS:GO, множество побед",
      players: "NEO, TaZ, pasha, Snax, byali",
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Crosshair" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">CS:GO HISTORY</h1>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('history')}
              className="text-foreground hover:text-primary transition-colors"
            >
              История
            </button>
            <button 
              onClick={() => scrollToSection('esports')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Киберспорт
            </button>
            <button 
              onClick={() => scrollToSection('teams')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Команды
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/fe175112-c1f1-4a74-9c09-d3d3d621be41/files/2161f2c1-f890-4ea4-877d-27ccff9bb9ea.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <Badge className="mb-4 text-lg px-6 py-2 bg-primary/20 text-primary border-primary">
            Легенда киберспорта
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            COUNTER-STRIKE
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GLOBAL OFFENSIVE</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            От мода для Half-Life до крупнейшей киберспортивной дисциплины мира
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={() => scrollToSection('history')}
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              История игры
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('esports')}
            >
              <Icon name="Trophy" size={20} className="mr-2" />
              Киберспорт
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="history" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary">
              <Icon name="Clock" size={16} className="mr-2" />
              Временная линия
            </Badge>
            <h2 className="text-5xl font-bold mb-4">История CS:GO</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От релиза до становления легендой киберспорта
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary" />
            
            {historyTimeline.map((event, index) => (
              <div 
                key={event.year}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                } md:w-1/2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold">
                        {event.year.slice(2)}
                      </div>
                      <h3 className="text-2xl font-bold">{event.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="esports" 
        className="py-20 px-4 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/fe175112-c1f1-4a74-9c09-d3d3d621be41/files/a39d6895-5283-4e95-9f2f-fc08a463c01f.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              <Icon name="Gamepad2" size={16} className="mr-2" />
              Профессиональная сцена
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Киберспорт</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Крупнейшие турниры с многомиллионными призовыми фондами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {esportsTournaments.map((tournament, index) => (
              <Card 
                key={tournament.name}
                className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105 border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name={tournament.icon as any} size={28} className="text-primary" />
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {tournament.prize}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tournament.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>{tournament.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50">
            <CardContent className="p-8 text-center">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-4">Миллионы зрителей по всему миру</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                CS:GO входит в топ-3 самых популярных киберспортивных дисциплин. 
                Мейджоры собирают аудиторию более 1 миллиона зрителей одновременно.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-muted-foreground">Онлайн зрителей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">$15M+</div>
                  <div className="text-muted-foreground">Призовых в год</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Турниров ежегодно</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section 
        id="teams" 
        className="py-20 px-4 relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              <Icon name="Shield" size={16} className="mr-2" />
              Легенды
            </Badge>
            <h2 className="text-5xl font-bold mb-4">Легендарные команды</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Составы, которые вошли в историю CS:GO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legendaryTeams.map((team, index) => (
              <Card 
                key={team.name}
                className="bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105 border-primary/30 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${team.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{team.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="MapPin" size={14} />
                        <span>{team.country}</span>
                      </div>
                    </div>
                    <Icon name="Shield" size={32} className="text-primary/50" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Trophy" size={16} className="text-primary" />
                      <span className="text-sm font-semibold">Достижения</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{team.achievements}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Users" size={16} className="text-secondary" />
                      <span className="text-sm font-semibold">Состав</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{team.players}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-8 text-center">
              <Icon name="Star" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-3">Золотая эра Counter-Strike</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                CS:GO подарил миру незабываемые моменты и легендарные противостояния. 
                От доминирования Astralis до невероятных выступлений s1mple, 
                каждая команда внесла свой вклад в развитие киберспорта.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Crosshair" size={24} className="text-primary" />
            <span className="font-bold">CS:GO HISTORY</span>
          </div>
          <p>Легенда продолжается</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;