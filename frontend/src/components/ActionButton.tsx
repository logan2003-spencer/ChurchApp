import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeLanding.module.css';

interface ActionButtonProps {
  label: string;
  className?: string;
  to: string; // Ensure `to` is included
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  className,
  to,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.longButton}>
      <button className={className} onClick={() => navigate(to)}>
        {label}
      </button>
    </div>
  );
};
