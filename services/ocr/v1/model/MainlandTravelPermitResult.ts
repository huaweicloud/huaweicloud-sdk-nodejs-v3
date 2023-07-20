import { MainlandTravelPermitConfidence } from './MainlandTravelPermitConfidence';


export class MainlandTravelPermitResult {
    public name?: string;
    private 'name_en'?: string;
    private 'birth_date'?: string;
    public sex?: string;
    private 'valid_period'?: string;
    private 'issuing_authority'?: string;
    private 'number'?: string;
    private 'issue_place'?: string;
    private 'issue_times'?: string;
    private 'id_name'?: string;
    private 'id_number'?: string;
    private 'machine_code1'?: string;
    private 'machine_code2'?: string;
    private 'machine_code3'?: string;
    public type?: string;
    public side?: string;
    private 'portrait_image'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    public confidence?: MainlandTravelPermitConfidence;
    public constructor() { 
    }
    public withName(name: string): MainlandTravelPermitResult {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): MainlandTravelPermitResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withBirthDate(birthDate: string): MainlandTravelPermitResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withSex(sex: string): MainlandTravelPermitResult {
        this['sex'] = sex;
        return this;
    }
    public withValidPeriod(validPeriod: string): MainlandTravelPermitResult {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: string  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): string | undefined {
        return this['valid_period'];
    }
    public withIssuingAuthority(issuingAuthority: string): MainlandTravelPermitResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withModelNumber(modelNumber: string): MainlandTravelPermitResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIssuePlace(issuePlace: string): MainlandTravelPermitResult {
        this['issue_place'] = issuePlace;
        return this;
    }
    public set issuePlace(issuePlace: string  | undefined) {
        this['issue_place'] = issuePlace;
    }
    public get issuePlace(): string | undefined {
        return this['issue_place'];
    }
    public withIssueTimes(issueTimes: string): MainlandTravelPermitResult {
        this['issue_times'] = issueTimes;
        return this;
    }
    public set issueTimes(issueTimes: string  | undefined) {
        this['issue_times'] = issueTimes;
    }
    public get issueTimes(): string | undefined {
        return this['issue_times'];
    }
    public withIdName(idName: string): MainlandTravelPermitResult {
        this['id_name'] = idName;
        return this;
    }
    public set idName(idName: string  | undefined) {
        this['id_name'] = idName;
    }
    public get idName(): string | undefined {
        return this['id_name'];
    }
    public withIdNumber(idNumber: string): MainlandTravelPermitResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
        return this['id_number'];
    }
    public withMachineCode1(machineCode1: string): MainlandTravelPermitResult {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: string  | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1(): string | undefined {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): MainlandTravelPermitResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string  | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2(): string | undefined {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): MainlandTravelPermitResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string  | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3(): string | undefined {
        return this['machine_code3'];
    }
    public withType(type: string): MainlandTravelPermitResult {
        this['type'] = type;
        return this;
    }
    public withSide(side: string): MainlandTravelPermitResult {
        this['side'] = side;
        return this;
    }
    public withPortraitImage(portraitImage: string): MainlandTravelPermitResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): MainlandTravelPermitResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withConfidence(confidence: MainlandTravelPermitConfidence): MainlandTravelPermitResult {
        this['confidence'] = confidence;
        return this;
    }
}