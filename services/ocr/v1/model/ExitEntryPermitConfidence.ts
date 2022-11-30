

export class ExitEntryPermitConfidence {
    public name?: number;
    private 'name_en'?: number | undefined;
    private 'birth_date'?: number | undefined;
    public sex?: number;
    private 'number'?: number | undefined;
    private 'valid_period'?: number | undefined;
    private 'issuing_authority'?: number | undefined;
    private 'issue_place'?: number | undefined;
    private 'machine_code'?: number | undefined;
    public type?: number;
    public side?: number;
    private 'endorsement_info_hk'?: object | undefined;
    private 'endorsement_info_mo'?: object | undefined;
    private 'endorsement_info_tw'?: object | undefined;
    public constructor() { 
    }
    public withName(name: number): ExitEntryPermitConfidence {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: number): ExitEntryPermitConfidence {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: number | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withBirthDate(birthDate: number): ExitEntryPermitConfidence {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: number | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate() {
        return this['birth_date'];
    }
    public withSex(sex: number): ExitEntryPermitConfidence {
        this['sex'] = sex;
        return this;
    }
    public withModelNumber(modelNumber: number): ExitEntryPermitConfidence {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withValidPeriod(validPeriod: number): ExitEntryPermitConfidence {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: number | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod() {
        return this['valid_period'];
    }
    public withIssuingAuthority(issuingAuthority: number): ExitEntryPermitConfidence {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: number | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withIssuePlace(issuePlace: number): ExitEntryPermitConfidence {
        this['issue_place'] = issuePlace;
        return this;
    }
    public set issuePlace(issuePlace: number | undefined) {
        this['issue_place'] = issuePlace;
    }
    public get issuePlace() {
        return this['issue_place'];
    }
    public withMachineCode(machineCode: number): ExitEntryPermitConfidence {
        this['machine_code'] = machineCode;
        return this;
    }
    public set machineCode(machineCode: number | undefined) {
        this['machine_code'] = machineCode;
    }
    public get machineCode() {
        return this['machine_code'];
    }
    public withType(type: number): ExitEntryPermitConfidence {
        this['type'] = type;
        return this;
    }
    public withSide(side: number): ExitEntryPermitConfidence {
        this['side'] = side;
        return this;
    }
    public withEndorsementInfoHk(endorsementInfoHk: object): ExitEntryPermitConfidence {
        this['endorsement_info_hk'] = endorsementInfoHk;
        return this;
    }
    public set endorsementInfoHk(endorsementInfoHk: object | undefined) {
        this['endorsement_info_hk'] = endorsementInfoHk;
    }
    public get endorsementInfoHk() {
        return this['endorsement_info_hk'];
    }
    public withEndorsementInfoMo(endorsementInfoMo: object): ExitEntryPermitConfidence {
        this['endorsement_info_mo'] = endorsementInfoMo;
        return this;
    }
    public set endorsementInfoMo(endorsementInfoMo: object | undefined) {
        this['endorsement_info_mo'] = endorsementInfoMo;
    }
    public get endorsementInfoMo() {
        return this['endorsement_info_mo'];
    }
    public withEndorsementInfoTw(endorsementInfoTw: object): ExitEntryPermitConfidence {
        this['endorsement_info_tw'] = endorsementInfoTw;
        return this;
    }
    public set endorsementInfoTw(endorsementInfoTw: object | undefined) {
        this['endorsement_info_tw'] = endorsementInfoTw;
    }
    public get endorsementInfoTw() {
        return this['endorsement_info_tw'];
    }
}