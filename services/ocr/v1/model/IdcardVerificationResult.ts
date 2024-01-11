

export class IdcardVerificationResult {
    private 'valid_number'?: boolean;
    private 'valid_birth'?: boolean;
    private 'valid_sex'?: boolean;
    private 'valid_date'?: boolean;
    private 'valid_validity_period'?: boolean;
    public constructor() { 
    }
    public withValidNumber(validNumber: boolean): IdcardVerificationResult {
        this['valid_number'] = validNumber;
        return this;
    }
    public set validNumber(validNumber: boolean  | undefined) {
        this['valid_number'] = validNumber;
    }
    public get validNumber(): boolean | undefined {
        return this['valid_number'];
    }
    public withValidBirth(validBirth: boolean): IdcardVerificationResult {
        this['valid_birth'] = validBirth;
        return this;
    }
    public set validBirth(validBirth: boolean  | undefined) {
        this['valid_birth'] = validBirth;
    }
    public get validBirth(): boolean | undefined {
        return this['valid_birth'];
    }
    public withValidSex(validSex: boolean): IdcardVerificationResult {
        this['valid_sex'] = validSex;
        return this;
    }
    public set validSex(validSex: boolean  | undefined) {
        this['valid_sex'] = validSex;
    }
    public get validSex(): boolean | undefined {
        return this['valid_sex'];
    }
    public withValidDate(validDate: boolean): IdcardVerificationResult {
        this['valid_date'] = validDate;
        return this;
    }
    public set validDate(validDate: boolean  | undefined) {
        this['valid_date'] = validDate;
    }
    public get validDate(): boolean | undefined {
        return this['valid_date'];
    }
    public withValidValidityPeriod(validValidityPeriod: boolean): IdcardVerificationResult {
        this['valid_validity_period'] = validValidityPeriod;
        return this;
    }
    public set validValidityPeriod(validValidityPeriod: boolean  | undefined) {
        this['valid_validity_period'] = validValidityPeriod;
    }
    public get validValidityPeriod(): boolean | undefined {
        return this['valid_validity_period'];
    }
}