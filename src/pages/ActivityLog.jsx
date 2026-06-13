import { Link } from "react-router-dom";

export default function ActivityLog() {
  return (
    <div>
      <h1>Activity Log</h1>
      <p>System activity logs will appear here.</p>

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}