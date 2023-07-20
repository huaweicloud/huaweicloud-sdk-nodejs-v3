

export class ChileIdCardConfidence {
    public surname?: number;
    private 'given_name'?: number;
    public nationality?: number;
    public sex?: number;
    public birth?: number;
    private 'issue_date'?: number;
    private 'expiry_date'?: number;
    private 'document_number'?: number;
    private 'number'?: number;
    public constructor() { 
    }
    public withSurname(surname: number): ChileIdCardConfidence {
        this['surname'] = surname;
        return this;
    }
    public withGivenName(givenName: number): ChileIdCardConfidence {
        this['given_name'] = givenName;
        return this;
    }
    public set givenName(givenName: number  | undefined) {
        this['given_name'] = givenName;
    }
    public get givenName(): number | undefined {
        return this['given_name'];
    }
    public withNationality(nationality: number): ChileIdCardConfidence {
        this['nationality'] = nationality;
        return this;
    }
    public withSex(sex: number): ChileIdCardConfidence {
        this['sex'] = sex;
        return this;
    }
    public withBirth(birth: number): ChileIdCardConfidence {
        this['birth'] = birth;
        return this;
    }
    public withIssueDate(issueDate: number): ChileIdCardConfidence {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: number  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): number | undefined {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: number): ChileIdCardConfidence {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: number  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): number | undefined {
        return this['expiry_date'];
    }
    public withDocumentNumber(documentNumber: number): ChileIdCardConfidence {
        this['document_number'] = documentNumber;
        return this;
    }
    public set documentNumber(documentNumber: number  | undefined) {
        this['document_number'] = documentNumber;
    }
    public get documentNumber(): number | undefined {
        return this['document_number'];
    }
    public withModelNumber(modelNumber: number): ChileIdCardConfidence {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
}