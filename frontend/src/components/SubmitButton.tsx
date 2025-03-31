import React from "react";
import styles from "./EventRequestForm.module.css";

interface SubmitButtonProps {
  text: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button type="submit" className={styles.medButton}>
      {text}
    </button>
  );
};
