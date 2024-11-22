import { useState } from 'react';
import './FormInputs.css';

function FormInputs(props) {
  const [charCount, setCharCount] = useState(0);
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, type, options, ...inputProps } =
    props;

  const handleFocused = () => {
    setFocused(true);
  };
  return (
    <>
    <div className="input__wrapper">
      <label>{label}</label>
      {type === 'radio' ? (
        <div className='radio-group'>
          {options.map((option, index) => (
            <label key={index} className='radio-option'>
              <input
                type='radio'
                name={inputProps.name}
                value={option.value}
                checked={inputProps.value === option.value}
                onChange={onChange}
              />
              <em>{option.label}</em>
            </label>
          ))}
        </div>
      ) : label === 'Message' ? (
        <>
          <textarea
            rows='8'
            maxLength='200'
            {...inputProps}
            onChange={(e) => {
              onChange(e);
              setCharCount(e.target.value.length);
            }}
          />
          <div className='counter'>
            <small>{`${charCount}/200 characters`}</small>
          </div>
        </>
      ) : (
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocused}
          focused={focused.toString()}
        />
      )}
      {focused && <span>{errorMessage}</span>}

    </div>
    </>
  );
}

export default FormInputs;
