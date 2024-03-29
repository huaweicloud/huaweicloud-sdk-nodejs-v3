import { MyanmarIdcardConfidence } from './MyanmarIdcardConfidence';
import { MyanmarIdcardTranslationInfo } from './MyanmarIdcardTranslationInfo';


export class MyanmarIdcardResult {
    public side?: string;
    private 'class'?: string;
    private 'nrc_id'?: string;
    private 'issue_date'?: string;
    public name?: string;
    private 'father_name'?: string;
    public birth?: string;
    private 'bloodlines_religion'?: string;
    public height?: string;
    private 'blood_group'?: string;
    private 'card_id'?: string;
    private 'nrc_id_back'?: string;
    public profession?: string;
    public address?: string;
    public confidence?: MyanmarIdcardConfidence;
    private 'portrait_image'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    private 'idcard_type'?: string;
    private 'translation_info'?: MyanmarIdcardTranslationInfo;
    public constructor() { 
    }
    public withSide(side: string): MyanmarIdcardResult {
        this['side'] = side;
        return this;
    }
    public withClass(_class: string): MyanmarIdcardResult {
        this['class'] = _class;
        return this;
    }
    public set _class(_class: string  | undefined) {
        this['class'] = _class;
    }
    public get _class(): string | undefined {
        return this['class'];
    }
    public withNrcId(nrcId: string): MyanmarIdcardResult {
        this['nrc_id'] = nrcId;
        return this;
    }
    public set nrcId(nrcId: string  | undefined) {
        this['nrc_id'] = nrcId;
    }
    public get nrcId(): string | undefined {
        return this['nrc_id'];
    }
    public withIssueDate(issueDate: string): MyanmarIdcardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withName(name: string): MyanmarIdcardResult {
        this['name'] = name;
        return this;
    }
    public withFatherName(fatherName: string): MyanmarIdcardResult {
        this['father_name'] = fatherName;
        return this;
    }
    public set fatherName(fatherName: string  | undefined) {
        this['father_name'] = fatherName;
    }
    public get fatherName(): string | undefined {
        return this['father_name'];
    }
    public withBirth(birth: string): MyanmarIdcardResult {
        this['birth'] = birth;
        return this;
    }
    public withBloodlinesReligion(bloodlinesReligion: string): MyanmarIdcardResult {
        this['bloodlines_religion'] = bloodlinesReligion;
        return this;
    }
    public set bloodlinesReligion(bloodlinesReligion: string  | undefined) {
        this['bloodlines_religion'] = bloodlinesReligion;
    }
    public get bloodlinesReligion(): string | undefined {
        return this['bloodlines_religion'];
    }
    public withHeight(height: string): MyanmarIdcardResult {
        this['height'] = height;
        return this;
    }
    public withBloodGroup(bloodGroup: string): MyanmarIdcardResult {
        this['blood_group'] = bloodGroup;
        return this;
    }
    public set bloodGroup(bloodGroup: string  | undefined) {
        this['blood_group'] = bloodGroup;
    }
    public get bloodGroup(): string | undefined {
        return this['blood_group'];
    }
    public withCardId(cardId: string): MyanmarIdcardResult {
        this['card_id'] = cardId;
        return this;
    }
    public set cardId(cardId: string  | undefined) {
        this['card_id'] = cardId;
    }
    public get cardId(): string | undefined {
        return this['card_id'];
    }
    public withNrcIdBack(nrcIdBack: string): MyanmarIdcardResult {
        this['nrc_id_back'] = nrcIdBack;
        return this;
    }
    public set nrcIdBack(nrcIdBack: string  | undefined) {
        this['nrc_id_back'] = nrcIdBack;
    }
    public get nrcIdBack(): string | undefined {
        return this['nrc_id_back'];
    }
    public withProfession(profession: string): MyanmarIdcardResult {
        this['profession'] = profession;
        return this;
    }
    public withAddress(address: string): MyanmarIdcardResult {
        this['address'] = address;
        return this;
    }
    public withConfidence(confidence: MyanmarIdcardConfidence): MyanmarIdcardResult {
        this['confidence'] = confidence;
        return this;
    }
    public withPortraitImage(portraitImage: string): MyanmarIdcardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): MyanmarIdcardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withIdcardType(idcardType: string): MyanmarIdcardResult {
        this['idcard_type'] = idcardType;
        return this;
    }
    public set idcardType(idcardType: string  | undefined) {
        this['idcard_type'] = idcardType;
    }
    public get idcardType(): string | undefined {
        return this['idcard_type'];
    }
    public withTranslationInfo(translationInfo: MyanmarIdcardTranslationInfo): MyanmarIdcardResult {
        this['translation_info'] = translationInfo;
        return this;
    }
    public set translationInfo(translationInfo: MyanmarIdcardTranslationInfo  | undefined) {
        this['translation_info'] = translationInfo;
    }
    public get translationInfo(): MyanmarIdcardTranslationInfo | undefined {
        return this['translation_info'];
    }
}