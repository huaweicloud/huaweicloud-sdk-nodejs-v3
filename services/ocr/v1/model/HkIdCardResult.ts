

export class HkIdCardResult {
    public name?: string;
    private 'name_en'?: string;
    public sex?: string;
    private 'birth_date'?: string;
    private 'number'?: string;
    public symbols?: string;
    private 'name_telegraph_code'?: string;
    public permanent?: boolean;
    private 'initial_issue_date'?: string;
    private 'issue_date'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    private 'portrait_image'?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withName(name: string): HkIdCardResult {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): HkIdCardResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withSex(sex: string): HkIdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withBirthDate(birthDate: string): HkIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withModelNumber(modelNumber: string): HkIdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withSymbols(symbols: string): HkIdCardResult {
        this['symbols'] = symbols;
        return this;
    }
    public withNameTelegraphCode(nameTelegraphCode: string): HkIdCardResult {
        this['name_telegraph_code'] = nameTelegraphCode;
        return this;
    }
    public set nameTelegraphCode(nameTelegraphCode: string  | undefined) {
        this['name_telegraph_code'] = nameTelegraphCode;
    }
    public get nameTelegraphCode(): string | undefined {
        return this['name_telegraph_code'];
    }
    public withPermanent(permanent: boolean): HkIdCardResult {
        this['permanent'] = permanent;
        return this;
    }
    public withInitialIssueDate(initialIssueDate: string): HkIdCardResult {
        this['initial_issue_date'] = initialIssueDate;
        return this;
    }
    public set initialIssueDate(initialIssueDate: string  | undefined) {
        this['initial_issue_date'] = initialIssueDate;
    }
    public get initialIssueDate(): string | undefined {
        return this['initial_issue_date'];
    }
    public withIssueDate(issueDate: string): HkIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): HkIdCardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withPortraitImage(portraitImage: string): HkIdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withConfidence(confidence: object): HkIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}