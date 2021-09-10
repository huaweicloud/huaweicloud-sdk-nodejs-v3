import { IdcardVerificationResult } from './IdcardVerificationResult';


export class IdCardResult {
    public name?: string;
    public sex?: string;
    public birth?: string;
    public ethnicity?: string;
    public address?: string;
    private 'number'?: string | undefined;
    public issue?: string;
    private 'valid_from'?: string | undefined;
    private 'valid_to'?: string | undefined;
    private 'verification_result'?: IdcardVerificationResult | undefined;
    public constructor() { 
    }
    public withName(name: string): IdCardResult {
        this['name'] = name;
        return this;
    }
    public withSex(sex: string): IdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withBirth(birth: string): IdCardResult {
        this['birth'] = birth;
        return this;
    }
    public withEthnicity(ethnicity: string): IdCardResult {
        this['ethnicity'] = ethnicity;
        return this;
    }
    public withAddress(address: string): IdCardResult {
        this['address'] = address;
        return this;
    }
    public withModelNumber(modelNumber: string): IdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withIssue(issue: string): IdCardResult {
        this['issue'] = issue;
        return this;
    }
    public withValidFrom(validFrom: string): IdCardResult {
        this['valid_from'] = validFrom;
        return this;
    }
    public set validFrom(validFrom: string | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom() {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): IdCardResult {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo() {
        return this['valid_to'];
    }
    public withVerificationResult(verificationResult: IdcardVerificationResult): IdCardResult {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: IdcardVerificationResult | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult() {
        return this['verification_result'];
    }
}