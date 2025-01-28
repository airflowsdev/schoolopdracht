import React from 'react';
import { Building2, Users, Swords, Sparkles, LineChart, GraduationCap, BookOpen } from 'lucide-react';

export default function Home() {
  const frames = [
    {
      name: 'Structural Frame',
      icon: Building2,
      description: 'Focus on organizational architecture, rules, roles, and goals',
      color: 'bg-blue-500',
    },
    {
      name: 'Human Resource Frame',
      icon: Users,
      description: 'Emphasizes understanding people, their needs, skills, and relationships',
      color: 'bg-green-500',
    },
    {
      name: 'Political Frame',
      icon: Swords,
      description: 'Deals with power, conflict, competition, and organizational politics',
      color: 'bg-red-500',
    },
    {
      name: 'Symbolic Frame',
      icon: Sparkles,
      description: 'Focuses on culture, meaning, ritual, ceremony, and stories',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Four Frames Advisor
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Analyze and improve your organization through multiple perspectives using Bolman and Deal's Four Frames model
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {frames.map((frame) => {
          const Icon = frame.icon;
          return (
            <div
              key={frame.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${frame.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {frame.name}
              </h3>
              <p className="text-gray-600">
                {frame.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Get Started
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-indigo-50 rounded-lg">
            <LineChart className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Generate Advice
            </h3>
            <p className="text-gray-600">
              Input your organizational context and receive frame-specific recommendations
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <GraduationCap className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Learn the Frames
            </h3>
            <p className="text-gray-600">
              Interactive exercises and case studies to master the Four Frames approach
            </p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Explore Resources
            </h3>
            <p className="text-gray-600">
              Access additional materials, examples, and best practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}