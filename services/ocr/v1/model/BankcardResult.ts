

export class BankcardResult {
    private 'bank_name'?: string | undefined;
    private 'card_number'?: string | undefined;
    private 'issue_date'?: string | undefined;
    private 'expiry_date'?: string | undefined;
    public type?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withBankName(bankName: string): BankcardResult {
        this['bank_name'] = bankName;
        return this;
    }
    public set bankName(bankName: string | undefined) {
        this['bank_name'] = bankName;
    }
    public get bankName() {
        return this['bank_name'];
    }
    public withCardNumber(cardNumber: string): BankcardResult {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: string | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber() {
        return this['card_number'];
    }
    public withIssueDate(issueDate: string): BankcardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): BankcardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate() {
        return this['expiry_date'];
    }
    public withType(type: string): BankcardResult {
        this['type'] = type;
        return this;
    }
    public withConfidence(confidence: object): BankcardResult {
        this['confidence'] = confidence;
        return this;
    }
}