

export class MyanmarDriverLicenseConfidence {
    private 'card_number'?: number | undefined;
    private 'card_number_en'?: number | undefined;
    public name?: number;
    private 'name_en'?: number | undefined;
    private 'nrc_id'?: number | undefined;
    private 'nrc_id_en'?: number | undefined;
    public birth?: number;
    private 'birth_en'?: number | undefined;
    private 'blood_group'?: number | undefined;
    private 'blood_group_en'?: number | undefined;
    private 'expiried_date'?: number | undefined;
    private 'expiried_date_en'?: number | undefined;
    public constructor() { 
    }
    public withCardNumber(cardNumber: number): MyanmarDriverLicenseConfidence {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: number | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber() {
        return this['card_number'];
    }
    public withCardNumberEn(cardNumberEn: number): MyanmarDriverLicenseConfidence {
        this['card_number_en'] = cardNumberEn;
        return this;
    }
    public set cardNumberEn(cardNumberEn: number | undefined) {
        this['card_number_en'] = cardNumberEn;
    }
    public get cardNumberEn() {
        return this['card_number_en'];
    }
    public withName(name: number): MyanmarDriverLicenseConfidence {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: number): MyanmarDriverLicenseConfidence {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: number | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withNrcId(nrcId: number): MyanmarDriverLicenseConfidence {
        this['nrc_id'] = nrcId;
        return this;
    }
    public set nrcId(nrcId: number | undefined) {
        this['nrc_id'] = nrcId;
    }
    public get nrcId() {
        return this['nrc_id'];
    }
    public withNrcIdEn(nrcIdEn: number): MyanmarDriverLicenseConfidence {
        this['nrc_id_en'] = nrcIdEn;
        return this;
    }
    public set nrcIdEn(nrcIdEn: number | undefined) {
        this['nrc_id_en'] = nrcIdEn;
    }
    public get nrcIdEn() {
        return this['nrc_id_en'];
    }
    public withBirth(birth: number): MyanmarDriverLicenseConfidence {
        this['birth'] = birth;
        return this;
    }
    public withBirthEn(birthEn: number): MyanmarDriverLicenseConfidence {
        this['birth_en'] = birthEn;
        return this;
    }
    public set birthEn(birthEn: number | undefined) {
        this['birth_en'] = birthEn;
    }
    public get birthEn() {
        return this['birth_en'];
    }
    public withBloodGroup(bloodGroup: number): MyanmarDriverLicenseConfidence {
        this['blood_group'] = bloodGroup;
        return this;
    }
    public set bloodGroup(bloodGroup: number | undefined) {
        this['blood_group'] = bloodGroup;
    }
    public get bloodGroup() {
        return this['blood_group'];
    }
    public withBloodGroupEn(bloodGroupEn: number): MyanmarDriverLicenseConfidence {
        this['blood_group_en'] = bloodGroupEn;
        return this;
    }
    public set bloodGroupEn(bloodGroupEn: number | undefined) {
        this['blood_group_en'] = bloodGroupEn;
    }
    public get bloodGroupEn() {
        return this['blood_group_en'];
    }
    public withExpiriedDate(expiriedDate: number): MyanmarDriverLicenseConfidence {
        this['expiried_date'] = expiriedDate;
        return this;
    }
    public set expiriedDate(expiriedDate: number | undefined) {
        this['expiried_date'] = expiriedDate;
    }
    public get expiriedDate() {
        return this['expiried_date'];
    }
    public withExpiriedDateEn(expiriedDateEn: number): MyanmarDriverLicenseConfidence {
        this['expiried_date_en'] = expiriedDateEn;
        return this;
    }
    public set expiriedDateEn(expiriedDateEn: number | undefined) {
        this['expiried_date_en'] = expiriedDateEn;
    }
    public get expiriedDateEn() {
        return this['expiried_date_en'];
    }
}