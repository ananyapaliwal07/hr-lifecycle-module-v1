import { useState } from "react";
import { Link } from "react-router-dom";

export default function CandidateProbationForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Candidate Probation Form</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input placeholder="Full Name" />
        <br /><br />

        <input placeholder="Email" />
        <br /><br />

        <input placeholder="Phone" />
        <br /><br />

        <input placeholder="Address" />
        <br /><br />

        <input placeholder="Role Applied For" />
        <br /><br />

        <input placeholder="Role Code" />
        <br /><br />

        <input placeholder="Department" />
        <br /><br />

        <label>
          <input type="checkbox" />
          Candidate Consent
        </label>

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Candidate submitted successfully.
          Probation process will be initiated.
        </p>
      )}

      <br />

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}