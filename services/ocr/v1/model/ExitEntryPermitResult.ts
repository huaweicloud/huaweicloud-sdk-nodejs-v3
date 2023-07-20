import { ExitEntryPermitConfidence } from './ExitEntryPermitConfidence';
import { ExitEntryPermitEndorsementInfo } from './ExitEntryPermitEndorsementInfo';


export class ExitEntryPermitResult {
    public name?: string;
    private 'name_en'?: string;
    public sex?: string;
    private 'birth_date'?: string;
    private 'number'?: string;
    private 'issuing_authority'?: string;
    private 'issue_place'?: string;
    private 'valid_period'?: string;
    private 'machine_code'?: string;
    private 'portrait_image'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    public type?: string;
    public side?: string;
    private 'endorsement_info_hk'?: ExitEntryPermitEndorsementInfo;
    private 'endorsement_info_mo'?: ExitEntryPermitEndorsementInfo;
    private 'endorsement_info_tw'?: ExitEntryPermitEndorsementInfo;
    public confidence?: ExitEntryPermitConfidence;
    public constructor() { 
    }
    public withName(name: string): ExitEntryPermitResult {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): ExitEntryPermitResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withSex(sex: string): ExitEntryPermitResult {
        this['sex'] = sex;
        return this;
    }
    public withBirthDate(birthDate: string): ExitEntryPermitResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withModelNumber(modelNumber: string): ExitEntryPermitResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIssuingAuthority(issuingAuthority: string): ExitEntryPermitResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withIssuePlace(issuePlace: string): ExitEntryPermitResult {
        this['issue_place'] = issuePlace;
        return this;
    }
    public set issuePlace(issuePlace: string  | undefined) {
        this['issue_place'] = issuePlace;
    }
    public get issuePlace(): string | undefined {
        return this['issue_place'];
    }
    public withValidPeriod(validPeriod: string): ExitEntryPermitResult {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: string  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): string | undefined {
        return this['valid_period'];
    }
    public withMachineCode(machineCode: string): ExitEntryPermitResult {
        this['machine_code'] = machineCode;
        return this;
    }
    public set machineCode(machineCode: string  | undefined) {
        this['machine_code'] = machineCode;
    }
    public get machineCode(): string | undefined {
        return this['machine_code'];
    }
    public withPortraitImage(portraitImage: string): ExitEntryPermitResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): ExitEntryPermitResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withType(type: string): ExitEntryPermitResult {
        this['type'] = type;
        return this;
    }
    public withSide(side: string): ExitEntryPermitResult {
        this['side'] = side;
        return this;
    }
    public withEndorsementInfoHk(endorsementInfoHk: ExitEntryPermitEndorsementInfo): ExitEntryPermitResult {
        this['endorsement_info_hk'] = endorsementInfoHk;
        return this;
    }
    public set endorsementInfoHk(endorsementInfoHk: ExitEntryPermitEndorsementInfo  | undefined) {
        this['endorsement_info_hk'] = endorsementInfoHk;
    }
    public get endorsementInfoHk(): ExitEntryPermitEndorsementInfo | undefined {
        return this['endorsement_info_hk'];
    }
    public withEndorsementInfoMo(endorsementInfoMo: ExitEntryPermitEndorsementInfo): ExitEntryPermitResult {
        this['endorsement_info_mo'] = endorsementInfoMo;
        return this;
    }
    public set endorsementInfoMo(endorsementInfoMo: ExitEntryPermitEndorsementInfo  | undefined) {
        this['endorsement_info_mo'] = endorsementInfoMo;
    }
    public get endorsementInfoMo(): ExitEntryPermitEndorsementInfo | undefined {
        return this['endorsement_info_mo'];
    }
    public withEndorsementInfoTw(endorsementInfoTw: ExitEntryPermitEndorsementInfo): ExitEntryPermitResult {
        this['endorsement_info_tw'] = endorsementInfoTw;
        return this;
    }
    public set endorsementInfoTw(endorsementInfoTw: ExitEntryPermitEndorsementInfo  | undefined) {
        this['endorsement_info_tw'] = endorsementInfoTw;
    }
    public get endorsementInfoTw(): ExitEntryPermitEndorsementInfo | undefined {
        return this['endorsement_info_tw'];
    }
    public withConfidence(confidence: ExitEntryPermitConfidence): ExitEntryPermitResult {
        this['confidence'] = confidence;
        return this;
    }
}