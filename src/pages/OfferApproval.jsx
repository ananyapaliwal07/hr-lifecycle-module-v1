import { Link } from "react-router-dom";

import { dummyCandidates, dummyOffers } from "../data";

export default function OfferApproval() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Offer Approval</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>MID</th>
            <th>Role</th>
            <th>Offer Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>

        <tbody>
          {dummyOffers.map((offer) => {
            const candidate = dummyCandidates.find(
              (candidate) => candidate.id === offer.candidateId
            );

            return (
              <tr key={offer.id}>
                <td>{candidate?.fullName}</td>
                <td>{offer.mid}</td>
                <td>{offer.role}</td>
                <td>{offer.offerStatus}</td>
                <td>{offer.startDate}</td>
                <td>{offer.endDate}</td>
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