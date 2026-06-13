import { Link } from "react-router-dom";

export default function HRLogin() {
  return (
    <div>
      <h1>HR Login</h1>
      <p>HR login page will appear here.</p>

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}