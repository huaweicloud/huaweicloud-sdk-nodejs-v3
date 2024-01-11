

export class IdcardFrontVerificationResult {
    private 'valid_number'?: boolean;
    private 'valid_birth'?: boolean;
    private 'valid_sex'?: boolean;
    public constructor() { 
    }
    public withValidNumber(validNumber: boolean): IdcardFrontVerificationResult {
        this['valid_number'] = validNumber;
        return this;
    }
    public set validNumber(validNumber: boolean  | undefined) {
        this['valid_number'] = validNumber;
    }
    public get validNumber(): boolean | undefined {
        return this['valid_number'];
    }
    public withValidBirth(validBirth: boolean): IdcardFrontVerificationResult {
        this['valid_birth'] = validBirth;
        return this;
    }
    public set validBirth(validBirth: boolean  | undefined) {
        this['valid_birth'] = validBirth;
    }
    public get validBirth(): boolean | undefined {
        return this['valid_birth'];
    }
    public withValidSex(validSex: boolean): IdcardFrontVerificationResult {
        this['valid_sex'] = validSex;
        return this;
    }
    public set validSex(validSex: boolean  | undefined) {
        this['valid_sex'] = validSex;
    }
    public get validSex(): boolean | undefined {
        return this['valid_sex'];
    }
}