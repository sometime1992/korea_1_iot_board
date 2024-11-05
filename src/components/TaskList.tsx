import React from "react";
import '../styles/TaskList.css';
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  toggleTaskStatus: (task: Task) => void;
  deleteTask: (task: Task) => void;
}

export default function TaskList({
  tasks,
  toggleTaskStatus,
  deleteTask,
}: TaskListProps) {
  return (
    <ul className="to-do-list">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`task ${task.status ? "completed" : ""}`}
          onClick={() => toggleTaskStatus(task)}
        >
          <span>{task.task}</span>
          <i
            className="bi bi-x-square delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task);
            }}
          ></i>
        </li>
      ))}
    </ul>
  );
}
