export const taskCreator = (title, description, dueDate, priority, checklist, category) => {
    return { 
        title: title, 
        description: description,
        dueDate: dueDate,
        priority: priority,
        checklist: checklist,
        category: category,
     }
}


