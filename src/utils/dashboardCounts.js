export function getDashboardCounts({
  candidates = [],
  probationAttempts = [],
  offers = [],
  activeInterns = [],
  signedOffers = [],
}) {
  return {
    totalCandidates: candidates.length,

    inProbation: candidates.filter(
      (candidate) => candidate.currentStatus === "PROBATION"
    ).length,

    approvedProbation: probationAttempts.filter(
      (attempt) => attempt.status === "APPROVED"
    ).length,

    rejectedProbation: probationAttempts.filter(
      (attempt) => attempt.status === "REJECTED"
    ).length,

    offerApproved: offers.filter(
      (offer) => offer.offerStatus === "APPROVED"
    ).length,

    offerSent: offers.filter(
      (offer) => offer.offerStatus === "EMAIL_SENT"
    ).length,

    activeInterns: activeInterns.filter(
      (intern) => intern.status === "ACTIVE"
    ).length,

    signedOfferSubmitted: signedOffers.filter(
      (signedOffer) => signedOffer.status === "SUBMITTED"
    ).length,

    signedOfferMismatch: signedOffers.filter(
      (signedOffer) =>
        signedOffer.emailMatchStatus === "MISMATCH" ||
        signedOffer.phoneMatchStatus === "MISMATCH"
    ).length,

    signedOfferRejected: signedOffers.filter(
      (signedOffer) => signedOffer.status === "REJECTED"
    ).length,
  };
}