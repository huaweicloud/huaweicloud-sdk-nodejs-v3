

export class BankcardResult {
    private 'bank_name'?: string;
    private 'card_number'?: string;
    private 'issue_date'?: string;
    private 'expiry_date'?: string;
    public type?: string;
    public confidence?: object;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withBankName(bankName: string): BankcardResult {
        this['bank_name'] = bankName;
        return this;
    }
    public set bankName(bankName: string  | undefined) {
        this['bank_name'] = bankName;
    }
    public get bankName(): string | undefined {
        return this['bank_name'];
    }
    public withCardNumber(cardNumber: string): BankcardResult {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: string  | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber(): string | undefined {
        return this['card_number'];
    }
    public withIssueDate(issueDate: string): BankcardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): BankcardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
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
    public withTextLocation(textLocation: object): BankcardResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
}