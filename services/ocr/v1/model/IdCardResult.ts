import { IdcardVerificationResult } from './IdcardVerificationResult';


export class IdCardResult {
    public name?: string;
    public sex?: string;
    public birth?: string;
    public ethnicity?: string;
    public address?: string;
    private 'number'?: string;
    public issue?: string;
    private 'valid_from'?: string;
    private 'valid_to'?: string;
    private 'verification_result'?: IdcardVerificationResult;
    private 'text_location'?: object;
    private 'detect_reproduce_result'?: boolean;
    private 'detect_copy_result'?: boolean;
    private 'portrait_location'?: Array<Array<number>>;
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
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
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
    public set validFrom(validFrom: string  | undefined) {
        this['valid_from'] = validFrom;
    }
    public get validFrom(): string | undefined {
        return this['valid_from'];
    }
    public withValidTo(validTo: string): IdCardResult {
        this['valid_to'] = validTo;
        return this;
    }
    public set validTo(validTo: string  | undefined) {
        this['valid_to'] = validTo;
    }
    public get validTo(): string | undefined {
        return this['valid_to'];
    }
    public withVerificationResult(verificationResult: IdcardVerificationResult): IdCardResult {
        this['verification_result'] = verificationResult;
        return this;
    }
    public set verificationResult(verificationResult: IdcardVerificationResult  | undefined) {
        this['verification_result'] = verificationResult;
    }
    public get verificationResult(): IdcardVerificationResult | undefined {
        return this['verification_result'];
    }
    public withTextLocation(textLocation: object): IdCardResult {
        this['text_location'] = textLocation;
        return this;
    }
    public set textLocation(textLocation: object  | undefined) {
        this['text_location'] = textLocation;
    }
    public get textLocation(): object | undefined {
        return this['text_location'];
    }
    public withDetectReproduceResult(detectReproduceResult: boolean): IdCardResult {
        this['detect_reproduce_result'] = detectReproduceResult;
        return this;
    }
    public set detectReproduceResult(detectReproduceResult: boolean  | undefined) {
        this['detect_reproduce_result'] = detectReproduceResult;
    }
    public get detectReproduceResult(): boolean | undefined {
        return this['detect_reproduce_result'];
    }
    public withDetectCopyResult(detectCopyResult: boolean): IdCardResult {
        this['detect_copy_result'] = detectCopyResult;
        return this;
    }
    public set detectCopyResult(detectCopyResult: boolean  | undefined) {
        this['detect_copy_result'] = detectCopyResult;
    }
    public get detectCopyResult(): boolean | undefined {
        return this['detect_copy_result'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): IdCardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
}