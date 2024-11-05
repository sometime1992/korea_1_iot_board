import axios from "axios";
import { Task } from "../types";

export const MAIN_URL = `http://localhost:8080/api/v1`;

const TASK_API_URL = `${MAIN_URL}/todos`;

export const fetchTasks = async () => {
  const response = await axios.get<{ data: Task[] }>(TASK_API_URL);
  return response.data.data;
};

export const createTask = async (task: string) => {
  const response = await axios.post<{ data: Task }>(TASK_API_URL, { task, status: false });
  return response.data.data;
};

export const updateTaskStatus = async (id: number, status: boolean) => {
  await axios.put(`${TASK_API_URL}/${id}`, { status });
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${TASK_API_URL}/${id}`);
};