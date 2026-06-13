import { Link } from "react-router-dom";

export default function HRDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>HR Dashboard</h1>
      <p>Select a module:</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <Link to="/candidate-form">
          <button>Candidate Probation Form</button>
        </Link>

        <Link to="/probation-review">
          <button>Probation Review</button>
        </Link>

        <Link to="/offer-approval">
          <button>Offer Approval</button>
        </Link>

        <Link to="/active-interns">
          <button>Active Interns</button>
        </Link>

        <Link to="/signed-offer-upload">
          <button>Signed Offer Upload</button>
        </Link>

        <Link to="/signed-offer-verification">
          <button>Signed Offer Verification</button>
        </Link>

        <Link to="/activity-log">
          <button>Activity Log</button>
        </Link>
      </div>
    </div>
  );
}