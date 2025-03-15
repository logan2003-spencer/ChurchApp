import * as React from 'react';
import styles from './HomeLanding.module.css';

interface ActionButtonProps {
  label: string;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  className,
}) => {
  return (
    <div className={styles.longButton}>
      <button className={className}>{label}</button>
    </div>
  );
};
