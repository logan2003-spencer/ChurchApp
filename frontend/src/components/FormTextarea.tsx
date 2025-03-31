import React from "react";
import styles from "./EventRequestForm.module.css";

interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className={styles.textareaField}>
      <label>{label}</label>
      <div className={styles.textarea}>
        <textarea
          className={styles.value}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7030f78278d7c5e1f552a2fc04e70b5790a8dfc?placeholderIfAbsent=true&apiKey=2f26542e423a48db8f08fa30244e0f6b"
          className={styles.img}
          alt="Resize handle"
        />
      </div>
    </div>
  );
};
