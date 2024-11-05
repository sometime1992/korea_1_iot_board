import React from 'react'
import '../styles/ProgressBar.css';
import { Task } from '../types';

interface ProgressBarProps {
  tasks: Task[];
}

export default function ProgressBar({ tasks }: ProgressBarProps) {
  const completedTasks = tasks.filter(task => task.status).length;
  const progress = tasks.length ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <div className="progress">
      <div className="progress-done" style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
}
