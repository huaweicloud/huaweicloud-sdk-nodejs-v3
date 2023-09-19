

export class AcceptanceBillResult {
    private 'issue_date'?: string;
    private 'due_date'?: string;
    private 'bill_status'?: string;
    private 'bill_number'?: string;
    private 'issuer_full_name'?: string;
    private 'issuer_account'?: string;
    private 'issuer_bank_name'?: string;
    private 'issuer_bank_number'?: string;
    private 'payee_full_name'?: string;
    private 'payee_account'?: string;
    private 'payee_bank_name'?: string;
    private 'payee_bank_number'?: string;
    private 'issuance_guarantor_name'?: string;
    private 'issuance_guarantor_address'?: string;
    private 'issuance_guarantor_account'?: string;
    private 'issuance_guarantee_date'?: string;
    private 'issuance_guarantor_bank_number'?: string;
    private 'issuance_guarantor_bank_name'?: string;
    private 'amount_in_words'?: string;
    private 'amount_in_figures'?: string;
    private 'acceptor_full_name'?: string;
    private 'acceptor_account'?: string;
    private 'acceptor_bank_number'?: string;
    private 'acceptor_bank_name'?: string;
    private 'contract_number'?: string;
    public assignability?: string;
    private 'issuer_commitment'?: string;
    private 'acceptor_commitment'?: string;
    private 'acceptance_date'?: string;
    private 'acceptance_guarantor_name'?: string;
    private 'acceptance_guarantor_address'?: string;
    private 'acceptance_guarantor_account'?: string;
    private 'acceptance_guarantee_date'?: string;
    private 'acceptance_guarantor_bank_number'?: string;
    private 'acceptance_guarantor_bank_name'?: string;
    private 'issuer_rating_entity'?: string;
    private 'issuer_credit_rating'?: string;
    private 'issuer_rating_due_date'?: string;
    private 'acceptor_rating_entity'?: string;
    private 'acceptor_credit_rating'?: string;
    private 'acceptor_rating_due_date'?: string;
    private 'bill_package_number'?: string;
    public remarks?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withIssueDate(issueDate: string): AcceptanceBillResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withDueDate(dueDate: string): AcceptanceBillResult {
        this['due_date'] = dueDate;
        return this;
    }
    public set dueDate(dueDate: string  | undefined) {
        this['due_date'] = dueDate;
    }
    public get dueDate(): string | undefined {
        return this['due_date'];
    }
    public withBillStatus(billStatus: string): AcceptanceBillResult {
        this['bill_status'] = billStatus;
        return this;
    }
    public set billStatus(billStatus: string  | undefined) {
        this['bill_status'] = billStatus;
    }
    public get billStatus(): string | undefined {
        return this['bill_status'];
    }
    public withBillNumber(billNumber: string): AcceptanceBillResult {
        this['bill_number'] = billNumber;
        return this;
    }
    public set billNumber(billNumber: string  | undefined) {
        this['bill_number'] = billNumber;
    }
    public get billNumber(): string | undefined {
        return this['bill_number'];
    }
    public withIssuerFullName(issuerFullName: string): AcceptanceBillResult {
        this['issuer_full_name'] = issuerFullName;
        return this;
    }
    public set issuerFullName(issuerFullName: string  | undefined) {
        this['issuer_full_name'] = issuerFullName;
    }
    public get issuerFullName(): string | undefined {
        return this['issuer_full_name'];
    }
    public withIssuerAccount(issuerAccount: string): AcceptanceBillResult {
        this['issuer_account'] = issuerAccount;
        return this;
    }
    public set issuerAccount(issuerAccount: string  | undefined) {
        this['issuer_account'] = issuerAccount;
    }
    public get issuerAccount(): string | undefined {
        return this['issuer_account'];
    }
    public withIssuerBankName(issuerBankName: string): AcceptanceBillResult {
        this['issuer_bank_name'] = issuerBankName;
        return this;
    }
    public set issuerBankName(issuerBankName: string  | undefined) {
        this['issuer_bank_name'] = issuerBankName;
    }
    public get issuerBankName(): string | undefined {
        return this['issuer_bank_name'];
    }
    public withIssuerBankNumber(issuerBankNumber: string): AcceptanceBillResult {
        this['issuer_bank_number'] = issuerBankNumber;
        return this;
    }
    public set issuerBankNumber(issuerBankNumber: string  | undefined) {
        this['issuer_bank_number'] = issuerBankNumber;
    }
    public get issuerBankNumber(): string | undefined {
        return this['issuer_bank_number'];
    }
    public withPayeeFullName(payeeFullName: string): AcceptanceBillResult {
        this['payee_full_name'] = payeeFullName;
        return this;
    }
    public set payeeFullName(payeeFullName: string  | undefined) {
        this['payee_full_name'] = payeeFullName;
    }
    public get payeeFullName(): string | undefined {
        return this['payee_full_name'];
    }
    public withPayeeAccount(payeeAccount: string): AcceptanceBillResult {
        this['payee_account'] = payeeAccount;
        return this;
    }
    public set payeeAccount(payeeAccount: string  | undefined) {
        this['payee_account'] = payeeAccount;
    }
    public get payeeAccount(): string | undefined {
        return this['payee_account'];
    }
    public withPayeeBankName(payeeBankName: string): AcceptanceBillResult {
        this['payee_bank_name'] = payeeBankName;
        return this;
    }
    public set payeeBankName(payeeBankName: string  | undefined) {
        this['payee_bank_name'] = payeeBankName;
    }
    public get payeeBankName(): string | undefined {
        return this['payee_bank_name'];
    }
    public withPayeeBankNumber(payeeBankNumber: string): AcceptanceBillResult {
        this['payee_bank_number'] = payeeBankNumber;
        return this;
    }
    public set payeeBankNumber(payeeBankNumber: string  | undefined) {
        this['payee_bank_number'] = payeeBankNumber;
    }
    public get payeeBankNumber(): string | undefined {
        return this['payee_bank_number'];
    }
    public withIssuanceGuarantorName(issuanceGuarantorName: string): AcceptanceBillResult {
        this['issuance_guarantor_name'] = issuanceGuarantorName;
        return this;
    }
    public set issuanceGuarantorName(issuanceGuarantorName: string  | undefined) {
        this['issuance_guarantor_name'] = issuanceGuarantorName;
    }
    public get issuanceGuarantorName(): string | undefined {
        return this['issuance_guarantor_name'];
    }
    public withIssuanceGuarantorAddress(issuanceGuarantorAddress: string): AcceptanceBillResult {
        this['issuance_guarantor_address'] = issuanceGuarantorAddress;
        return this;
    }
    public set issuanceGuarantorAddress(issuanceGuarantorAddress: string  | undefined) {
        this['issuance_guarantor_address'] = issuanceGuarantorAddress;
    }
    public get issuanceGuarantorAddress(): string | undefined {
        return this['issuance_guarantor_address'];
    }
    public withIssuanceGuarantorAccount(issuanceGuarantorAccount: string): AcceptanceBillResult {
        this['issuance_guarantor_account'] = issuanceGuarantorAccount;
        return this;
    }
    public set issuanceGuarantorAccount(issuanceGuarantorAccount: string  | undefined) {
        this['issuance_guarantor_account'] = issuanceGuarantorAccount;
    }
    public get issuanceGuarantorAccount(): string | undefined {
        return this['issuance_guarantor_account'];
    }
    public withIssuanceGuaranteeDate(issuanceGuaranteeDate: string): AcceptanceBillResult {
        this['issuance_guarantee_date'] = issuanceGuaranteeDate;
        return this;
    }
    public set issuanceGuaranteeDate(issuanceGuaranteeDate: string  | undefined) {
        this['issuance_guarantee_date'] = issuanceGuaranteeDate;
    }
    public get issuanceGuaranteeDate(): string | undefined {
        return this['issuance_guarantee_date'];
    }
    public withIssuanceGuarantorBankNumber(issuanceGuarantorBankNumber: string): AcceptanceBillResult {
        this['issuance_guarantor_bank_number'] = issuanceGuarantorBankNumber;
        return this;
    }
    public set issuanceGuarantorBankNumber(issuanceGuarantorBankNumber: string  | undefined) {
        this['issuance_guarantor_bank_number'] = issuanceGuarantorBankNumber;
    }
    public get issuanceGuarantorBankNumber(): string | undefined {
        return this['issuance_guarantor_bank_number'];
    }
    public withIssuanceGuarantorBankName(issuanceGuarantorBankName: string): AcceptanceBillResult {
        this['issuance_guarantor_bank_name'] = issuanceGuarantorBankName;
        return this;
    }
    public set issuanceGuarantorBankName(issuanceGuarantorBankName: string  | undefined) {
        this['issuance_guarantor_bank_name'] = issuanceGuarantorBankName;
    }
    public get issuanceGuarantorBankName(): string | undefined {
        return this['issuance_guarantor_bank_name'];
    }
    public withAmountInWords(amountInWords: string): AcceptanceBillResult {
        this['amount_in_words'] = amountInWords;
        return this;
    }
    public set amountInWords(amountInWords: string  | undefined) {
        this['amount_in_words'] = amountInWords;
    }
    public get amountInWords(): string | undefined {
        return this['amount_in_words'];
    }
    public withAmountInFigures(amountInFigures: string): AcceptanceBillResult {
        this['amount_in_figures'] = amountInFigures;
        return this;
    }
    public set amountInFigures(amountInFigures: string  | undefined) {
        this['amount_in_figures'] = amountInFigures;
    }
    public get amountInFigures(): string | undefined {
        return this['amount_in_figures'];
    }
    public withAcceptorFullName(acceptorFullName: string): AcceptanceBillResult {
        this['acceptor_full_name'] = acceptorFullName;
        return this;
    }
    public set acceptorFullName(acceptorFullName: string  | undefined) {
        this['acceptor_full_name'] = acceptorFullName;
    }
    public get acceptorFullName(): string | undefined {
        return this['acceptor_full_name'];
    }
    public withAcceptorAccount(acceptorAccount: string): AcceptanceBillResult {
        this['acceptor_account'] = acceptorAccount;
        return this;
    }
    public set acceptorAccount(acceptorAccount: string  | undefined) {
        this['acceptor_account'] = acceptorAccount;
    }
    public get acceptorAccount(): string | undefined {
        return this['acceptor_account'];
    }
    public withAcceptorBankNumber(acceptorBankNumber: string): AcceptanceBillResult {
        this['acceptor_bank_number'] = acceptorBankNumber;
        return this;
    }
    public set acceptorBankNumber(acceptorBankNumber: string  | undefined) {
        this['acceptor_bank_number'] = acceptorBankNumber;
    }
    public get acceptorBankNumber(): string | undefined {
        return this['acceptor_bank_number'];
    }
    public withAcceptorBankName(acceptorBankName: string): AcceptanceBillResult {
        this['acceptor_bank_name'] = acceptorBankName;
        return this;
    }
    public set acceptorBankName(acceptorBankName: string  | undefined) {
        this['acceptor_bank_name'] = acceptorBankName;
    }
    public get acceptorBankName(): string | undefined {
        return this['acceptor_bank_name'];
    }
    public withContractNumber(contractNumber: string): AcceptanceBillResult {
        this['contract_number'] = contractNumber;
        return this;
    }
    public set contractNumber(contractNumber: string  | undefined) {
        this['contract_number'] = contractNumber;
    }
    public get contractNumber(): string | undefined {
        return this['contract_number'];
    }
    public withAssignability(assignability: string): AcceptanceBillResult {
        this['assignability'] = assignability;
        return this;
    }
    public withIssuerCommitment(issuerCommitment: string): AcceptanceBillResult {
        this['issuer_commitment'] = issuerCommitment;
        return this;
    }
    public set issuerCommitment(issuerCommitment: string  | undefined) {
        this['issuer_commitment'] = issuerCommitment;
    }
    public get issuerCommitment(): string | undefined {
        return this['issuer_commitment'];
    }
    public withAcceptorCommitment(acceptorCommitment: string): AcceptanceBillResult {
        this['acceptor_commitment'] = acceptorCommitment;
        return this;
    }
    public set acceptorCommitment(acceptorCommitment: string  | undefined) {
        this['acceptor_commitment'] = acceptorCommitment;
    }
    public get acceptorCommitment(): string | undefined {
        return this['acceptor_commitment'];
    }
    public withAcceptanceDate(acceptanceDate: string): AcceptanceBillResult {
        this['acceptance_date'] = acceptanceDate;
        return this;
    }
    public set acceptanceDate(acceptanceDate: string  | undefined) {
        this['acceptance_date'] = acceptanceDate;
    }
    public get acceptanceDate(): string | undefined {
        return this['acceptance_date'];
    }
    public withAcceptanceGuarantorName(acceptanceGuarantorName: string): AcceptanceBillResult {
        this['acceptance_guarantor_name'] = acceptanceGuarantorName;
        return this;
    }
    public set acceptanceGuarantorName(acceptanceGuarantorName: string  | undefined) {
        this['acceptance_guarantor_name'] = acceptanceGuarantorName;
    }
    public get acceptanceGuarantorName(): string | undefined {
        return this['acceptance_guarantor_name'];
    }
    public withAcceptanceGuarantorAddress(acceptanceGuarantorAddress: string): AcceptanceBillResult {
        this['acceptance_guarantor_address'] = acceptanceGuarantorAddress;
        return this;
    }
    public set acceptanceGuarantorAddress(acceptanceGuarantorAddress: string  | undefined) {
        this['acceptance_guarantor_address'] = acceptanceGuarantorAddress;
    }
    public get acceptanceGuarantorAddress(): string | undefined {
        return this['acceptance_guarantor_address'];
    }
    public withAcceptanceGuarantorAccount(acceptanceGuarantorAccount: string): AcceptanceBillResult {
        this['acceptance_guarantor_account'] = acceptanceGuarantorAccount;
        return this;
    }
    public set acceptanceGuarantorAccount(acceptanceGuarantorAccount: string  | undefined) {
        this['acceptance_guarantor_account'] = acceptanceGuarantorAccount;
    }
    public get acceptanceGuarantorAccount(): string | undefined {
        return this['acceptance_guarantor_account'];
    }
    public withAcceptanceGuaranteeDate(acceptanceGuaranteeDate: string): AcceptanceBillResult {
        this['acceptance_guarantee_date'] = acceptanceGuaranteeDate;
        return this;
    }
    public set acceptanceGuaranteeDate(acceptanceGuaranteeDate: string  | undefined) {
        this['acceptance_guarantee_date'] = acceptanceGuaranteeDate;
    }
    public get acceptanceGuaranteeDate(): string | undefined {
        return this['acceptance_guarantee_date'];
    }
    public withAcceptanceGuarantorBankNumber(acceptanceGuarantorBankNumber: string): AcceptanceBillResult {
        this['acceptance_guarantor_bank_number'] = acceptanceGuarantorBankNumber;
        return this;
    }
    public set acceptanceGuarantorBankNumber(acceptanceGuarantorBankNumber: string  | undefined) {
        this['acceptance_guarantor_bank_number'] = acceptanceGuarantorBankNumber;
    }
    public get acceptanceGuarantorBankNumber(): string | undefined {
        return this['acceptance_guarantor_bank_number'];
    }
    public withAcceptanceGuarantorBankName(acceptanceGuarantorBankName: string): AcceptanceBillResult {
        this['acceptance_guarantor_bank_name'] = acceptanceGuarantorBankName;
        return this;
    }
    public set acceptanceGuarantorBankName(acceptanceGuarantorBankName: string  | undefined) {
        this['acceptance_guarantor_bank_name'] = acceptanceGuarantorBankName;
    }
    public get acceptanceGuarantorBankName(): string | undefined {
        return this['acceptance_guarantor_bank_name'];
    }
    public withIssuerRatingEntity(issuerRatingEntity: string): AcceptanceBillResult {
        this['issuer_rating_entity'] = issuerRatingEntity;
        return this;
    }
    public set issuerRatingEntity(issuerRatingEntity: string  | undefined) {
        this['issuer_rating_entity'] = issuerRatingEntity;
    }
    public get issuerRatingEntity(): string | undefined {
        return this['issuer_rating_entity'];
    }
    public withIssuerCreditRating(issuerCreditRating: string): AcceptanceBillResult {
        this['issuer_credit_rating'] = issuerCreditRating;
        return this;
    }
    public set issuerCreditRating(issuerCreditRating: string  | undefined) {
        this['issuer_credit_rating'] = issuerCreditRating;
    }
    public get issuerCreditRating(): string | undefined {
        return this['issuer_credit_rating'];
    }
    public withIssuerRatingDueDate(issuerRatingDueDate: string): AcceptanceBillResult {
        this['issuer_rating_due_date'] = issuerRatingDueDate;
        return this;
    }
    public set issuerRatingDueDate(issuerRatingDueDate: string  | undefined) {
        this['issuer_rating_due_date'] = issuerRatingDueDate;
    }
    public get issuerRatingDueDate(): string | undefined {
        return this['issuer_rating_due_date'];
    }
    public withAcceptorRatingEntity(acceptorRatingEntity: string): AcceptanceBillResult {
        this['acceptor_rating_entity'] = acceptorRatingEntity;
        return this;
    }
    public set acceptorRatingEntity(acceptorRatingEntity: string  | undefined) {
        this['acceptor_rating_entity'] = acceptorRatingEntity;
    }
    public get acceptorRatingEntity(): string | undefined {
        return this['acceptor_rating_entity'];
    }
    public withAcceptorCreditRating(acceptorCreditRating: string): AcceptanceBillResult {
        this['acceptor_credit_rating'] = acceptorCreditRating;
        return this;
    }
    public set acceptorCreditRating(acceptorCreditRating: string  | undefined) {
        this['acceptor_credit_rating'] = acceptorCreditRating;
    }
    public get acceptorCreditRating(): string | undefined {
        return this['acceptor_credit_rating'];
    }
    public withAcceptorRatingDueDate(acceptorRatingDueDate: string): AcceptanceBillResult {
        this['acceptor_rating_due_date'] = acceptorRatingDueDate;
        return this;
    }
    public set acceptorRatingDueDate(acceptorRatingDueDate: string  | undefined) {
        this['acceptor_rating_due_date'] = acceptorRatingDueDate;
    }
    public get acceptorRatingDueDate(): string | undefined {
        return this['acceptor_rating_due_date'];
    }
    public withBillPackageNumber(billPackageNumber: string): AcceptanceBillResult {
        this['bill_package_number'] = billPackageNumber;
        return this;
    }
    public set billPackageNumber(billPackageNumber: string  | undefined) {
        this['bill_package_number'] = billPackageNumber;
    }
    public get billPackageNumber(): string | undefined {
        return this['bill_package_number'];
    }
    public withRemarks(remarks: string): AcceptanceBillResult {
        this['remarks'] = remarks;
        return this;
    }
    public withConfidence(confidence: object): AcceptanceBillResult {
        this['confidence'] = confidence;
        return this;
    }
}