
import React, { useState } from "react";
import { Input_Field } from "./Input_Field";

const Todo_APP= () => {
  const [user_data, setUserData] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const userDataHandle = (val, index) => {
    const updatedTodos = [...user_data];
    updatedTodos[index] = val;
    setUserData(updatedTodos);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setUserData([...user_data, newTodo]);
      setNewTodo("");
    }
  };

  const submitHandle = () => {
    setShowDetails(true);
  };

  const editHandle = (index) => {
    setEditIndex(index);
  };

  const deleteHandle = (index) => {
    const updatedTodos = [...user_data];
    updatedTodos.splice(index, 1);
    setUserData(updatedTodos);
  };

  const saveEditHandle = (index) => {
    setEditIndex(null);
    setShowDetails(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-8 border border-gray-300 rounded-md">
      {showDetails === true ? (
        <div>
          <h4 className="text-lg font-semibold">Username: {user_data[editIndex]}</h4>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Todo App</h1>

          <div className="mb-4">
            <Input_Field
              id="username"
              placeholder="Enter Todo"
              type="text"
              value={newTodo}
              onChange={(val) => setNewTodo(val)}
              className="border border-gray-300 p-2 rounded w-full"
            />
          </div>
          <button
            onClick={addTodo}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Todo
          </button>

          <ul className="mt-4">
            {user_data.map((todo, index) => (
              <li key={index} className="mb-4">
                {editIndex === index ? (
                  <div>
                    <Input_Field
                      id="editedUsername"
                      placeholder="Enter Edited Todo"
                      type="text"
                      value={todo}
                      onChange={(val) => userDataHandle(val, index)}
                      className="border border-gray-300 p-2 rounded w-full"
                    />
                    <button
                      onClick={() => saveEditHandle(index)}
                      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Save Edit
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className="text-lg font-semibold">{todo}</span>
                    <button
                      type="button"
                      onClick={() => editHandle(index)}
                      className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteHandle(index)}
                      className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Todo_APP };
