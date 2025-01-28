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
    scenario: "A company is experiencing high turnover rates and declining employee satisfaction. Exit interviews reveal that employees feel undervalued and lack growth opportunities.",
    correctFrame: "hr",
    explanation: "This scenario primarily relates to the Human Resource frame as it deals with employee needs, satisfaction, and development opportunities. The focus should be on creating an environment that supports and develops employees.",
    options: [
      { id: 'structural', name: 'Structural Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Political Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolic Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 2,
    scenario: "A merger between two companies is causing confusion about reporting lines and job responsibilities. Teams are unsure about their roles and who makes which decisions.",
    correctFrame: "structural",
    explanation: "This is a structural issue as it involves organizational design, clarity of roles, and decision-making processes. The structural frame helps address these organizational architecture challenges.",
    options: [
      { id: 'structural', name: 'Structural Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Political Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolic Frame', icon: Sparkles, color: 'bg-purple-500' }
    ]
  },
  {
    id: 3,
    scenario: "Different departments are competing for limited budget resources, leading to conflicts and decreased collaboration between teams.",
    correctFrame: "political",
    explanation: "This scenario best fits the Political frame as it involves resource allocation, power dynamics, and competing interests between different organizational units.",
    options: [
      { id: 'structural', name: 'Structural Frame', icon: Building2, color: 'bg-blue-500' },
      { id: 'hr', name: 'Human Resource Frame', icon: Users, color: 'bg-green-500' },
      { id: 'political', name: 'Political Frame', icon: Swords, color: 'bg-red-500' },
      { id: 'symbolic', name: 'Symbolic Frame', icon: Sparkles, color: 'bg-purple-500' }
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
          <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">
            You scored {score} out of {questions.length} questions correctly.
          </p>
          <button
            onClick={resetQuiz}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learn the Four Frames
        </h1>
        <p className="text-xl text-gray-600">
          Practice identifying the most relevant frame for different scenarios
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
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
            <h3 className="font-semibold mb-2">Explanation:</h3>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        {showExplanation && (
          <button
            onClick={isLastQuestion ? resetQuiz : nextQuestion}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            {isLastQuestion ? 'Restart Quiz' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}