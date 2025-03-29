'use client';

import React, { useState } from 'react';
import styles from './EventRequestForm.module.css';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { SubmitButton } from './SubmitButton';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface EventRequestData {
  isAttendance: boolean;
  eventName: string;
  eventDesc: string;
  eventAddress: string;
  eventStart: Date | null; // Changed to Date type for compatibility with React-Datepicker
  eventEnd: Date | null; // Changed to Date type for compatibility with React-Datepicker
}

const EventRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<EventRequestData>({
    isAttendance: false,
    eventName: '',
    eventDesc: '',
    eventAddress: '',
    eventStart: null, // Initial value is null
    eventEnd: null, // Initial value is null
  });

  // Handle input changes for text fields
  const handleInputChange = (name: keyof EventRequestData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle date changes for date pickers
  const handleDateChange = (
    name: keyof EventRequestData,
    date: Date | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date,
    }));
  };

  // Handle form submission using Fetch API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Make POST request to backend
      const response = await fetch('http://localhost:5116/api/Event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Parse JSON response
      console.log('Response:', data);
      alert('Event submitted successfully!');
    } catch (error) {
      console.error('Error submitting event:', error);
      alert('Failed to submit event. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.formTitle}>Add a New Event</h1>

      <FormInput
        label="Event Name"
        value={formData.eventName}
        onChange={(value) => handleInputChange('eventName', value)}
      />

      <FormTextarea
        label="Event Description"
        value={formData.eventDesc}
        onChange={(value) => handleInputChange('eventDesc', value)}
      />

      <FormInput
        label="Address"
        value={formData.eventAddress}
        onChange={(value) => handleInputChange('eventAddress', value)}
      />

      {/* Start Date Picker */}
      <div className="form-group" style={{ marginTop: '25pt' }}>
        <label>Start Date and Time</label>
        <ReactDatePicker
          selected={formData.eventStart}
          onChange={(date) => handleDateChange('eventStart', date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="Pp"
          className="form-control"
        />
      </div>

      {/* End Date Picker */}
      <div className="form-group" style={{ marginTop: '25pt' }}>
        <label>End Date and Time</label>
        <ReactDatePicker
          selected={formData.eventEnd}
          onChange={(date) => handleDateChange('eventEnd', date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="Pp"
          className="form-control"
        />
      </div>

      <SubmitButton text="Submit Request" />
    </form>
  );
};

export default EventRequestForm;
