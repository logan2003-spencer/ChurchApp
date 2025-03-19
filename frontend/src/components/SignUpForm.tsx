'use client';
import React, { useState } from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Value"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Value"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={styles.input}
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (000) 000-0000"
        />
      </div>

      <div className={styles.familyOption}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          <span className={styles.checkboxText}>Add Family</span>
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
