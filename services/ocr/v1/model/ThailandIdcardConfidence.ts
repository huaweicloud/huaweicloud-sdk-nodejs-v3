

export class ThailandIdcardConfidence {
    private 'id_number'?: number;
    private 'name_th'?: number;
    private 'name_en'?: number;
    private 'ref_number'?: number;
    private 'first_name_en'?: number;
    private 'last_name_en'?: number;
    private 'date_of_birth_th'?: number;
    private 'date_of_birth_en'?: number;
    private 'religion_th'?: number;
    private 'address_th'?: number;
    private 'date_of_issue_th'?: number;
    private 'date_of_issue_en'?: number;
    private 'date_of_expiry_th'?: number;
    private 'date_of_expiry_en'?: number;
    private 'serial_number'?: number;
    private 'card_number'?: number;
    private 'laser_number'?: number;
    public constructor() { 
    }
    public withIdNumber(idNumber: number): ThailandIdcardConfidence {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: number  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): number | undefined {
        return this['id_number'];
    }
    public withNameTh(nameTh: number): ThailandIdcardConfidence {
        this['name_th'] = nameTh;
        return this;
    }
    public set nameTh(nameTh: number  | undefined) {
        this['name_th'] = nameTh;
    }
    public get nameTh(): number | undefined {
        return this['name_th'];
    }
    public withNameEn(nameEn: number): ThailandIdcardConfidence {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: number  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): number | undefined {
        return this['name_en'];
    }
    public withRefNumber(refNumber: number): ThailandIdcardConfidence {
        this['ref_number'] = refNumber;
        return this;
    }
    public set refNumber(refNumber: number  | undefined) {
        this['ref_number'] = refNumber;
    }
    public get refNumber(): number | undefined {
        return this['ref_number'];
    }
    public withFirstNameEn(firstNameEn: number): ThailandIdcardConfidence {
        this['first_name_en'] = firstNameEn;
        return this;
    }
    public set firstNameEn(firstNameEn: number  | undefined) {
        this['first_name_en'] = firstNameEn;
    }
    public get firstNameEn(): number | undefined {
        return this['first_name_en'];
    }
    public withLastNameEn(lastNameEn: number): ThailandIdcardConfidence {
        this['last_name_en'] = lastNameEn;
        return this;
    }
    public set lastNameEn(lastNameEn: number  | undefined) {
        this['last_name_en'] = lastNameEn;
    }
    public get lastNameEn(): number | undefined {
        return this['last_name_en'];
    }
    public withDateOfBirthTh(dateOfBirthTh: number): ThailandIdcardConfidence {
        this['date_of_birth_th'] = dateOfBirthTh;
        return this;
    }
    public set dateOfBirthTh(dateOfBirthTh: number  | undefined) {
        this['date_of_birth_th'] = dateOfBirthTh;
    }
    public get dateOfBirthTh(): number | undefined {
        return this['date_of_birth_th'];
    }
    public withDateOfBirthEn(dateOfBirthEn: number): ThailandIdcardConfidence {
        this['date_of_birth_en'] = dateOfBirthEn;
        return this;
    }
    public set dateOfBirthEn(dateOfBirthEn: number  | undefined) {
        this['date_of_birth_en'] = dateOfBirthEn;
    }
    public get dateOfBirthEn(): number | undefined {
        return this['date_of_birth_en'];
    }
    public withReligionTh(religionTh: number): ThailandIdcardConfidence {
        this['religion_th'] = religionTh;
        return this;
    }
    public set religionTh(religionTh: number  | undefined) {
        this['religion_th'] = religionTh;
    }
    public get religionTh(): number | undefined {
        return this['religion_th'];
    }
    public withAddressTh(addressTh: number): ThailandIdcardConfidence {
        this['address_th'] = addressTh;
        return this;
    }
    public set addressTh(addressTh: number  | undefined) {
        this['address_th'] = addressTh;
    }
    public get addressTh(): number | undefined {
        return this['address_th'];
    }
    public withDateOfIssueTh(dateOfIssueTh: number): ThailandIdcardConfidence {
        this['date_of_issue_th'] = dateOfIssueTh;
        return this;
    }
    public set dateOfIssueTh(dateOfIssueTh: number  | undefined) {
        this['date_of_issue_th'] = dateOfIssueTh;
    }
    public get dateOfIssueTh(): number | undefined {
        return this['date_of_issue_th'];
    }
    public withDateOfIssueEn(dateOfIssueEn: number): ThailandIdcardConfidence {
        this['date_of_issue_en'] = dateOfIssueEn;
        return this;
    }
    public set dateOfIssueEn(dateOfIssueEn: number  | undefined) {
        this['date_of_issue_en'] = dateOfIssueEn;
    }
    public get dateOfIssueEn(): number | undefined {
        return this['date_of_issue_en'];
    }
    public withDateOfExpiryTh(dateOfExpiryTh: number): ThailandIdcardConfidence {
        this['date_of_expiry_th'] = dateOfExpiryTh;
        return this;
    }
    public set dateOfExpiryTh(dateOfExpiryTh: number  | undefined) {
        this['date_of_expiry_th'] = dateOfExpiryTh;
    }
    public get dateOfExpiryTh(): number | undefined {
        return this['date_of_expiry_th'];
    }
    public withDateOfExpiryEn(dateOfExpiryEn: number): ThailandIdcardConfidence {
        this['date_of_expiry_en'] = dateOfExpiryEn;
        return this;
    }
    public set dateOfExpiryEn(dateOfExpiryEn: number  | undefined) {
        this['date_of_expiry_en'] = dateOfExpiryEn;
    }
    public get dateOfExpiryEn(): number | undefined {
        return this['date_of_expiry_en'];
    }
    public withSerialNumber(serialNumber: number): ThailandIdcardConfidence {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: number  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): number | undefined {
        return this['serial_number'];
    }
    public withCardNumber(cardNumber: number): ThailandIdcardConfidence {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: number  | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber(): number | undefined {
        return this['card_number'];
    }
    public withLaserNumber(laserNumber: number): ThailandIdcardConfidence {
        this['laser_number'] = laserNumber;
        return this;
    }
    public set laserNumber(laserNumber: number  | undefined) {
        this['laser_number'] = laserNumber;
    }
    public get laserNumber(): number | undefined {
        return this['laser_number'];
    }
}