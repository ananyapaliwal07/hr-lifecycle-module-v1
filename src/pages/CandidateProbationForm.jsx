import { Link } from "react-router-dom";
export default function CandidateProbationForm() {
  return (
    <div>
      <h1>Candidate Probation Form</h1>
      <p>Candidate probation form will appear here.</p>
      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}