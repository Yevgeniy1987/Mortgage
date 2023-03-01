"use strict";

const credit = applyForMortgage(
  {
    fullName: "Peter Pan",
    age: 55,
    citizenship: "canadian",
  },
  {
    profession: "welder",
    employmentDuration: 5,
    profit: 40000,
  },
  50000,
  ["passport", "profit approvement", "insurance",]
);

console.log("Your mortgage is", credit);

function applyForMortgage(
  applicationDataRequirements,
  jobRequirements,
  downPaymentRequirements,
  documentsRequirements
) {
  let applicationData = isMetApplicationDatRequirements(
    applicationDataRequirements
  );
  let occupancy = isMetJobRequirements(jobRequirements);
  let downPayment = isMetDownPaymentRequirements(downPaymentRequirements);
  let documents = isMetDocumentsRequirements(documentsRequirements);
  return applicationData && occupancy && downPayment && documents
    ? "Approved"
    : "Denied";
}

function isMetApplicationDatRequirements(applicationDataRequirements) {
  if (
    applicationDataRequirements?.age <= 55 &&
    applicationDataRequirements?.citizenship === "canadian"
  ) {
    return true;
  } else {
    return false;
  }
}

function isMetJobRequirements(jobRequirements) {
  if (
    jobRequirements?.employmentDuration >= 3 &&
    jobRequirements?.profit >= 45000
  ) {
    return true;
  } else {
    return false;
  }
}
function isMetDownPaymentRequirements(downPaymentRequirements) {
  if (downPaymentRequirements >= 25000) {
    return true;
  } else {
    return false;
  }
}
function isMetDocumentsRequirements(documentsRequirements) {
  if (documentsRequirements?.length >= 3) {
    return true;
  } else {
    return false;
  }
}
