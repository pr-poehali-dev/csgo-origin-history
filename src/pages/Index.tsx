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
      <nav className="fixed top-0 w-full bg-background border-b border-border z-50">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-xl font-normal tracking-tight">CS:GO</h1>
          <div className="flex gap-8">
            <button 
              onClick={() => scrollToSection('history')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              История
            </button>
            <button 
              onClick={() => scrollToSection('esports')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Киберспорт
            </button>
            <button 
              onClick={() => scrollToSection('teams')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Команды
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-7xl md:text-9xl font-light tracking-tighter">
              Counter-Strike
            </h1>
            <div className="h-px w-24 bg-foreground mx-auto" />
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              От мода для Half-Life до крупнейшей киберспортивной дисциплины мира
            </p>
          </div>
        </div>
      </section>

      <section id="history" className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl font-light mb-6">История</h2>
            <div className="h-px w-16 bg-foreground mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              От релиза до становления легендой киберспорта
            </p>
          </div>

          <div className="space-y-16">
            {historyTimeline.map((event, index) => (
              <div 
                key={event.year}
                className="border-l-2 border-border pl-8 hover:border-foreground transition-colors"
              >
                <div className="flex items-baseline gap-8 mb-3">
                  <span className="text-sm text-muted-foreground font-light min-w-[60px]">{event.year}</span>
                  <h3 className="text-2xl font-normal">{event.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-[92px]">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="esports" 
        className="py-32 px-6 bg-secondary"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl font-light mb-6">Киберспорт</h2>
            <div className="h-px w-16 bg-foreground mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Крупнейшие турниры с многомиллионными призовыми фондами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border mb-16">
            {esportsTournaments.map((tournament, index) => (
              <div 
                key={tournament.name}
                className="bg-background p-8 hover:bg-muted transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-normal">{tournament.name}</h3>
                  <span className="text-sm text-muted-foreground">{tournament.prize}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tournament.location}</p>
              </div>
            ))}
          </div>

          <div className="border border-border p-12">
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              CS:GO входит в топ-3 самых популярных киберспортивных дисциплин. 
              Мейджоры собирают аудиторию более 1 миллиона зрителей одновременно.
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-4xl font-light mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Онлайн зрителей</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">$15M+</div>
                <div className="text-sm text-muted-foreground">Призовых в год</div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Турниров ежегодно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="teams" 
        className="py-32 px-6"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl font-light mb-6">Легендарные команды</h2>
            <div className="h-px w-16 bg-foreground mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Составы, которые вошли в историю CS:GO
            </p>
          </div>

          <div className="space-y-12">
            {legendaryTeams.map((team, index) => (
              <div 
                key={team.name}
                className="border-b border-border pb-12 last:border-0 hover:pb-16 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-3xl font-normal mb-2">{team.name}</h3>
                    <p className="text-sm text-muted-foreground">{team.country}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm mb-2 text-muted-foreground">Достижения</p>
                    <p className="text-sm">{team.achievements}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{team.players}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 border border-border p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              CS:GO подарил миру незабываемые моменты и легендарные противостояния. 
              От доминирования Astralis до невероятных выступлений s1mple, 
              каждая команда внесла свой вклад в развитие киберспорта.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">CS:GO — Легенда продолжается</p>
            <p className="text-sm text-muted-foreground">2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;