import React from 'react';
import styles from './EventRequestForm.module.css';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.label}>{label}</label>
      <br></br>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
      />
    </div>
  );
};
