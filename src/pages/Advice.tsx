import React, { useState } from 'react';
import { Building2, Users, Swords, Sparkles, ArrowRight } from 'lucide-react';

type Frame = {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  description: string;
};

const frames: Frame[] = [
  {
    id: 'structural',
    name: 'Structureel Frame',
    icon: Building2,
    color: 'bg-blue-500',
    description: 'Focus op organisatiearchitectuur, regels, rollen, en doelen',
  },
  {
    id: 'hr',
    name: 'Human Resource Frame',
    icon: Users,
    color: 'bg-green-500',
    description: 'Benadrukt het begrijpen van mensen, hun behoeften, vaardigheden, en relaties',
  },
  {
    id: 'political',
    name: 'Politiek Frame',
    icon: Swords,
    color: 'bg-red-500',
    description: 'Behandelt macht, conflict, concurrentie, en organisatiepolitiek',
  },
  {
    id: 'symbolic',
    name: 'Symbolisch Frame',
    icon: Sparkles,
    color: 'bg-purple-500',
    description: 'Richt zich op cultuur, betekenis, ritueel, ceremonie, en verhalen',
  },
];

export default function Advice() {
  const [selectedFrames, setSelectedFrames] = useState<string[]>([]);
  const [context, setContext] = useState({
    situation: '',
    goals: '',
    challenges: '',
  });
  const [step, setStep] = useState(1);
  const [advice, setAdvice] = useState<Record<string, string[]>>({});

  const toggleFrame = (frameId: string) => {
    setSelectedFrames(prev =>
      prev.includes(frameId)
        ? prev.filter(id => id !== frameId)
        : [...prev, frameId]
    );
  };

  const generateAdvice = () => {
    // In a real application, this would call an API
    const mockAdvice: Record<string, string[]> = {
      structural: [
        'Beoordeel en optimaliseer de organisatiestructuur',
        'Verduidelijk rollen en verantwoordelijkheden',
        'Stel duidelijke prestatie-indicatoren vast',
      ],
      hr: [
        'Voer een vaardigheidsbeoordeling uit',
        'Implementeer trainingsprogramma\'s',
        'Verbeter communicatiekanalen',
      ],
      political: [
        'Breng belangrijke belanghebbenden en hun belangen in kaart',
        'Bouw coalities voor verandering',
        'Pak conflicten over middelenverdeling aan',
      ],
      symbolic: [
        'Ontwikkel een overtuigend veranderingsverhaal',
        'Creëer betekenisvolle rituelen en ceremonies',
        'Versterk organisatiewaarden',
      ],
    };

    const selectedAdvice: Record<string, string[]> = {};
    selectedFrames.forEach(frameId => {
      selectedAdvice[frameId] = mockAdvice[frameId];
    });

    setAdvice(selectedAdvice);
    setStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vlechtwerk Advies
        </h1>
        <p className="text-xl text-gray-600">
          Krijg op maat gemaakte aanbevelingen op basis van meerdere perspectieven
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center items-center space-x-4 mb-8">
        {[1, 2, 3].map((s) => (
          <React.Fragment key={s}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                s <= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <ArrowRight className={`w-4 h-4 ${
                s < step ? 'text-indigo-600' : 'text-gray-300'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {step === 1 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Beschrijf Uw Situatie</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Huidige Situatie
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={context.situation}
                onChange={(e) => setContext(prev => ({ ...prev, situation: e.target.value }))}
                placeholder="Beschrijf uw huidige organisatie situatie..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Doelen
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={context.goals}
                onChange={(e) => setContext(prev => ({ ...prev, goals: e.target.value }))}
                placeholder="Wat zijn uw belangrijkste doelen?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Uitdagingen
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={context.challenges}
                onChange={(e) => setContext(prev => ({ ...prev, challenges: e.target.value }))}
                placeholder="Welke uitdagingen ervaart u?"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!context.situation || !context.goals || !context.challenges}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Volgende Stap
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Selecteer Frames om te Analyseren</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {frames.map((frame) => {
              const Icon = frame.icon;
              const isSelected = selectedFrames.includes(frame.id);
              return (
                <button
                  key={frame.id}
                  onClick={() => toggleFrame(frame.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${frame.color} p-2 rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{frame.name}</h3>
                      <p className="text-sm text-gray-600">{frame.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50"
            >
              Terug
            </button>
            <button
              onClick={generateAdvice}
              disabled={selectedFrames.length === 0}
              className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Genereer Advies
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Aanbevelingen</h2>
          <div className="space-y-6">
            {Object.entries(advice).map(([frameId, recommendations]) => {
              const frame = frames.find(f => f.id === frameId)!;
              const Icon = frame.icon;
              return (
                <div key={frameId} className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`${frame.color} p-2 rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{frame.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-6">
            <button
              onClick={() => {
                setStep(1);
                setSelectedFrames([]);
                setContext({ situation: '', goals: '', challenges: '' });
                setAdvice({});
              }}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Start New Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
}