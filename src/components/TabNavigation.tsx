import React, { useState } from 'react';

interface TabProps {
  tabs: string[];
}

export default function TabNavigation({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <nav className="flex border-b border-gray-800">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 font-medium ${
            activeTab === tab
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-white'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}