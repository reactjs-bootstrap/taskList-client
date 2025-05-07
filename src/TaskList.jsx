import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [tasks, setTasks] = useState([]);
  const [sort, setSort] = useState(true);

  const navigate = useNavigate();

  // let data = tasks.filter(
  //   (item) =>
  //     item.taskName.toLowerCase().includes(inputValue.trim().toLowerCase()) ||
  //     item.status.toString().includes(inputValue.trim().toString())
  // );

  // let currentData = [];
  // if (sort == true) {
  //   currentData = tasks.sort((a, b) => a.status.localeCompare(b.status));
  // } else {
  //   currentData = tasks.sort((a, b) => b.status.localeCompare(a.status));
  // }
  // // currentData = data3;

  // console.log(currentData);

  const handleDelete = (id) => {
    axios
      .delete("https://tasklist-huyu.onrender.com/" + id)
      .then(() => window.location.reload());
  };

  useEffect(() => {
    axios
      .get("https://tasklist-huyu.onrender.com/")
      .then((res) => {
        setTasks(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-start align-items-start ms-1">
      <div className="bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
          Add Task +
        </Link>
        {/* <button
          className="btn btn-info btn-sm ms-2"
          onClick={() => setSort(!sort)}
        >
          {sort == true ? "A-Z" : "Z-A"}
        </button> */}
        <br />

        <table className="table table-sm table-bordered mt-2 mb-2">
          <thead className="table-secondary">
            <tr>
              <th
                style={{ textAlign: "center", alignContent: "center" }}
                className="pe-2 ps-2"
              >
                Sr. No.
              </th>

              <th
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  textWrap: "nowrap",
                }}
                className="pe-2 ps-2"
              >
                Task Name
              </th>
              <th
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  textWrap: "nowrap",
                }}
                className="pe-2 ps-2"
              >
                Status
              </th>
              <th
                style={{ textAlign: "center", alignContent: "center" }}
                className="pe-2 ps-2"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td style={{ textWrap: "nowrap" }}>{task.taskName}</td>
                  <td style={{ textWrap: "nowrap" }}>{task.status}</td>
                  <td>
                    <Link
                      to={`/update/${task._id}`}
                      className="btn btn-sm  p-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        color="green"
                      >
                        <rect width="24" height="24" fill="none" />
                        <path
                          fill="currentColor"
                          d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7H5V5h7V3zm12.78 1a.7.7 0 0 0-.48.2l-1.22 1.21l2.5 2.5L19.8 6.7c.26-.26.26-.7 0-.95L18.25 4.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L8 13.5V16h2.5l7.37-7.38z"
                        />
                      </svg>
                    </Link>
                    <Link
                      to="/"
                      className="btn  btn-sm p-0 ms-2"
                      onClick={() => handleDelete(task._id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 40 40"
                        color="red"
                      >
                        <rect width="40" height="40" fill="none" />
                        <path
                          fill="currentColor"
                          d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.06 1.06 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"
                          strokeWidth="1"
                          stroke="currentColor"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
