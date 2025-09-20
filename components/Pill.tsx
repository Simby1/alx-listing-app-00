import React from 'react';

interface PillProps {
  label: string;
  onClick: () => void;
  isActive: boolean; // Add this prop
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  const activeClasses = isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800';
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeClasses} hover:bg-gray-300 hover:text-gray-900`}
    >
      {label}
    </button>
  );
};

export default Pill;