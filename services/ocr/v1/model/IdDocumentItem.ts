

export class IdDocumentItem {
    private 'country_region'?: string;
    private 'id_type'?: string;
    public side?: string;
    private 'first_name'?: string;
    private 'last_name'?: string;
    public sex?: string;
    public nationality?: string;
    private 'birth_date'?: string;
    private 'issue_date'?: string;
    private 'expiry_date'?: string;
    private 'document_number'?: string;
    public address?: string;
    private 'issuing_authority'?: string;
    private 'portrait_image'?: string;
    public confidence?: object;
    public constructor() { 
    }
    public withCountryRegion(countryRegion: string): IdDocumentItem {
        this['country_region'] = countryRegion;
        return this;
    }
    public set countryRegion(countryRegion: string  | undefined) {
        this['country_region'] = countryRegion;
    }
    public get countryRegion(): string | undefined {
        return this['country_region'];
    }
    public withIdType(idType: string): IdDocumentItem {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: string  | undefined) {
        this['id_type'] = idType;
    }
    public get idType(): string | undefined {
        return this['id_type'];
    }
    public withSide(side: string): IdDocumentItem {
        this['side'] = side;
        return this;
    }
    public withFirstName(firstName: string): IdDocumentItem {
        this['first_name'] = firstName;
        return this;
    }
    public set firstName(firstName: string  | undefined) {
        this['first_name'] = firstName;
    }
    public get firstName(): string | undefined {
        return this['first_name'];
    }
    public withLastName(lastName: string): IdDocumentItem {
        this['last_name'] = lastName;
        return this;
    }
    public set lastName(lastName: string  | undefined) {
        this['last_name'] = lastName;
    }
    public get lastName(): string | undefined {
        return this['last_name'];
    }
    public withSex(sex: string): IdDocumentItem {
        this['sex'] = sex;
        return this;
    }
    public withNationality(nationality: string): IdDocumentItem {
        this['nationality'] = nationality;
        return this;
    }
    public withBirthDate(birthDate: string): IdDocumentItem {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withIssueDate(issueDate: string): IdDocumentItem {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): IdDocumentItem {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withDocumentNumber(documentNumber: string): IdDocumentItem {
        this['document_number'] = documentNumber;
        return this;
    }
    public set documentNumber(documentNumber: string  | undefined) {
        this['document_number'] = documentNumber;
    }
    public get documentNumber(): string | undefined {
        return this['document_number'];
    }
    public withAddress(address: string): IdDocumentItem {
        this['address'] = address;
        return this;
    }
    public withIssuingAuthority(issuingAuthority: string): IdDocumentItem {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withPortraitImage(portraitImage: string): IdDocumentItem {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withConfidence(confidence: object): IdDocumentItem {
        this['confidence'] = confidence;
        return this;
    }
}