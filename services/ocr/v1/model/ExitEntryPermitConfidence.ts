

export class ExitEntryPermitConfidence {
    public name?: number;
    private 'name_en'?: number;
    private 'birth_date'?: number;
    public sex?: number;
    private 'number'?: number;
    private 'valid_period'?: number;
    private 'issuing_authority'?: number;
    private 'issue_place'?: number;
    private 'machine_code'?: number;
    public type?: number;
    public side?: number;
    private 'endorsement_info_hk'?: object;
    private 'endorsement_info_mo'?: object;
    private 'endorsement_info_tw'?: object;
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
    public set nameEn(nameEn: number  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): number | undefined {
        return this['name_en'];
    }
    public withBirthDate(birthDate: number): ExitEntryPermitConfidence {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: number  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): number | undefined {
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
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withValidPeriod(validPeriod: number): ExitEntryPermitConfidence {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: number  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): number | undefined {
        return this['valid_period'];
    }
    public withIssuingAuthority(issuingAuthority: number): ExitEntryPermitConfidence {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: number  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): number | undefined {
        return this['issuing_authority'];
    }
    public withIssuePlace(issuePlace: number): ExitEntryPermitConfidence {
        this['issue_place'] = issuePlace;
        return this;
    }
    public set issuePlace(issuePlace: number  | undefined) {
        this['issue_place'] = issuePlace;
    }
    public get issuePlace(): number | undefined {
        return this['issue_place'];
    }
    public withMachineCode(machineCode: number): ExitEntryPermitConfidence {
        this['machine_code'] = machineCode;
        return this;
    }
    public set machineCode(machineCode: number  | undefined) {
        this['machine_code'] = machineCode;
    }
    public get machineCode(): number | undefined {
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
    public set endorsementInfoHk(endorsementInfoHk: object  | undefined) {
        this['endorsement_info_hk'] = endorsementInfoHk;
    }
    public get endorsementInfoHk(): object | undefined {
        return this['endorsement_info_hk'];
    }
    public withEndorsementInfoMo(endorsementInfoMo: object): ExitEntryPermitConfidence {
        this['endorsement_info_mo'] = endorsementInfoMo;
        return this;
    }
    public set endorsementInfoMo(endorsementInfoMo: object  | undefined) {
        this['endorsement_info_mo'] = endorsementInfoMo;
    }
    public get endorsementInfoMo(): object | undefined {
        return this['endorsement_info_mo'];
    }
    public withEndorsementInfoTw(endorsementInfoTw: object): ExitEntryPermitConfidence {
        this['endorsement_info_tw'] = endorsementInfoTw;
        return this;
    }
    public set endorsementInfoTw(endorsementInfoTw: object  | undefined) {
        this['endorsement_info_tw'] = endorsementInfoTw;
    }
    public get endorsementInfoTw(): object | undefined {
        return this['endorsement_info_tw'];
    }
}