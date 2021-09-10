

export class DriverLicenseResult {
    private 'number'?: string | undefined;
    public name?: string;
    public sex?: string;
    public nationality?: string;
    public address?: string;
    public birth?: string;
    private 'issue_date'?: string | undefined;
    private 'class'?: string | undefined;
    private 'valid_from'?: string | undefined;
    private 'valid_to'?: string | undefined;
    private 'issuing_authority'?: string | undefined;
    private 'file_number'?: string | undefined;
    public record?: string;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): DriverLicenseResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withName(name: string): DriverLicenseResult {
        this['name'] = name;
        return this;
    }
    public withSex(sex: string): DriverLicenseResult {
        this['sex'] = sex;
        return this;
    }
    public withNationality(nationality: string): DriverLicenseResult {
        this['nationality'] = nationality;
        return this;
    }
    public withAddress(address: string): DriverLicenseResult {
        this['address'] = address;
        return this;
    }
    public withBirth(birth: string): DriverLicenseResult {
        this['birth'] = birth;
        return this;
    }
    public withIssueDate(issueDate: string): DriverLicenseResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withClass(_class: string): DriverLicenseResult {
        this['class'] = _class;
        return this;
    }
    public set _class(_class: string | undefined) {
        this['class'] = _class;
    }
    public get _class() {
        return this['class'];
    }
    public withValidFrom(validFrom: string): DriverLicenseResult {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom() {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): DriverLicenseResult {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo() {
        return this['valid_to'];
    }
    public withIssuingAuthority(issuingAuthority: string): DriverLicenseResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withFileNumber(fileNumber: string): DriverLicenseResult {
        this['file_number'] = fileNumber;
        return this;
    }
    public set fileNumber(fileNumber: string | undefined) {
        this['file_number'] = fileNumber;
    }
    public get fileNumber() {
        return this['file_number'];
    }
    public withRecord(record: string): DriverLicenseResult {
        this['record'] = record;
        return this;
    }
}