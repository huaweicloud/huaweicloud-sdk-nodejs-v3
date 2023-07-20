

export class MyanmarDriverLicenseConfidence {
    private 'card_number'?: number;
    private 'card_number_en'?: number;
    public name?: number;
    private 'name_en'?: number;
    private 'nrc_id'?: number;
    private 'nrc_id_en'?: number;
    public birth?: number;
    private 'birth_en'?: number;
    private 'blood_group'?: number;
    private 'blood_group_en'?: number;
    private 'expiried_date'?: number;
    private 'expiried_date_en'?: number;
    public constructor() { 
    }
    public withCardNumber(cardNumber: number): MyanmarDriverLicenseConfidence {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: number  | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber(): number | undefined {
        return this['card_number'];
    }
    public withCardNumberEn(cardNumberEn: number): MyanmarDriverLicenseConfidence {
        this['card_number_en'] = cardNumberEn;
        return this;
    }
    public set cardNumberEn(cardNumberEn: number  | undefined) {
        this['card_number_en'] = cardNumberEn;
    }
    public get cardNumberEn(): number | undefined {
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
    public set nameEn(nameEn: number  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): number | undefined {
        return this['name_en'];
    }
    public withNrcId(nrcId: number): MyanmarDriverLicenseConfidence {
        this['nrc_id'] = nrcId;
        return this;
    }
    public set nrcId(nrcId: number  | undefined) {
        this['nrc_id'] = nrcId;
    }
    public get nrcId(): number | undefined {
        return this['nrc_id'];
    }
    public withNrcIdEn(nrcIdEn: number): MyanmarDriverLicenseConfidence {
        this['nrc_id_en'] = nrcIdEn;
        return this;
    }
    public set nrcIdEn(nrcIdEn: number  | undefined) {
        this['nrc_id_en'] = nrcIdEn;
    }
    public get nrcIdEn(): number | undefined {
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
    public set birthEn(birthEn: number  | undefined) {
        this['birth_en'] = birthEn;
    }
    public get birthEn(): number | undefined {
        return this['birth_en'];
    }
    public withBloodGroup(bloodGroup: number): MyanmarDriverLicenseConfidence {
        this['blood_group'] = bloodGroup;
        return this;
    }
    public set bloodGroup(bloodGroup: number  | undefined) {
        this['blood_group'] = bloodGroup;
    }
    public get bloodGroup(): number | undefined {
        return this['blood_group'];
    }
    public withBloodGroupEn(bloodGroupEn: number): MyanmarDriverLicenseConfidence {
        this['blood_group_en'] = bloodGroupEn;
        return this;
    }
    public set bloodGroupEn(bloodGroupEn: number  | undefined) {
        this['blood_group_en'] = bloodGroupEn;
    }
    public get bloodGroupEn(): number | undefined {
        return this['blood_group_en'];
    }
    public withExpiriedDate(expiriedDate: number): MyanmarDriverLicenseConfidence {
        this['expiried_date'] = expiriedDate;
        return this;
    }
    public set expiriedDate(expiriedDate: number  | undefined) {
        this['expiried_date'] = expiriedDate;
    }
    public get expiriedDate(): number | undefined {
        return this['expiried_date'];
    }
    public withExpiriedDateEn(expiriedDateEn: number): MyanmarDriverLicenseConfidence {
        this['expiried_date_en'] = expiriedDateEn;
        return this;
    }
    public set expiriedDateEn(expiriedDateEn: number  | undefined) {
        this['expiried_date_en'] = expiriedDateEn;
    }
    public get expiriedDateEn(): number | undefined {
        return this['expiried_date_en'];
    }
}