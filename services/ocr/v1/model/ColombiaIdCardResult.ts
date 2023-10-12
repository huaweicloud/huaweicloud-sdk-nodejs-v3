

export class ColombiaIdCardResult {
    public side?: string;
    private 'number'?: string;
    public name?: string;
    private 'last_name'?: string;
    private 'birth_date'?: string;
    private 'birth_place'?: string;
    public gender?: string;
    private 'blood_type'?: string;
    private 'issue_date'?: string;
    private 'issue_authority'?: string;
    public height?: string;
    private 'citizen_code1'?: string;
    private 'citizen_code2'?: string;
    private 'citizen_code3'?: string;
    public confidence?: { [key: string]: number; };
    public constructor() { 
    }
    public withSide(side: string): ColombiaIdCardResult {
        this['side'] = side;
        return this;
    }
    public withModelNumber(modelNumber: string): ColombiaIdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withName(name: string): ColombiaIdCardResult {
        this['name'] = name;
        return this;
    }
    public withLastName(lastName: string): ColombiaIdCardResult {
        this['last_name'] = lastName;
        return this;
    }
    public set lastName(lastName: string  | undefined) {
        this['last_name'] = lastName;
    }
    public get lastName(): string | undefined {
        return this['last_name'];
    }
    public withBirthDate(birthDate: string): ColombiaIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withBirthPlace(birthPlace: string): ColombiaIdCardResult {
        this['birth_place'] = birthPlace;
        return this;
    }
    public set birthPlace(birthPlace: string  | undefined) {
        this['birth_place'] = birthPlace;
    }
    public get birthPlace(): string | undefined {
        return this['birth_place'];
    }
    public withGender(gender: string): ColombiaIdCardResult {
        this['gender'] = gender;
        return this;
    }
    public withBloodType(bloodType: string): ColombiaIdCardResult {
        this['blood_type'] = bloodType;
        return this;
    }
    public set bloodType(bloodType: string  | undefined) {
        this['blood_type'] = bloodType;
    }
    public get bloodType(): string | undefined {
        return this['blood_type'];
    }
    public withIssueDate(issueDate: string): ColombiaIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withIssueAuthority(issueAuthority: string): ColombiaIdCardResult {
        this['issue_authority'] = issueAuthority;
        return this;
    }
    public set issueAuthority(issueAuthority: string  | undefined) {
        this['issue_authority'] = issueAuthority;
    }
    public get issueAuthority(): string | undefined {
        return this['issue_authority'];
    }
    public withHeight(height: string): ColombiaIdCardResult {
        this['height'] = height;
        return this;
    }
    public withCitizenCode1(citizenCode1: string): ColombiaIdCardResult {
        this['citizen_code1'] = citizenCode1;
        return this;
    }
    public set citizenCode1(citizenCode1: string  | undefined) {
        this['citizen_code1'] = citizenCode1;
    }
    public get citizenCode1(): string | undefined {
        return this['citizen_code1'];
    }
    public withCitizenCode2(citizenCode2: string): ColombiaIdCardResult {
        this['citizen_code2'] = citizenCode2;
        return this;
    }
    public set citizenCode2(citizenCode2: string  | undefined) {
        this['citizen_code2'] = citizenCode2;
    }
    public get citizenCode2(): string | undefined {
        return this['citizen_code2'];
    }
    public withCitizenCode3(citizenCode3: string): ColombiaIdCardResult {
        this['citizen_code3'] = citizenCode3;
        return this;
    }
    public set citizenCode3(citizenCode3: string  | undefined) {
        this['citizen_code3'] = citizenCode3;
    }
    public get citizenCode3(): string | undefined {
        return this['citizen_code3'];
    }
    public withConfidence(confidence: { [key: string]: number; }): ColombiaIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}