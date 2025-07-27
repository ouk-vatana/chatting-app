import React, { useState } from 'react';
import Settings from './Settings';
import ActiveStatus from './ActiveStatus';
import DarkMode from './DarkMode';
import Accessibility from './Accessibility';
import Privacy from './Privacy';
import Family from './Family';
import Avatar from './Avatar';
import Username from './Username';
import Notifications from './Notifications';
import Legal from './Legal';
import Orders from './Orders';
import Media from './Media';
import Report from './Report';
import Help from './Help';

const SettingsRoutes = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const goBack = () => setCurrentPage('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'active-status':
        return <ActiveStatus onBack={goBack} />;
      case 'dark-mode':
        return <DarkMode onBack={goBack} />;
      case 'accessibility':
        return <Accessibility onBack={goBack} />;
      case 'privacy':
        return <Privacy onBack={goBack} />;
      case 'family':
        return <Family onBack={goBack} />;
      case 'avatar':
        return <Avatar onBack={goBack} />;
      case 'username':
        return <Username onBack={goBack} />;
      case 'notifications':
        return <Notifications onBack={goBack} />;
      case 'legal':
        return <Legal onBack={goBack} />;
      case 'orders':
        return <Orders onBack={goBack} />;
      case 'media':
        return <Media onBack={goBack} />;
      case 'report':
        return <Report onBack={goBack} />;
      case 'help':
        return <Help onBack={goBack} />;
      default:
        return <Settings onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="w-full h-full overflow-auto bg-white dark:bg-gray-900 p-4 rounded-xl">
      {renderPage()}
    </div>
  );
};

export default SettingsRoutes;
