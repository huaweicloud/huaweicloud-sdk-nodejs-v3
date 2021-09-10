

export class PassportResult {
    private 'passport_type'?: string | undefined;
    private 'country_code'?: string | undefined;
    private 'passport_number'?: string | undefined;
    public nationality?: string;
    public surname?: string;
    private 'given_name'?: string | undefined;
    public sex?: string;
    private 'date_of_birth'?: string | undefined;
    private 'date_of_expiry'?: string | undefined;
    private 'date_of_issue'?: string | undefined;
    private 'place_of_birth'?: string | undefined;
    private 'place_of_issue'?: string | undefined;
    private 'issuing_authority'?: string | undefined;
    public confidence?: object;
    private 'extra_info'?: object | undefined;
    public constructor() { 
    }
    public withPassportType(passportType: string): PassportResult {
        this['passport_type'] = passportType;
        return this;
    }
    public set passportType(passportType: string | undefined) {
        this['passport_type'] = passportType;
    }
    public get passportType() {
        return this['passport_type'];
    }
    public withCountryCode(countryCode: string): PassportResult {
        this['country_code'] = countryCode;
        return this;
    }
    public set countryCode(countryCode: string | undefined) {
        this['country_code'] = countryCode;
    }
    public get countryCode() {
        return this['country_code'];
    }
    public withPassportNumber(passportNumber: string): PassportResult {
        this['passport_number'] = passportNumber;
        return this;
    }
    public set passportNumber(passportNumber: string | undefined) {
        this['passport_number'] = passportNumber;
    }
    public get passportNumber() {
        return this['passport_number'];
    }
    public withNationality(nationality: string): PassportResult {
        this['nationality'] = nationality;
        return this;
    }
    public withSurname(surname: string): PassportResult {
        this['surname'] = surname;
        return this;
    }
    public withGivenName(givenName: string): PassportResult {
        this['given_name'] = givenName;
        return this;
    }
    public set givenName(givenName: string | undefined) {
        this['given_name'] = givenName;
    }
    public get givenName() {
        return this['given_name'];
    }
    public withSex(sex: string): PassportResult {
        this['sex'] = sex;
        return this;
    }
    public withDateOfBirth(dateOfBirth: string): PassportResult {
        this['date_of_birth'] = dateOfBirth;
        return this;
    }
    public set dateOfBirth(dateOfBirth: string | undefined) {
        this['date_of_birth'] = dateOfBirth;
    }
    public get dateOfBirth() {
        return this['date_of_birth'];
    }
    public withDateOfExpiry(dateOfExpiry: string): PassportResult {
        this['date_of_expiry'] = dateOfExpiry;
        return this;
    }
    public set dateOfExpiry(dateOfExpiry: string | undefined) {
        this['date_of_expiry'] = dateOfExpiry;
    }
    public get dateOfExpiry() {
        return this['date_of_expiry'];
    }
    public withDateOfIssue(dateOfIssue: string): PassportResult {
        this['date_of_issue'] = dateOfIssue;
        return this;
    }
    public set dateOfIssue(dateOfIssue: string | undefined) {
        this['date_of_issue'] = dateOfIssue;
    }
    public get dateOfIssue() {
        return this['date_of_issue'];
    }
    public withPlaceOfBirth(placeOfBirth: string): PassportResult {
        this['place_of_birth'] = placeOfBirth;
        return this;
    }
    public set placeOfBirth(placeOfBirth: string | undefined) {
        this['place_of_birth'] = placeOfBirth;
    }
    public get placeOfBirth() {
        return this['place_of_birth'];
    }
    public withPlaceOfIssue(placeOfIssue: string): PassportResult {
        this['place_of_issue'] = placeOfIssue;
        return this;
    }
    public set placeOfIssue(placeOfIssue: string | undefined) {
        this['place_of_issue'] = placeOfIssue;
    }
    public get placeOfIssue() {
        return this['place_of_issue'];
    }
    public withIssuingAuthority(issuingAuthority: string): PassportResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withConfidence(confidence: object): PassportResult {
        this['confidence'] = confidence;
        return this;
    }
    public withExtraInfo(extraInfo: object): PassportResult {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: object | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo() {
        return this['extra_info'];
    }
}