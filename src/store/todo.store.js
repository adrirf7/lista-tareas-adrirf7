import { Todo } from "../todos/models/todo.models";

export const Filters = {
  All: "All",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("InitStore 🥑");
};

const loadStore = () => {
  if (!localStorage.getItem("state")) return;

  const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem("state"));
  state.todos = todos;
  state.filter = filter;
};

const saveState = () => {
  localStorage.setItem("state", JSON.stringify(state));
};

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];

    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);

    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required");

  state.todos.push(new Todo(description));
  setFilter(Filters.All);
  saveState();
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      [(todo.done = !todo.done)];
    }
    return todo;
  });

  saveState();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveState();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveState();
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  if (!Object.keys(Filters).includes(newFilter)) {
    throw new Error("Filter not exists");
  }
  state.filter = newFilter;

  saveState();
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  initStore,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setFilter,
  getCurrentFilter,
  getTodos,
  loadStore,
};
