import { ChileIdCardConfidence } from './ChileIdCardConfidence';


export class ChileIdCardResult {
    public surname?: Array<string>;
    private 'given_name'?: string;
    public nationality?: string;
    public sex?: string;
    public birth?: string;
    private 'issue_date'?: string;
    private 'expiry_date'?: string;
    private 'document_number'?: string;
    private 'number'?: string;
    public confidence?: ChileIdCardConfidence;
    public constructor() { 
    }
    public withSurname(surname: Array<string>): ChileIdCardResult {
        this['surname'] = surname;
        return this;
    }
    public withGivenName(givenName: string): ChileIdCardResult {
        this['given_name'] = givenName;
        return this;
    }
    public set givenName(givenName: string  | undefined) {
        this['given_name'] = givenName;
    }
    public get givenName(): string | undefined {
        return this['given_name'];
    }
    public withNationality(nationality: string): ChileIdCardResult {
        this['nationality'] = nationality;
        return this;
    }
    public withSex(sex: string): ChileIdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withBirth(birth: string): ChileIdCardResult {
        this['birth'] = birth;
        return this;
    }
    public withIssueDate(issueDate: string): ChileIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): ChileIdCardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withDocumentNumber(documentNumber: string): ChileIdCardResult {
        this['document_number'] = documentNumber;
        return this;
    }
    public set documentNumber(documentNumber: string  | undefined) {
        this['document_number'] = documentNumber;
    }
    public get documentNumber(): string | undefined {
        return this['document_number'];
    }
    public withModelNumber(modelNumber: string): ChileIdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withConfidence(confidence: ChileIdCardConfidence): ChileIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}