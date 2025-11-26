/**
 *
 * @param {Todo} todo
 */
export const createTodoHTML = (todo) => {
  if (!todo) throw new Error("A TODO object is required");
  const { done, description, id, createdAdd } = todo;

  // Formatear fecha
  const date = new Date(createdAdd);
  const formattedDate = date.toLocaleDateString('es-ES', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const html = `<div class="view">
                    <input class="toggle" type="checkbox" ${done ? "checked" : ""}>
                    <label>
                      <span class="todo-text">${description}</span>
                      <span class="todo-date">${formattedDate}</span>
                    </label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`;

  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  liElement.setAttribute("data-id", id);
  if (todo.done) liElement.classList.add("completed");

  return liElement;
};
