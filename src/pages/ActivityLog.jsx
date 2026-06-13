import { Link } from "react-router-dom";

import { dummyCandidates, dummyActivityLogs } from "../data";

export default function ActivityLog() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Activity Log</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Date</th>
            <th>Candidate</th>
            <th>Action</th>
            <th>Old Status</th>
            <th>New Status</th>
          </tr>
        </thead>

        <tbody>
          {dummyActivityLogs.map((log) => {
            const candidate = dummyCandidates.find(
              (candidate) => candidate.id === log.candidateId
            );

            return (
              <tr key={log.id}>
                <td>{log.createdAt}</td>
                <td>{candidate?.fullName}</td>
                <td>{log.actionType}</td>
                <td>{log.oldStatus || "-"}</td>
                <td>{log.newStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <br />

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}