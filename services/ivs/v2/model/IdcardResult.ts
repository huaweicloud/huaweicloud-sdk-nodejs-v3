

export class IdcardResult {
    public name: string;
    private 'number': string | undefined;
    public sex: string;
    public birth: string;
    public ethnicity: string;
    public address: string;
    public issue?: string;
    private 'valid_from'?: string | undefined;
    private 'valid_to'?: string | undefined;
    public constructor(name?: any, modelNumber?: any, sex?: any, birth?: any, ethnicity?: any, address?: any) { 
        this['name'] = name;
        this['number'] = modelNumber;
        this['sex'] = sex;
        this['birth'] = birth;
        this['ethnicity'] = ethnicity;
        this['address'] = address;
    }
    public withName(name: string): IdcardResult {
        this['name'] = name;
        return this;
    }
    public withModelNumber(modelNumber: string): IdcardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withSex(sex: string): IdcardResult {
        this['sex'] = sex;
        return this;
    }
    public withBirth(birth: string): IdcardResult {
        this['birth'] = birth;
        return this;
    }
    public withEthnicity(ethnicity: string): IdcardResult {
        this['ethnicity'] = ethnicity;
        return this;
    }
    public withAddress(address: string): IdcardResult {
        this['address'] = address;
        return this;
    }
    public withIssue(issue: string): IdcardResult {
        this['issue'] = issue;
        return this;
    }
    public withValidFrom(validFrom: string): IdcardResult {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom() {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): IdcardResult {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo() {
        return this['valid_to'];
    }
}