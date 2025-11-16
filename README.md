
# 📝 Todo App

A simple and elegant Todo List application built using **React** and **Tailwind CSS**. This app allows users to manage tasks efficiently with features like task addition, deletion, marking as done, and even the ability to persist data using `localStorage`.

---

## 🧑‍💻 Live Demo

Check out the live demo here: [Live Demo of Todo App](https://todo-app-0ego.onrender.com)

---

## 🚀 Features

- ➕ **Add New Tasks** — Create new items by typing and clicking "Add" or pressing Enter.
- ✏️ **Inline Task Status Toggle** — Easily mark tasks as done or undo them with a single click.
- 🗑️ **Delete Tasks** — Remove tasks from the list one‑by‑one.
- 📦 **Persistent Storage** — Tasks are saved in `localStorage` and persist even after a page refresh.
- 📋 **Scrollable Task List** — Automatically adjusts with a fixed height and scroll.
- ✔️ **Mark All Done** — Quickly mark every task as complete with a single button.
- 🎨 **Modern UI** — Styled with Tailwind CSS featuring a colorful gradient background and responsive design.

---

## 🛠 Technologies Used

- **React** — For building the UI and managing state.
- **Tailwind CSS** — For utility‑first styling.
- **UUID** — For generating unique task IDs.
- **LocalStorage API** — For storing tasks in the browser.

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your‑username/todo‑app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo‑app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app:

   ```bash
   npm start
   ```

---

## 🧾 Code Overview

The application uses the `useState` and `useEffect` hooks to manage tasks and persist them in localStorage. Every task is represented as an object containing:

```js
{
  task: 'Your task description',
  id: uuidv4(),
  isDone: false
}
```

The app supports manipulation of the task list through functions like:

- `addNewTask` — Adds a task.
- `updateTodoValue` — Handles input changes.
- `deleteTodo` — Removes a task by ID.
- `toggleDone` — Marks a task as done/undone.
- `markAllAsDone` — Marks every task as completed.

---

## 📸 Screenshot

![Todo App Screenshot](https://github.com/aniljoiya/Todo-App/blob/main/Todo%20List%20APP.png)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

---

## 📄 License

This project is licensed under the MIT License.
