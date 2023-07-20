

export class DriverLicenseFront {
    public type?: string;
    private 'number'?: string;
    public name?: string;
    public sex?: string;
    public nationality?: string;
    public address?: string;
    public birth?: string;
    private 'issue_date'?: string;
    private 'class'?: string;
    private 'valid_from'?: string;
    private 'valid_to'?: string;
    private 'issuing_authority'?: string;
    private 'accumulated_scores'?: string;
    public status?: Array<string>;
    private 'generation_date'?: string;
    private 'current_time'?: string;
    private 'file_number'?: string;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withType(type: string): DriverLicenseFront {
        this['type'] = type;
        return this;
    }
    public withModelNumber(modelNumber: string): DriverLicenseFront {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withName(name: string): DriverLicenseFront {
        this['name'] = name;
        return this;
    }
    public withSex(sex: string): DriverLicenseFront {
        this['sex'] = sex;
        return this;
    }
    public withNationality(nationality: string): DriverLicenseFront {
        this['nationality'] = nationality;
        return this;
    }
    public withAddress(address: string): DriverLicenseFront {
        this['address'] = address;
        return this;
    }
    public withBirth(birth: string): DriverLicenseFront {
        this['birth'] = birth;
        return this;
    }
    public withIssueDate(issueDate: string): DriverLicenseFront {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withClass(_class: string): DriverLicenseFront {
        this['class'] = _class;
        return this;
    }
    public set _class(_class: string  | undefined) {
        this['class'] = _class;
    }
    public get _class(): string | undefined {
        return this['class'];
    }
    public withValidFrom(validFrom: string): DriverLicenseFront {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string  | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom(): string | undefined {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): DriverLicenseFront {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string  | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo(): string | undefined {
        return this['valid_to'];
    }
    public withIssuingAuthority(issuingAuthority: string): DriverLicenseFront {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withAccumulatedScores(accumulatedScores: string): DriverLicenseFront {
        this['accumulated_scores'] = accumulatedScores;
        return this;
    }
    public set accumulatedScores(accumulatedScores: string  | undefined) {
        this['accumulated_scores'] = accumulatedScores;
    }
    public get accumulatedScores(): string | undefined {
        return this['accumulated_scores'];
    }
    public withStatus(status: Array<string>): DriverLicenseFront {
        this['status'] = status;
        return this;
    }
    public withGenerationDate(generationDate: string): DriverLicenseFront {
        this['generation_date'] = generationDate;
        return this;
    }
    public set generationDate(generationDate: string  | undefined) {
        this['generation_date'] = generationDate;
    }
    public get generationDate(): string | undefined {
        return this['generation_date'];
    }
    public withCurrentTime(currentTime: string): DriverLicenseFront {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: string  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): string | undefined {
        return this['current_time'];
    }
    public withFileNumber(fileNumber: string): DriverLicenseFront {
        this['file_number'] = fileNumber;
        return this;
    }
    public set fileNumber(fileNumber: string  | undefined) {
        this['file_number'] = fileNumber;
    }
    public get fileNumber(): string | undefined {
        return this['file_number'];
    }
    public withTextLocation(textLocation: object): DriverLicenseFront {
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