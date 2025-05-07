import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://tasklist-huyu.onrender.com/", { taskName, status })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    setTaskName("");
    setStatus("");
  };

  return (
    <div className="d-flex justify-content-start align-items-start">
      <div className="w-100 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>
          <div className="mb-2">
            <label htmlFor="">Task Details</label>
            <input
              type="text"
              placeholder="Enter Task Details"
              className="form-control"
              value={taskName
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Status</label>
            <input
              type="text"
              placeholder="Enter Status of Task"
              className="form-control"
              value={status
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Submit</button>
          <button
            type="button"
            className="btn btn-success ms-2"
            onClick={handleReset}
          >
            Reset
          </button>
          <Link to="/">
            <button className="btn btn-success ms-2">Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
