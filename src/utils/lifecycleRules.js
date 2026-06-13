export function canStartProbation(candidate) {
  if (!candidate) return false;

  return ["NEW", "SUBMITTED"].includes(candidate.currentStatus);
}

export function canReviewProbation(probationAttempt) {
  if (!probationAttempt) return false;

  return [
    "PROBATION_STARTED",
    "UNDER_REVIEW",
    "EXTENDED",
    "RECONSIDERATION",
  ].includes(probationAttempt.status);
}

export function canApproveOffer(candidate, probationAttempt) {
  if (!candidate || !probationAttempt) return false;

  return (
    probationAttempt.status === "APPROVED" &&
    ["PROBATION", "OFFER_APPROVED"].includes(candidate.currentStatus)
  );
}

export function canGenerateMID(offer) {
  if (!offer) return false;

  return offer.offerStatus === "APPROVED" && !offer.mid;
}

export function canGenerateOfferPDF(offer) {
  if (!offer) return false;

  return ["APPROVED", "MID_GENERATED"].includes(offer.offerStatus);
}

export function canSendOfferEmail(offer) {
  if (!offer) return false;

  return ["PDF_GENERATED", "APPROVED"].includes(offer.offerStatus);
}

export function shouldActivateIntern(offer) {
  if (!offer) return false;

  return offer.offerStatus === "EMAIL_SENT";
}

export function isActiveIntern(candidate) {
  if (!candidate) return false;

  return candidate.currentStatus === "ACTIVE";
}

export function canSubmitSignedOffer(candidate, offer) {
  if (!candidate || !offer) return false;

  return candidate.currentStatus === "ACTIVE" && offer.offerStatus === "EMAIL_SENT";
}

export function canVerifySignedOffer(signedOffer) {
  if (!signedOffer) return false;

  return ["SUBMITTED", "RESUBMISSION_REQUIRED"].includes(signedOffer.status);
}

export function canRejectSignedOffer(signedOffer) {
  if (!signedOffer) return false;

  return ["SUBMITTED", "RESUBMISSION_REQUIRED"].includes(signedOffer.status);
}

export function signedOfferHasMismatch(signedOffer) {
  if (!signedOffer) return false;

  return (
    signedOffer.emailMatchStatus === "MISMATCH" ||
    signedOffer.phoneMatchStatus === "MISMATCH"
  );
}

export function doesSignedOfferBlockActiveStatus() {
  return false;
}

export function getNextCandidateStatusAfterOfferEmail() {
  return "ACTIVE";
}