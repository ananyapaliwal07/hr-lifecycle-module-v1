import { Link } from "react-router-dom";

import { dummyCandidates, dummySignedOffers } from "../data";

export default function SignedOfferVerification() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Signed Offer Verification</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Candidate Name</th>
            <th>MID</th>
            <th>Email Match</th>
            <th>Phone Match</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {dummySignedOffers.map((offer) => {
            const candidate = dummyCandidates.find(
              (candidate) => candidate.id === offer.candidateId
            );

            return (
              <tr key={offer.id}>
                <td>{candidate?.fullName}</td>
                <td>{offer.mid}</td>
                <td>{offer.emailMatchStatus}</td>
                <td>{offer.phoneMatchStatus}</td>
                <td>{offer.status}</td>
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