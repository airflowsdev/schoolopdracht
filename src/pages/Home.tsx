import React from 'react';
import { Building2, Users, Swords, Sparkles, LineChart, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const frames = [
    {
      name: 'Structureel Frame',
      icon: Building2,
      description: 'Focus op organisatiearchitectuur, regels, rollen, en doelen',
      color: 'bg-blue-500',
    },
    {
      name: 'HR Frame',
      icon: Users,
      description: 'Benadrukt het begrijpen van mensen, hun behoeften, vaardigheden, en relaties',
      color: 'bg-green-500',
    },
    {
      name: 'Politiek Frame',
      icon: Swords,
      description: 'Behandelt macht, conflict, concurrentie, en organisatiepolitiek',
      color: 'bg-red-500',
    },
    {
      name: 'Symbolisch Frame',
      icon: Sparkles,
      description: 'Richt zich op cultuur, betekenis, ritueel, ceremonie, en verhalen',
      color: 'bg-purple-500',
    },
  ];

  return (
    <motion.div className="space-y-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welkom bij Vlechtwerk Advies
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Analyseer en verbeter organisaties vanuit meerdere perspectieven met behulp van het Vier Frames-model van Bolman en Deal
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {frames.map((frame) => {
          const Icon = frame.icon;
          return (
            <motion.div
              key={frame.name}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${frame.color} w-14 h-14 rounded-full flex items-center justify-center mb-5`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {frame.name}
              </h3>
              <p className="text-gray-600">
                {frame.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Aan de slag
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/home/advice" className="p-6 bg-indigo-50 rounded-lg block">
            <LineChart className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Genereer Statisch Advies
            </h3>
            <p className="text-gray-600">
              Voer uw organisatiecontext in en ontvang framespecifieke aanbevelingen
            </p>
          </Link>
          <Link to="/home/learn" className="p-6 bg-green-50 rounded-lg block">
            <GraduationCap className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Leer de Frames
            </h3>
            <p className="text-gray-600">
              Interactieve oefeningen en casestudies om de Vier Frames-aanpak te beheersen
            </p>
          </Link>
          <Link to="/home/resources" className="p-6 bg-purple-50 rounded-lg block">
            <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Verken Bronnen
            </h3>
            <p className="text-gray-600">
              Toegang tot aanvullende materialen, voorbeelden, en best practices
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}