import { Link } from "react-router-dom";

export default function ProbationReview() {
  return (
    <div>
      <h1>Probation Review</h1>
      <p>Probation candidates and review actions will appear here.</p>

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}