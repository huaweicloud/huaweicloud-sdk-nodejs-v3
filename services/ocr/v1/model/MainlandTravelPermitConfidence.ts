

export class MainlandTravelPermitConfidence {
    public name?: number;
    private 'name_en'?: number;
    private 'birth_date'?: number;
    public sex?: number;
    private 'valid_period'?: number;
    private 'issuing_authority'?: number;
    private 'number'?: number;
    private 'issue_place'?: number;
    private 'issue_times'?: number;
    public type?: number;
    public side?: number;
    private 'id_name'?: number;
    private 'id_number'?: number;
    private 'machine_code1'?: number;
    private 'machine_code2'?: number;
    private 'machine_code3'?: number;
    public constructor() { 
    }
    public withName(name: number): MainlandTravelPermitConfidence {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: number): MainlandTravelPermitConfidence {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: number  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): number | undefined {
        return this['name_en'];
    }
    public withBirthDate(birthDate: number): MainlandTravelPermitConfidence {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: number  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): number | undefined {
        return this['birth_date'];
    }
    public withSex(sex: number): MainlandTravelPermitConfidence {
        this['sex'] = sex;
        return this;
    }
    public withValidPeriod(validPeriod: number): MainlandTravelPermitConfidence {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: number  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): number | undefined {
        return this['valid_period'];
    }
    public withIssuingAuthority(issuingAuthority: number): MainlandTravelPermitConfidence {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: number  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): number | undefined {
        return this['issuing_authority'];
    }
    public withModelNumber(modelNumber: number): MainlandTravelPermitConfidence {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withIssuePlace(issuePlace: number): MainlandTravelPermitConfidence {
        this['issue_place'] = issuePlace;
        return this;
    }
    public set issuePlace(issuePlace: number  | undefined) {
        this['issue_place'] = issuePlace;
    }
    public get issuePlace(): number | undefined {
        return this['issue_place'];
    }
    public withIssueTimes(issueTimes: number): MainlandTravelPermitConfidence {
        this['issue_times'] = issueTimes;
        return this;
    }
    public set issueTimes(issueTimes: number  | undefined) {
        this['issue_times'] = issueTimes;
    }
    public get issueTimes(): number | undefined {
        return this['issue_times'];
    }
    public withType(type: number): MainlandTravelPermitConfidence {
        this['type'] = type;
        return this;
    }
    public withSide(side: number): MainlandTravelPermitConfidence {
        this['side'] = side;
        return this;
    }
    public withIdName(idName: number): MainlandTravelPermitConfidence {
        this['id_name'] = idName;
        return this;
    }
    public set idName(idName: number  | undefined) {
        this['id_name'] = idName;
    }
    public get idName(): number | undefined {
        return this['id_name'];
    }
    public withIdNumber(idNumber: number): MainlandTravelPermitConfidence {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: number  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): number | undefined {
        return this['id_number'];
    }
    public withMachineCode1(machineCode1: number): MainlandTravelPermitConfidence {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: number  | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1(): number | undefined {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: number): MainlandTravelPermitConfidence {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: number  | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2(): number | undefined {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: number): MainlandTravelPermitConfidence {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: number  | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3(): number | undefined {
        return this['machine_code3'];
    }
}