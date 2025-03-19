import React, { useState } from 'react';
import '../style/Browser.css'; // Import the CSS file
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Browser = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Home', isActive: true, content: <Home />, tabId: 'home' },
    { id: 2, title: 'About Me', isActive: false, content: <About />, tabId: 'about' },
    { id: 3, title: 'Projects', isActive: false, content: <Projects />, tabId: 'projects' },
    { id: 4, title: 'Contact', isActive: false, content: <Contact />, tabId: 'contact' },
  ]);

  const handleTabClick = (id) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.id === id ? { ...tab, isActive: true } : { ...tab, isActive: false }
      )
    );
  };

  const activeTabContent = tabs.find((tab) => tab.isActive)?.content || 'No active tab';

  return (
    <div className="browser-container">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${tab.isActive ? 'active' : ''}`}
            data-tab={tab.tabId} // Add data-tab attribute
            onClick={() => handleTabClick(tab.id)}
          >
            <span>{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="browser-content">
        {activeTabContent}
      </div>
    </div>
  );
};

export default Browser;
