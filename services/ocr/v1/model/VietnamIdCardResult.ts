

export class VietnamIdCardResult {
    public side?: string;
    private 'number'?: string;
    private 'full_name'?: string;
    private 'birth_date'?: string;
    public sex?: string;
    public nationality?: string;
    private 'origin_place'?: string;
    private 'residence_place'?: string;
    private 'expiry_date'?: string;
    private 'personal_identification'?: string;
    private 'issue_date'?: string;
    private 'machine_code1'?: string;
    private 'machine_code2'?: string;
    private 'machine_code3'?: string;
    public confidence?: object;
    private 'portrait_image'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    private 'idcard_type'?: string;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withSide(side: string): VietnamIdCardResult {
        this['side'] = side;
        return this;
    }
    public withModelNumber(modelNumber: string): VietnamIdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withFullName(fullName: string): VietnamIdCardResult {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withBirthDate(birthDate: string): VietnamIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withSex(sex: string): VietnamIdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withNationality(nationality: string): VietnamIdCardResult {
        this['nationality'] = nationality;
        return this;
    }
    public withOriginPlace(originPlace: string): VietnamIdCardResult {
        this['origin_place'] = originPlace;
        return this;
    }
    public set originPlace(originPlace: string  | undefined) {
        this['origin_place'] = originPlace;
    }
    public get originPlace(): string | undefined {
        return this['origin_place'];
    }
    public withResidencePlace(residencePlace: string): VietnamIdCardResult {
        this['residence_place'] = residencePlace;
        return this;
    }
    public set residencePlace(residencePlace: string  | undefined) {
        this['residence_place'] = residencePlace;
    }
    public get residencePlace(): string | undefined {
        return this['residence_place'];
    }
    public withExpiryDate(expiryDate: string): VietnamIdCardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withPersonalIdentification(personalIdentification: string): VietnamIdCardResult {
        this['personal_identification'] = personalIdentification;
        return this;
    }
    public set personalIdentification(personalIdentification: string  | undefined) {
        this['personal_identification'] = personalIdentification;
    }
    public get personalIdentification(): string | undefined {
        return this['personal_identification'];
    }
    public withIssueDate(issueDate: string): VietnamIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withMachineCode1(machineCode1: string): VietnamIdCardResult {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: string  | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1(): string | undefined {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): VietnamIdCardResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string  | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2(): string | undefined {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): VietnamIdCardResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string  | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3(): string | undefined {
        return this['machine_code3'];
    }
    public withConfidence(confidence: object): VietnamIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
    public withPortraitImage(portraitImage: string): VietnamIdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): VietnamIdCardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withIdcardType(idcardType: string): VietnamIdCardResult {
        this['idcard_type'] = idcardType;
        return this;
    }
    public set idcardType(idcardType: string  | undefined) {
        this['idcard_type'] = idcardType;
    }
    public get idcardType(): string | undefined {
        return this['idcard_type'];
    }
    public withTextLocation(textLocation: object): VietnamIdCardResult {
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