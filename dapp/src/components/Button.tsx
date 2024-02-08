import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border-transparent my-20 flex items-center ${className}`}
      >
        <span>{label}</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
          className="w-20 ml-2"
          alt="Icon"
        />
      </button>
    </div>
  );
};

export default Button;
