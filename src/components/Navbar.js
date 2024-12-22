import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tabPath) => {
    setActiveTab(tabPath);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => handleTabClick('/')}>
            TELUGU BO
          </Link>
        </div>
        <ul className="nav-links">
          {['/', '/boxoffice', '/aptg', '/ATRDay1'].map((path, index) => (
            <li
              key={path}
              className={activeTab === path ? 'active-tab' : ''}
              onClick={() => handleTabClick(path)}
            >
              <Link to={path}>
                {['Home', 'BoxOffice', 'APTG Area', 'ATR Day1'][index]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
