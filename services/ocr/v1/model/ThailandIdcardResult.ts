import { ThailandIdcardConfidence } from './ThailandIdcardConfidence';


export class ThailandIdcardResult {
    public type?: string;
    private 'name_en'?: string;
    private 'ref_number'?: string;
    public side?: string;
    private 'id_number'?: string;
    private 'name_th'?: string;
    private 'first_name_en'?: string;
    private 'last_name_en'?: string;
    private 'date_of_birth_th'?: string;
    private 'date_of_birth_en'?: string;
    private 'religion_th'?: string;
    private 'address_th'?: string;
    private 'date_of_issue_th'?: string;
    private 'date_of_issue_en'?: string;
    private 'date_of_expiry_th'?: string;
    private 'date_of_expiry_en'?: string;
    private 'serial_number'?: string;
    private 'card_number'?: string;
    private 'laser_number'?: string;
    public confidence?: ThailandIdcardConfidence;
    private 'portrait_image'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    private 'idcard_type'?: string;
    private 'text_location'?: object;
    public constructor() { 
    }
    public withType(type: string): ThailandIdcardResult {
        this['type'] = type;
        return this;
    }
    public withNameEn(nameEn: string): ThailandIdcardResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withRefNumber(refNumber: string): ThailandIdcardResult {
        this['ref_number'] = refNumber;
        return this;
    }
    public set refNumber(refNumber: string  | undefined) {
        this['ref_number'] = refNumber;
    }
    public get refNumber(): string | undefined {
        return this['ref_number'];
    }
    public withSide(side: string): ThailandIdcardResult {
        this['side'] = side;
        return this;
    }
    public withIdNumber(idNumber: string): ThailandIdcardResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
        return this['id_number'];
    }
    public withNameTh(nameTh: string): ThailandIdcardResult {
        this['name_th'] = nameTh;
        return this;
    }
    public set nameTh(nameTh: string  | undefined) {
        this['name_th'] = nameTh;
    }
    public get nameTh(): string | undefined {
        return this['name_th'];
    }
    public withFirstNameEn(firstNameEn: string): ThailandIdcardResult {
        this['first_name_en'] = firstNameEn;
        return this;
    }
    public set firstNameEn(firstNameEn: string  | undefined) {
        this['first_name_en'] = firstNameEn;
    }
    public get firstNameEn(): string | undefined {
        return this['first_name_en'];
    }
    public withLastNameEn(lastNameEn: string): ThailandIdcardResult {
        this['last_name_en'] = lastNameEn;
        return this;
    }
    public set lastNameEn(lastNameEn: string  | undefined) {
        this['last_name_en'] = lastNameEn;
    }
    public get lastNameEn(): string | undefined {
        return this['last_name_en'];
    }
    public withDateOfBirthTh(dateOfBirthTh: string): ThailandIdcardResult {
        this['date_of_birth_th'] = dateOfBirthTh;
        return this;
    }
    public set dateOfBirthTh(dateOfBirthTh: string  | undefined) {
        this['date_of_birth_th'] = dateOfBirthTh;
    }
    public get dateOfBirthTh(): string | undefined {
        return this['date_of_birth_th'];
    }
    public withDateOfBirthEn(dateOfBirthEn: string): ThailandIdcardResult {
        this['date_of_birth_en'] = dateOfBirthEn;
        return this;
    }
    public set dateOfBirthEn(dateOfBirthEn: string  | undefined) {
        this['date_of_birth_en'] = dateOfBirthEn;
    }
    public get dateOfBirthEn(): string | undefined {
        return this['date_of_birth_en'];
    }
    public withReligionTh(religionTh: string): ThailandIdcardResult {
        this['religion_th'] = religionTh;
        return this;
    }
    public set religionTh(religionTh: string  | undefined) {
        this['religion_th'] = religionTh;
    }
    public get religionTh(): string | undefined {
        return this['religion_th'];
    }
    public withAddressTh(addressTh: string): ThailandIdcardResult {
        this['address_th'] = addressTh;
        return this;
    }
    public set addressTh(addressTh: string  | undefined) {
        this['address_th'] = addressTh;
    }
    public get addressTh(): string | undefined {
        return this['address_th'];
    }
    public withDateOfIssueTh(dateOfIssueTh: string): ThailandIdcardResult {
        this['date_of_issue_th'] = dateOfIssueTh;
        return this;
    }
    public set dateOfIssueTh(dateOfIssueTh: string  | undefined) {
        this['date_of_issue_th'] = dateOfIssueTh;
    }
    public get dateOfIssueTh(): string | undefined {
        return this['date_of_issue_th'];
    }
    public withDateOfIssueEn(dateOfIssueEn: string): ThailandIdcardResult {
        this['date_of_issue_en'] = dateOfIssueEn;
        return this;
    }
    public set dateOfIssueEn(dateOfIssueEn: string  | undefined) {
        this['date_of_issue_en'] = dateOfIssueEn;
    }
    public get dateOfIssueEn(): string | undefined {
        return this['date_of_issue_en'];
    }
    public withDateOfExpiryTh(dateOfExpiryTh: string): ThailandIdcardResult {
        this['date_of_expiry_th'] = dateOfExpiryTh;
        return this;
    }
    public set dateOfExpiryTh(dateOfExpiryTh: string  | undefined) {
        this['date_of_expiry_th'] = dateOfExpiryTh;
    }
    public get dateOfExpiryTh(): string | undefined {
        return this['date_of_expiry_th'];
    }
    public withDateOfExpiryEn(dateOfExpiryEn: string): ThailandIdcardResult {
        this['date_of_expiry_en'] = dateOfExpiryEn;
        return this;
    }
    public set dateOfExpiryEn(dateOfExpiryEn: string  | undefined) {
        this['date_of_expiry_en'] = dateOfExpiryEn;
    }
    public get dateOfExpiryEn(): string | undefined {
        return this['date_of_expiry_en'];
    }
    public withSerialNumber(serialNumber: string): ThailandIdcardResult {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withCardNumber(cardNumber: string): ThailandIdcardResult {
        this['card_number'] = cardNumber;
        return this;
    }
    public set cardNumber(cardNumber: string  | undefined) {
        this['card_number'] = cardNumber;
    }
    public get cardNumber(): string | undefined {
        return this['card_number'];
    }
    public withLaserNumber(laserNumber: string): ThailandIdcardResult {
        this['laser_number'] = laserNumber;
        return this;
    }
    public set laserNumber(laserNumber: string  | undefined) {
        this['laser_number'] = laserNumber;
    }
    public get laserNumber(): string | undefined {
        return this['laser_number'];
    }
    public withConfidence(confidence: ThailandIdcardConfidence): ThailandIdcardResult {
        this['confidence'] = confidence;
        return this;
    }
    public withPortraitImage(portraitImage: string): ThailandIdcardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): ThailandIdcardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withIdcardType(idcardType: string): ThailandIdcardResult {
        this['idcard_type'] = idcardType;
        return this;
    }
    public set idcardType(idcardType: string  | undefined) {
        this['idcard_type'] = idcardType;
    }
    public get idcardType(): string | undefined {
        return this['idcard_type'];
    }
    public withTextLocation(textLocation: object): ThailandIdcardResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
}