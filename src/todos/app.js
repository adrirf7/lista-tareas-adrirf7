import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import { renderPendingTodos, renderTodos } from "./uses-cases/index";

const ElemenIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompleted: ".clear-completed",
  todoFilters: ".filter",
  PendingCount: "#pending-count",
  ThemeToggle: "#theme-toggle",
};
/**
 *
 * @param {Strting} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElemenIDs.TodoList, todos);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPendingTodos(ElemenIDs.PendingCount);
  };

  // Inicializar tema
  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  };

  // Toggle tema
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    initTheme();
    displayTodos();
  })();

  //Referencias HTML
  const newDescriptionInput = document.querySelector(ElemenIDs.NewTodoInput),
    todoListUL = document.querySelector(ElemenIDs.TodoList),
    ClearCompletedBtn = document.querySelector(ElemenIDs.ClearCompleted),
    filtersLi = document.querySelectorAll(ElemenIDs.todoFilters),
    themeToggleBtn = document.querySelector(ElemenIDs.ThemeToggle);

  //Listeners
  // Theme toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });

  todoListUL.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    const elementID = element.getAttribute("data-id");

    if (event.target.className === "destroy") {
      todoStore.deleteTodo(elementID);
      displayTodos();
    }

    todoStore.toggleTodo(elementID);
    displayTodos();
  });

  ClearCompletedBtn.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLi.forEach((element) => {
    element.addEventListener("click", (element) => {
      filtersLi.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");

      switch (element.target.id) {
        case "all":
          todoStore.setFilter(Filters.All);
          break;
        case "pending":
          todoStore.setFilter(Filters.Pending);
          break;
        case "completed":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
