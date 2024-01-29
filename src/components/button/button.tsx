import React from 'react';
import './button.css';

type ButtonComponentProps = {
  bottonName: string;
  idButton: string;
  onClick: () => void;
};

const button: React.FC<ButtonComponentProps> = ({idButton, bottonName, onClick}) => {
  return (
    <>
    <div className="buttonContainer">
      <button className="buttonComponent" id={idButton} onClick={onClick}>
        {bottonName}
      </button>
    </div>
    </>
  );
}

export default button;