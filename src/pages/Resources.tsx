import React from 'react';
import { BookOpen, FileText, Video, Users, Download, ExternalLink, Building2, Swords, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

type Resource = {
  title: string;
  description: string;
  type: "article" | "video" | "case-study" | "template";
  icon: React.ElementType;
  link: string;
};

const resources: Resource[] = [
  {
    title: "Begrip van Organisatiepolitiek",
    description: "Een uitgebreide gids voor het navigeren door politieke dynamiek in organisaties met behulp van het Politieke Frame-perspectief.",
    type: "article",
    icon: FileText,
    link: "https://hbr.org/2016/07/what-everyone-should-know-about-office-politics"
  },
  {
    title: "Effectieve Teams Bouwen",
    description: "Leer hoe u het Human Resource Frame kunt toepassen om hoogpresterende teams te ontwikkelen en medewerkersbetrokkenheid te bevorderen.",
    type: "video",
    icon: Video,
    link: "https://www.youtube.com/watch?v=ef-aYiRZXWI"
  },
  {
    title: "Organisatiestructuur Casestudy",
    description: "Praktijkvoorbeeld van hoe een bedrijf het Structurele Frame gebruikte om te reorganiseren en de efficiëntie te verbeteren.",
    type: "case-study",
    icon: Users,
    link: "https://hbr.org/2019/03/the-right-way-to-restructure-your-organization"
  }
];

const downloadTemplates = [
  {
    title: "Vier Frames Analyse Sjabloon",
    description: "Een gestructureerd sjabloon voor het analyseren van organisatiesituaties met behulp van alle vier frames.",
    format: "PDF"
  },
  {
    title: "Verandermanagement Werkblad",
    description: "Gids voor het plannen van organisatieveranderingen vanuit meerdere perspectieven.",
    format: "PDF"
  }
];

export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          FrameWiki
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Klik op een van de onderstaandeframes om meer informatie te krijgen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-12">
        <Link to="/home/structural" className="p-6 bg-blue-50 rounded-lg block text-center">
          <Building2 className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Structureel Frame
          </h3>
        </Link>
        <Link to="/home/hr" className="p-6 bg-green-50 rounded-lg block text-center">
          <Users className="h-12 w-12 text-green-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            HR Frame
          </h3>
        </Link>
        <Link to="/home/political" className="p-6 bg-red-50 rounded-lg block text-center">
          <Swords className="h-12 w-12 text-red-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Politiek Frame
          </h3>
        </Link>
        <Link to="/home/symbolic" className="p-6 bg-purple-50 rounded-lg block text-center">
          <Sparkles className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Symbolisch Frame
          </h3>
        </Link>
      </div>

      {/* Best Practices Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-gray-800">Wanneer Elk Frame te Gebruiken</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Gebruik het Structurele Frame bij organisatieontwerp en efficiëntie</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Pas het HR Frame toe voor mensgerelateerde kwesties en ontwikkeling</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Overweeg het Politieke Frame tijdens conflicten en middelenverdeling</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Gebruik het Symbolische Frame voor culturele verandering en betekenisgeving</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-gray-800">Tips voor Analyse</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Overweeg altijd meerdere frames voor complexe situaties</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Begin met het meest relevante frame maar negeer de anderen niet</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Documenteer uw analyse en herzie regelmatig aannames</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-gray-800 rounded-full" />
                <span>Betrek belanghebbenden vanuit verschillende perspectieven</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}