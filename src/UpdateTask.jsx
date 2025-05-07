import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const UpdateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://tasklist-huyu.onrender.com/" + id, { taskName, status })
      .then(() => navigate("/"));
  };

  const handleReset = () => {
    setTaskName("");
    setStatus("");
  };

  useEffect(() => {
    axios.get("https://tasklist-huyu.onrender.com/" + id).then((res) => {
      setTaskName(res.data.taskName), setStatus(res.data.status);
    });
  }, []);

  return (
    <div className="d-flex justify-content-start align-items-start">
      <div className="bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update TaskList</h2>
          <div className="mb-2">
            <label htmlFor="">Task</label>
            <input
              type="text"
              placeholder="Enter Task Detail"
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

          <button className="btn btn-success">Update</button>

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

export default UpdateTask;
