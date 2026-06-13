import { Link } from "react-router-dom";

export default function OfferApproval() {
  return (
    <div>
      <h1>Offer Approval</h1>
      <p>Pending offer approvals will appear here.</p>

      <Link to="/">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}