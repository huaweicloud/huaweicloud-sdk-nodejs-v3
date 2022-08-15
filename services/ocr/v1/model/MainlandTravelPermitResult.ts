import { MainlandTravelPermitConfidence } from './MainlandTravelPermitConfidence';


export class MainlandTravelPermitResult {
    public name?: string;
    private 'name_en'?: string | undefined;
    private 'birth_date'?: string | undefined;
    public sex?: string;
    private 'valid_period'?: string | undefined;
    private 'issuing_authority'?: string | undefined;
    private 'number'?: string | undefined;
    private 'issue_place'?: string | undefined;
    private 'issue_times'?: string | undefined;
    private 'id_name'?: string | undefined;
    private 'id_number'?: string | undefined;
    private 'machine_code1'?: string | undefined;
    private 'machine_code2'?: string | undefined;
    private 'machine_code3'?: string | undefined;
    public type?: string;
    public side?: string;
    private 'portrait_image'?: string | undefined;
    private 'portrait_location'?: Array<Array<number>> | undefined;
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
    public set nameEn(nameEn: string | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withBirthDate(birthDate: string): MainlandTravelPermitResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate() {
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
    public set validPeriod(validPeriod: string | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod() {
        return this['valid_period'];
    }
    public withIssuingAuthority(issuingAuthority: string): MainlandTravelPermitResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withModelNumber(modelNumber: string): MainlandTravelPermitResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withIssuePlace(issuePlace: string): MainlandTravelPermitResult {
        this['issue_place'] = issuePlace;
        return this;
    }
    public set issuePlace(issuePlace: string | undefined) {
        this['issue_place'] = issuePlace;
    }
    public get issuePlace() {
        return this['issue_place'];
    }
    public withIssueTimes(issueTimes: string): MainlandTravelPermitResult {
        this['issue_times'] = issueTimes;
        return this;
    }
    public set issueTimes(issueTimes: string | undefined) {
        this['issue_times'] = issueTimes;
    }
    public get issueTimes() {
        return this['issue_times'];
    }
    public withIdName(idName: string): MainlandTravelPermitResult {
        this['id_name'] = idName;
        return this;
    }
    public set idName(idName: string | undefined) {
        this['id_name'] = idName;
    }
    public get idName() {
        return this['id_name'];
    }
    public withIdNumber(idNumber: string): MainlandTravelPermitResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber() {
        return this['id_number'];
    }
    public withMachineCode1(machineCode1: string): MainlandTravelPermitResult {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: string | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1() {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): MainlandTravelPermitResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2() {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): MainlandTravelPermitResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3() {
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
    public set portraitImage(portraitImage: string | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage() {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): MainlandTravelPermitResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>> | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation() {
        return this['portrait_location'];
    }
    public withConfidence(confidence: MainlandTravelPermitConfidence): MainlandTravelPermitResult {
        this['confidence'] = confidence;
        return this;
    }
}