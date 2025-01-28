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
    name: 'Structural Frame',
    icon: Building2,
    color: 'bg-blue-500',
    description: 'Focus on organizational architecture, rules, roles, and goals',
  },
  {
    id: 'hr',
    name: 'Human Resource Frame',
    icon: Users,
    color: 'bg-green-500',
    description: 'Emphasizes understanding people, their needs, skills, and relationships',
  },
  {
    id: 'political',
    name: 'Political Frame',
    icon: Swords,
    color: 'bg-red-500',
    description: 'Deals with power, conflict, competition, and organizational politics',
  },
  {
    id: 'symbolic',
    name: 'Symbolic Frame',
    icon: Sparkles,
    color: 'bg-purple-500',
    description: 'Focuses on culture, meaning, ritual, ceremony, and stories',
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
        'Review and optimize organizational structure',
        'Clarify roles and responsibilities',
        'Establish clear performance metrics',
      ],
      hr: [
        'Conduct skills assessment',
        'Implement training programs',
        'Improve communication channels',
      ],
      political: [
        'Map key stakeholders and their interests',
        'Build coalitions for change',
        'Address resource allocation conflicts',
      ],
      symbolic: [
        'Develop compelling change narrative',
        'Create meaningful rituals and ceremonies',
        'Reinforce organizational values',
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
          Four Frames Advisor
        </h1>
        <p className="text-xl text-gray-600">
          Get tailored recommendations based on multiple perspectives
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
          <h2 className="text-2xl font-semibold mb-4">Describe Your Situation</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Situation
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={context.situation}
                onChange={(e) => setContext(prev => ({ ...prev, situation: e.target.value }))}
                placeholder="Describe your current organizational situation..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goals
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={context.goals}
                onChange={(e) => setContext(prev => ({ ...prev, goals: e.target.value }))}
                placeholder="What are your main objectives?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Challenges
              </label>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                value={context.challenges}
                onChange={(e) => setContext(prev => ({ ...prev, challenges: e.target.value }))}
                placeholder="What challenges are you facing?"
              />
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!context.situation || !context.goals || !context.challenges}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Select Frames to Analyze</h2>
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
              Back
            </button>
            <button
              onClick={generateAdvice}
              disabled={selectedFrames.length === 0}
              className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Generate Advice
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">Recommendations</h2>
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