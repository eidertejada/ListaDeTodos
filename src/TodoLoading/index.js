import React from "react";
import "./TodoLoading.css";
function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOSs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodoLoading };
