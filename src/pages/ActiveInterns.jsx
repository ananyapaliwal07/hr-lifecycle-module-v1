import { Link } from "react-router-dom";

import { dummyActiveInterns } from "../data";

export default function ActiveInterns() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Active Interns</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>MID</th>
            <th>Role</th>
            <th>Department</th>
            <th>Team</th>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {dummyActiveInterns.map((intern) => (
            <tr key={intern.id}>
              <td>{intern.fullName}</td>
              <td>{intern.mid}</td>
              <td>{intern.role}</td>
              <td>{intern.department}</td>
              <td>{intern.team}</td>
              <td>{intern.project}</td>
              <td>{intern.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}