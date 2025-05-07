import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList></TaskList>}></Route>
        <Route path="/create" element={<CreateTask></CreateTask>}></Route>
        <Route path="/update/:id" element={<UpdateTask></UpdateTask>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
