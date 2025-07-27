import React from 'react';
import {
  Activity,
  Moon,
  Accessibility,
  ShieldCheck,
  Users,
  Smile,
  UserCircle,
  Bell,
  FileText,
  Package,
  Image,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

const settingsOptions = [
  { label: 'Active status', key: 'active-status', icon: <Activity className="w-5 h-5" /> },
  { label: 'Dark mode', key: 'dark-mode', icon: <Moon className="w-5 h-5" /> },
  { label: 'Accessibility', key: 'accessibility', icon: <Accessibility className="w-5 h-5" /> },
  { label: 'Privacy and security', key: 'privacy', icon: <ShieldCheck className="w-5 h-5" /> },
  { label: 'Family Center', key: 'family', icon: <Users className="w-5 h-5" /> },
  { label: 'Avatar', key: 'avatar', icon: <Smile className="w-5 h-5" /> },
  { label: 'Username', key: 'username', icon: <UserCircle className="w-5 h-5" /> },
  { label: 'Notification and sound', key: 'notifications', icon: <Bell className="w-5 h-5" /> },
  { label: 'Legal & policies', key: 'legal', icon: <FileText className="w-5 h-5" /> },
  { label: 'Orders', key: 'orders', icon: <Package className="w-5 h-5" /> },
  { label: 'Photo & media', key: 'media', icon: <Image className="w-5 h-5" /> },
  { label: 'Report a problem', key: 'report', icon: <AlertTriangle className="w-5 h-5" /> },
  { label: 'Help', key: 'help', icon: <HelpCircle className="w-5 h-5" /> },
];

const Settings = ({ onNavigate }) => {
  return (
    <div className="p-3 max-w-md mx-auto">
      <h2 className="text-2xl text-white font-bold mb-4">Settings</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y">
        {settingsOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onNavigate(option.key)}
            className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span className="text-gray-600 dark:text-gray-300">{option.icon}</span>
            <span className="text-gray-800 dark:text-white">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;
