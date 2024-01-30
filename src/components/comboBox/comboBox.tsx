import { FC } from "react";
import './comboBox.css'

type comboBoxProps = {
    onInputChange: (value: string) => void;
    placeholder: string; 
    idSelect: string; 
  };

  const options = ['SI', 'NO'];

const comboBox: FC<comboBoxProps> = ({ onInputChange, idSelect, placeholder }) => {
  return (
    <>
    <div className="comboBoxContainer">
      <select id={idSelect}
               onChange={(e) => onInputChange(e.target.value)}>

          <option defaultValue="default">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
          
      </select>
    </div>
    </>
    );
}

export default comboBox;