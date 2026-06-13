import { Link } from "react-router-dom";
export default function ActiveInterns() {
  return (
    <div>
      <h1>Active Interns</h1>
      <p>List of active interns will appear here.</p>
      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}