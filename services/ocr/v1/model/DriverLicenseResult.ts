

export class DriverLicenseResult {
    public type?: string;
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
    private 'accumulated_scores'?: string | undefined;
    public status?: Array<string>;
    private 'generation_date'?: string | undefined;
    private 'current_time'?: string | undefined;
    private 'text_location'?: object | undefined;
    public constructor() { 
    }
    public withType(type: string): DriverLicenseResult {
        this['type'] = type;
        return this;
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
    public withAccumulatedScores(accumulatedScores: string): DriverLicenseResult {
        this['accumulated_scores'] = accumulatedScores;
        return this;
    }
    public set accumulatedScores(accumulatedScores: string | undefined) {
        this['accumulated_scores'] = accumulatedScores;
    }
    public get accumulatedScores() {
        return this['accumulated_scores'];
    }
    public withStatus(status: Array<string>): DriverLicenseResult {
        this['status'] = status;
        return this;
    }
    public withGenerationDate(generationDate: string): DriverLicenseResult {
        this['generation_date'] = generationDate;
        return this;
    }
    public set generationDate(generationDate: string | undefined) {
        this['generation_date'] = generationDate;
    }
    public get generationDate() {
        return this['generation_date'];
    }
    public withCurrentTime(currentTime: string): DriverLicenseResult {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: string | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime() {
        return this['current_time'];
    }
    public withTextLocation(textLocation: object): DriverLicenseResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation() {
        return this['text_location'];
    }
}