import { todayTasks } from "./today.js";
import { tomorrowTasks } from "./tomorrow.js";
import { soonTasks } from "./soon.js";
import { doneTasks, doneCount } from './done.js';

export class TaskCreator {
  constructor(title,description,dueDate,priority, checklist, category) 
  {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = false;
    this.category = category;
  }
}