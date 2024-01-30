import React from 'react';
import "./textBox.css";

type textBoxProps = {
  onInputChange: (value: string) => void;
  placeholder: string;
  idTextBox: string;
};

const textBox: React.FC<textBoxProps> = ({ onInputChange, placeholder, idTextBox }) => {
  return (
    <>
      <div className="textBoxContainer">
        <input type="text" 
                id={idTextBox} 
                placeholder={placeholder}
                onChange={(e) => onInputChange(e.target.value)}/>
      </div>
    </>
  );
};

export default textBox;