import React from 'react';
import { BookOpen, FileText, Video, Users, Download, ExternalLink } from 'lucide-react';

type Resource = {
  title: string;
  description: string;
  type: 'article' | 'video' | 'case-study' | 'template';
  icon: React.ElementType;
  link: string;
};

const resources: Resource[] = [
  {
    title: "Understanding Organizational Politics",
    description: "A comprehensive guide to navigating political dynamics in organizations using the Political Frame perspective.",
    type: "article",
    icon: FileText,
    link: "https://hbr.org/2016/07/what-everyone-should-know-about-office-politics"
  },
  {
    title: "Building Effective Teams",
    description: "Learn how to apply the Human Resource Frame to develop high-performing teams and foster employee engagement.",
    type: "video",
    icon: Video,
    link: "https://www.youtube.com/watch?v=ef-aYiRZXWI"
  },
  {
    title: "Organizational Structure Case Study",
    description: "Real-world example of how a company used the Structural Frame to reorganize and improve efficiency.",
    type: "case-study",
    icon: Users,
    link: "https://hbr.org/2019/03/the-right-way-to-restructure-your-organization"
  }
];

const downloadTemplates = [
  {
    title: "Four Frames Analysis Template",
    description: "A structured template for analyzing organizational situations using all four frames.",
    format: "PDF"
  },
  {
    title: "Change Management Worksheet",
    description: "Guide for planning organizational changes considering multiple perspectives.",
    format: "PDF"
  }
];

export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Resources & Materials
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access a curated collection of articles, case studies, and practical tools to deepen your understanding of the Four Frames approach
        </p>
      </div>

      {/* Featured Resources */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 rounded-lg p-3 group-hover:bg-indigo-200 transition-colors">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                  </div>
                  <p className="text-gray-600 mt-2">{resource.description}</p>
                  <span className="inline-block mt-3 text-sm font-medium text-indigo-600">
                    View {resource.type}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Templates Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center space-x-3 mb-6">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Templates & Worksheets</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {downloadTemplates.map((template) => (
            <div
              key={template.title}
              className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{template.title}</h3>
                  <p className="text-gray-600 mt-1">{template.description}</p>
                </div>
                <button
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
                  onClick={() => alert('Download functionality would be implemented here')}
                >
                  <Download className="h-5 w-5" />
                  <span className="text-sm font-medium">{template.format}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">When to Use Each Frame</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Use the Structural Frame when dealing with organizational design and efficiency</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Apply the HR Frame for people-related issues and development</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Consider the Political Frame during conflicts and resource allocation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Use the Symbolic Frame for cultural change and meaning-making</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Tips for Analysis</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Always consider multiple frames for complex situations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Start with the most relevant frame but don't ignore others</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Document your analysis and revisit assumptions regularly</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="block w-2 h-2 bg-white rounded-full" />
                <span>Involve stakeholders from different perspectives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}