const generateContract = options => {
  const {
    date,
    developerName,
    clientName,
    totalFee,
    paymentTerms,
    completionDate,
    scopeChangesFee,
    intellectualPropertyTransfer,
    confidentiality,
    noticePeriod,
    revisionsCount,
    revisionDays,
  } = options;

  const contract = `
# Website Development Agreement

**THIS AGREEMENT** is made on ${date} between ${developerName} ("Developer") and ${clientName} ("Client").

## 1. Services
The Developer agrees to develop a website ("Website") for the Client based on the specifications provided by the Client.

## 2. Payment
The Client agrees to pay the Developer a total fee of ${totalFee}, payable as follows: ${paymentTerms}.

## 3. Timeline
The Developer agrees to complete the Website by ${completionDate}, subject to receiving timely feedback and materials from the Client.

## 4. Changes to Scope
Any changes to the scope of the Website after the signing of this agreement may result in additional fees. Such changes must be documented in writing and agreed upon by both parties. Scope changes fee: $${scopeChangesFee} / hour.

## 5. Intellectual Property
Upon receipt of full payment, the Developer transfers to the Client all rights in the code, graphics, and text incorporated into the Website. ${intellectualPropertyTransfer}.

## 6. Confidentiality
Both parties agree to keep all materials and information shared between them confidential. ${confidentiality}.

## 7. Revisions
The Client is entitled to make two revisions to the Website within a period of ${revisionsCount} revisions in ${revisionDays} days from the date of completion.

## 8. Termination
Either party may terminate this agreement with ${noticePeriod} days notice. In the event of termination, the Client will pay for all services performed up to the date of termination.

**Developer:**
${developerName}
[Your Signature]
${date}

**Client:**
${clientName}
[Client's Signature]
${date}
`;

  return contract;
}


module.exports = generateContract