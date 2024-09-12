import React, { useEffect } from "react";
import AddTask from "./AddTask.jsx";
import TasksContainer from "./TaskContainer.jsx";
import Nav from "./nav.jsx";
import socketIO from "socket.io-client";

const Task = () => {
  const socket = socketIO.connect("http://localhost:8080");

  useEffect(() => {
    return () => {
      socket.disconnect(); // Clean up the socket connection on component unmount
    };
  }, []);

  return (
    <div>
      <Nav />
      <AddTask socket={socket} />
      <TasksContainer socket={socket} />
    </div>
  );
};

export default Task;
