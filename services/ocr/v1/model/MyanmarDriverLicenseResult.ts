import { MyanmarDriverLicenseConfidence } from './MyanmarDriverLicenseConfidence';


export class MyanmarDriverLicenseResult {
    private 'card_number'?: string | undefined;
    private 'card_number_en'?: string | undefined;
    public name?: string;
    private 'name_en'?: string | undefined;
    private 'nrc_id'?: string | undefined;
    private 'nrc_id_en'?: string | undefined;
    public birth?: string;
    private 'birth_en'?: string | undefined;
    private 'blood_group'?: string | undefined;
    private 'blood_group_en'?: string | undefined;
    private 'expiried_date'?: string | undefined;
    private 'expiried_date_en'?: string | undefined;
    public confidence?: MyanmarDriverLicenseConfidence;
    public constructor() { 
    }
    public withCardNumber(cardNumber: string): MyanmarDriverLicenseResult {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: string | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber() {
        return this['card_number'];
    }
    public withCardNumberEn(cardNumberEn: string): MyanmarDriverLicenseResult {
        this['card_number_en'] = cardNumberEn;
        return this;
    }
    public set cardNumberEn(cardNumberEn: string | undefined) {
        this['card_number_en'] = cardNumberEn;
    }
    public get cardNumberEn() {
        return this['card_number_en'];
    }
    public withName(name: string): MyanmarDriverLicenseResult {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): MyanmarDriverLicenseResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withNrcId(nrcId: string): MyanmarDriverLicenseResult {
        this['nrc_id'] = nrcId;
        return this;
    }
    public set nrcId(nrcId: string | undefined) {
        this['nrc_id'] = nrcId;
    }
    public get nrcId() {
        return this['nrc_id'];
    }
    public withNrcIdEn(nrcIdEn: string): MyanmarDriverLicenseResult {
        this['nrc_id_en'] = nrcIdEn;
        return this;
    }
    public set nrcIdEn(nrcIdEn: string | undefined) {
        this['nrc_id_en'] = nrcIdEn;
    }
    public get nrcIdEn() {
        return this['nrc_id_en'];
    }
    public withBirth(birth: string): MyanmarDriverLicenseResult {
        this['birth'] = birth;
        return this;
    }
    public withBirthEn(birthEn: string): MyanmarDriverLicenseResult {
        this['birth_en'] = birthEn;
        return this;
    }
    public set birthEn(birthEn: string | undefined) {
        this['birth_en'] = birthEn;
    }
    public get birthEn() {
        return this['birth_en'];
    }
    public withBloodGroup(bloodGroup: string): MyanmarDriverLicenseResult {
        this['blood_group'] = bloodGroup;
        return this;
    }
    public set bloodGroup(bloodGroup: string | undefined) {
        this['blood_group'] = bloodGroup;
    }
    public get bloodGroup() {
        return this['blood_group'];
    }
    public withBloodGroupEn(bloodGroupEn: string): MyanmarDriverLicenseResult {
        this['blood_group_en'] = bloodGroupEn;
        return this;
    }
    public set bloodGroupEn(bloodGroupEn: string | undefined) {
        this['blood_group_en'] = bloodGroupEn;
    }
    public get bloodGroupEn() {
        return this['blood_group_en'];
    }
    public withExpiriedDate(expiriedDate: string): MyanmarDriverLicenseResult {
        this['expiried_date'] = expiriedDate;
        return this;
    }
    public set expiriedDate(expiriedDate: string | undefined) {
        this['expiried_date'] = expiriedDate;
    }
    public get expiriedDate() {
        return this['expiried_date'];
    }
    public withExpiriedDateEn(expiriedDateEn: string): MyanmarDriverLicenseResult {
        this['expiried_date_en'] = expiriedDateEn;
        return this;
    }
    public set expiriedDateEn(expiriedDateEn: string | undefined) {
        this['expiried_date_en'] = expiriedDateEn;
    }
    public get expiriedDateEn() {
        return this['expiried_date_en'];
    }
    public withConfidence(confidence: MyanmarDriverLicenseConfidence): MyanmarDriverLicenseResult {
        this['confidence'] = confidence;
        return this;
    }
}