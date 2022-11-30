import { MyanmarIdcardConfidence } from './MyanmarIdcardConfidence';


export class MyanmarIdcardResult {
    public side?: string;
    private 'class'?: string | undefined;
    private 'nrc_id'?: string | undefined;
    private 'issue_date'?: string | undefined;
    public name?: string;
    private 'father_name'?: string | undefined;
    public birth?: string;
    private 'bloodlines_religion'?: string | undefined;
    public height?: string;
    private 'blood_group'?: string | undefined;
    private 'card_id'?: string | undefined;
    private 'nrc_id_back'?: string | undefined;
    public profession?: string;
    public address?: string;
    public confidence?: MyanmarIdcardConfidence;
    private 'portrait_image'?: string | undefined;
    private 'portrait_location'?: Array<Array<number>> | undefined;
    private 'idcard_type'?: string | undefined;
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
    public set _class(_class: string | undefined) {
        this['class'] = _class;
    }
    public get _class() {
        return this['class'];
    }
    public withNrcId(nrcId: string): MyanmarIdcardResult {
        this['nrc_id'] = nrcId;
        return this;
    }
    public set nrcId(nrcId: string | undefined) {
        this['nrc_id'] = nrcId;
    }
    public get nrcId() {
        return this['nrc_id'];
    }
    public withIssueDate(issueDate: string): MyanmarIdcardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
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
    public set fatherName(fatherName: string | undefined) {
        this['father_name'] = fatherName;
    }
    public get fatherName() {
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
    public set bloodlinesReligion(bloodlinesReligion: string | undefined) {
        this['bloodlines_religion'] = bloodlinesReligion;
    }
    public get bloodlinesReligion() {
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
    public set bloodGroup(bloodGroup: string | undefined) {
        this['blood_group'] = bloodGroup;
    }
    public get bloodGroup() {
        return this['blood_group'];
    }
    public withCardId(cardId: string): MyanmarIdcardResult {
        this['card_id'] = cardId;
        return this;
    }
    public set cardId(cardId: string | undefined) {
        this['card_id'] = cardId;
    }
    public get cardId() {
        return this['card_id'];
    }
    public withNrcIdBack(nrcIdBack: string): MyanmarIdcardResult {
        this['nrc_id_back'] = nrcIdBack;
        return this;
    }
    public set nrcIdBack(nrcIdBack: string | undefined) {
        this['nrc_id_back'] = nrcIdBack;
    }
    public get nrcIdBack() {
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
    public set portraitImage(portraitImage: string | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage() {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): MyanmarIdcardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>> | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation() {
        return this['portrait_location'];
    }
    public withIdcardType(idcardType: string): MyanmarIdcardResult {
        this['idcard_type'] = idcardType;
        return this;
    }
    public set idcardType(idcardType: string | undefined) {
        this['idcard_type'] = idcardType;
    }
    public get idcardType() {
        return this['idcard_type'];
    }
}