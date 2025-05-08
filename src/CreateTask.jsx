import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Basic validation
    if (!taskName || !status) {
      alert("Please fill in all fields.");
      return;
    }

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
<<<<<<< HEAD
      <div className="bg-white w-100 rounded p-3">
=======
      <div className="w-100 bg-white rounded p-3">
>>>>>>> eeb37ff5aea38fbf7068785c2d097a9154964f94
        <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>

          <div className="mb-2">
            <label>Task Details</label>
            <input
              type="text"
              placeholder="Enter Task Details"
              className="form-control shadow-none"
              value={taskName
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="mb-2  ">
            <label>Status</label>
            <select
              className="form-select shadow-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              {/* <option value="">Select Status</option> */}
              <option value="Pending">Pending</option>
              <option value="Started">Started</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button className="btn btn-success ms-2" type="submit">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-success ms-2"
            onClick={handleReset}
          >
            Reset
          </button>
          <Link to="/">
            <button type="button" className="btn btn-success ms-2">
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
