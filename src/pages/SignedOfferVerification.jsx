import { Link } from "react-router-dom";

export default function SignedOfferVerification() {
  return (
    <div>
      <h1>Signed Offer Verification</h1>
      <p>Signed offer verification details will appear here.</p>

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}