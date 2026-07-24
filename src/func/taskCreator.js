import { todayTasks } from "../pages/today.js";
import { tomorrowTasks } from "../pages/tomorrow.js";
import { soonTasks } from "../pages/soon.js";
import { doneTasks, doneCount } from '../pages/done.js';

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

