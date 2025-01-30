import React, { useState } from 'react';
import { Building2, Users, Swords, Sparkles, CheckCircle2, XCircle } from 'lucide-react';

type Question = {
  id: number;
  scenario: string;
  correctFrame: string;
  explanation: string;
  options: {
    id: string;
    name: string;
    icon: React.ElementType;
    color: string;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    scenario: "In een organisatie heeft Mark het niet meer naar zijn zin, omdat de manager niet naar zijn individuele behoeften, wensen en vaardigheden luistert. Mark twijfelt om ontslag te nemen, maar vindt het lastig om afscheid te nemen van het bedrijf. Een collega Emma attendeert hem dat ‘geen ontslag’ nemen voor zowel de organisatie als Mark in het nadeel gaan werken. Vanuit welk frame denkt Emma? ",
    correctFrame: "hr",
    explanation: "Bolman & Deal leggen uit dat zodra de fit tussen organisatie en werknemer niet meer goed is, dit in het nadeel voor beide partijen gaat werken. De fit is gebaseerd op de individuele wensen van de werknemer. Daarnaast dat de werknemer zijn vaardigheden kan benutten in de organisatie en dat het werk voldoet aan de financiële- en levensstijl van de werknemer. In dit geval is er geen juiste fit meer, waardoor ontslag nemen een goede optie kan zijn voor Mark. ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 2,
    scenario: ": Een grote multinational heeft de afgelopen maanden moelijkheden ervaren in de snelheid van besluitvorming. Het duurt lang voordat opdrachten worden goedgekeurd en er wordt te laat teruggekoppeld naar weknemers, wat ook gevolgen heeft voor hun werk. Dit leidt tot veel frustratie bij de werknemers. Vanuit welk frame zou dit opgelost moeten worden?",
    correctFrame: "structural",
    explanation: "Het Structural Frame, er zijn problemen in de efficientie van besluitvorming en taken zijn niet goed genoeg verdeeld om snel genoeg te werk te kunnen gaan. ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 3,
    scenario: "Verschillende afdelingen strijden om beperkte budgetmiddelen, wat leidt tot conflicten en verminderde samenwerking tussen teams.",
    correctFrame: "political",
    explanation: "Dit scenario past het beste bij het Politieke frame omdat het gaat om middelenverdeling, machtsdynamiek en concurrerende belangen tussen verschillende organisatie-eenheden.",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 4,
    scenario: "Vanuit de ideeën van Hackman zijn er drie cruciale factoren voor de werknemers in een organisatie: De werknemers voeren betekenisvol werk uit, hebben persoonlijke verantwoordelijkheid en krijgen feedback over resultaten. Vanuit welk frame komen deze factoren?",
    correctFrame: "hr",
    explanation: "Het HR-frame, het HR-frame omschrijft dat deze drie factoren zorgen voor gemotiveerde werknemers en een goede fit tussen organisatie en werknemer."
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 5,
    scenario: "Maarten werkt in een team bij een vastgoedbedrijf, maar hij merkt om dat de rollen en verantwoordelijkheden van medewerkers niet duidelijk zijn gedefinieerd. Nieuwe medewerkers krijgen een algemene introductie en gedetailleerde instructies over taakverdeling en werkprocessen ontbreken. Hierdoor interpreteren werknemers hun rol op basis van persoonlijke voorkeuren. Sommigen richten zich vooral op klantvriendelijkheid en improviseren bij de invulling van taken, terwijl anderen zich voornamelijk op snelheid focussen. Dit leidt tot inconsistentie in de service. Binnen welk frame kan dit probleem verholpen worden?",
    correctFrame: "structural",
    explanation: "Dit is een dilemma binnen het structurele frame: Lack of clarity vs. lack of creativity. Dit is een uitdaging voor organisaties om een balans te vinden tussen deze twee uitersten: genoeg duidelijkheid om efficiënt te werken, maar ook genoeg vrijheid om creativiteit en probleemoplossend vermogen te stimuleren.",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 6,
    scenario: ": Jaarlijks wordt aan werknemers gevraagd hoe betrokken zij zich voelen bij het bedrijf. Uit onderzoek bleek dat veel werknemers sinds het pensioen van de oprichter (die voor velen een boegbeeld was) zich minder identificeren met de visie van de organisatie. Vanuit welk frame is dit probleem het beste te benaderen?",
    correctFrame: "symbolic",
    explanation: "Het Symbolic Frame, omdat de oprichter van het bedrijf gezien kan worden als een held van het bedrijf. Hij is de personificatie van de waarden en visie van de organisatie, waardoor naast zijn rol als baas zijn functie ook een diepere betekenis heeft voor de werknemers. Als hij stopt zorgt dit mogelijk voor problemen met de identiteit van ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 7,
    scenario: "Julian is sinds kort aangesteld als manager in een Retail bedrijf. Hij werkte hier nog niet en ervaart moeilijkheden in de sfeer die er is binnen het bedrijf. Een van de werknemers Sanne, werkt al 10 jaar bij het bedrijf en weet veel over de werking van het bedrijf. Werknemers neigen naar haar toe te trekken voor vragen en taken in plaats van naar Julian, wiens taak het eigenlijk is om te ondersteunen en aan te sturen. Binnen welk frame ligt dit probleem?",
    correctFrame: "political",
    explanation: "Het Politieke Frame, Sanne beschikt over de machtsbron reputatie en informatie en expertise. Dit zorgt ervoor dat mensen naar haar toe trekken. Julian kan dit als lastig ervaren omdat hij als manager de macht hoort te hebben. ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 8,
    scenario: "Een werknemer klaagt bij zijn manager dat hij zijn werk nutteloos vindt. Hij geeft aan dat veel van zijn taken te veel overeenkomen met die van zijn collega’s op de afdeling. Hierdoor heeft het gevoel dat de dubbelzinnige taakverdeling leidt tot verveling en frustratie. Welk frame kan de manager gebruiken om deze spanning over de taken het beste te bemiddelen? ",
    correctFrame: "structural",
    explanation: "Het structural frame, bij dit probleem kan de spanning van het “gap versus overlap” dilemma worden herkend. Hierbij is met betrekking tot te taakverdeling te veel “overlap”, waardoor de afdeling niet functioneel verloopt. Er moet met een structurele bril gekeken worden naar de functies en taken binnen de afdeling om dit probleem te helpen. ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 9,
    scenario: ": Sinds het thuiswerken tijdens de coronapandemie merkt de manager dat medewerkers in de vroege ochtend minder productief en betrokken zijn. Werknemers geven aan dat ze zonder de gezamenlijke dagstart (waarbij ze samen koffie drinken en spreken over de dagelijkse doelen) minder verbonden voelen en niet in hun gebruikelijke ritme komen. De manager wil een dagstart creëren die dezelfde betekenis heeft, maar dan op afstand. Welk frame kan hij hier het beste bij gebruiken?",
    correctFrame: "symbolic",
    explanation: "Het Symbolic Frame, omdat de dagstart gezien kan worden als een ritueel. Het gaat niet alleen om de letterlijke activiteit maar ook om de diepere betekenis, het creëert saamhorigheid en helpt de werknemers om te starten met de dag in een routine. Het is een mentale schakel voor de werkcultuur die nu bij het thuiswerken ook weer een symbolische waarde kan geven voor de werknemers (Bolman en Deal, 2021, pp. 287-291). ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 10,
    scenario: "Een manager merkt dat zijn werknemers schade aan brengen aan de organisatie. De werknemers maken grote fouten en leveren werk met slechte kwaliteit. De manager wil graag de problemen oplossen. Dit wil de manager gaan doen door te investeren in zijn medewerkers door middel van training. Hierdoor wil de manager ervoor zorgen dat de werknemers voortdurend in ontwikkeling zijn. Vanuit welk frame handelt de manager? ",
    correctFrame: "hr",
    explanation: "De manager handelt vanuit de HR-frame door te investeren in zijn werknemers. Hierdoor zorgt de manager ervoor dat de kennis en vaardigheden van de werknemers up to date blijven. De werknemers kunnen zo groeien mee groeien met de ontwikkelingen van het bedrijf, waardoor fouten en slechte kwaliteit worden voorkomen. Daarnaast krijgen werknemers het gevoel dat de manager in hun investeert, waardoor zij zich waardig en gewenst voelen in de organisatie. ",
    options: [
      { id: 'structural', name: 'Structureel Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Politiek Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolisch Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  }
];

export default function Learn() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (frameId: string) => {
    setSelectedAnswer(frameId);
    setShowExplanation(true);
    if (frameId === questions[currentQuestion].correctFrame) {
      setScore(score + 1);
    }
    if (isLastQuestion) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 2000);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isQuizComplete = currentQuestion >= questions.length;

  if (isQuizComplete) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Voltooid!</h2>
          <div className="text-6xl font-bold text-indigo-600 mb-4">
            {score} / {questions.length}
          </div>
          <p className="text-xl mb-6">
            U heeft {score} van de {questions.length} vragen correct beantwoord.
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{ width: `${(score / questions.length) * 100}%` }}
            />
          </div>
          <button
            onClick={resetQuiz}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
          >
            Probeer Opnieuw
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Leer de Vier Frames
        </h1>
        <p className="text-xl text-gray-600">
          Oefen met het identificeren van het meest relevante frame voor verschillende scenario's
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">
              Vraag {currentQuestion + 1} van {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-500">
              Score: {score}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Scenario:</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {question.scenario}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {question.options.map((frame) => {
            const Icon = frame.icon;
            const isSelected = selectedAnswer === frame.id;
            const isCorrect = showExplanation && frame.id === question.correctFrame;
            const isWrong = showExplanation && isSelected && frame.id !== question.correctFrame;

            return (
              <button
                key={frame.id}
                onClick={() => !showExplanation && handleAnswer(frame.id)}
                disabled={showExplanation}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                } ${isCorrect ? 'border-green-500 bg-green-50' : ''} 
                  ${isWrong ? 'border-red-500 bg-red-50' : ''}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${frame.color} p-2 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="font-semibold">{frame.name}</h3>
                  </div>
                  {showExplanation && isCorrect && (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  )}
                  {showExplanation && isWrong && (
                    <XCircle className="h-6 w-6 text-red-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">Uitleg:</h3>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button
            onClick={isLastQuestion ? resetQuiz : nextQuestion}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            {isLastQuestion ? 'Herstart Quiz' : 'Volgende Vraag'}
          </button>
        )}
      </div>
    </div>
  );
}