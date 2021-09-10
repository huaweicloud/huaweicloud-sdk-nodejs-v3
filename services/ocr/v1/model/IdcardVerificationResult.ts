

export class IdcardVerificationResult {
    private 'valid_number'?: boolean | undefined;
    private 'valid_birth'?: boolean | undefined;
    private 'valid_sex'?: boolean | undefined;
    private 'valid_date'?: boolean | undefined;
    public constructor() { 
    }
    public withValidNumber(validNumber: boolean): IdcardVerificationResult {
        this['valid_number'] = validNumber;
        return this;
    }
    public set validNumber(validNumber: boolean | undefined) {
        this['valid_number'] = validNumber;
    }
    public get validNumber() {
        return this['valid_number'];
    }
    public withValidBirth(validBirth: boolean): IdcardVerificationResult {
        this['valid_birth'] = validBirth;
        return this;
    }
    public set validBirth(validBirth: boolean | undefined) {
        this['valid_birth'] = validBirth;
    }
    public get validBirth() {
        return this['valid_birth'];
    }
    public withValidSex(validSex: boolean): IdcardVerificationResult {
        this['valid_sex'] = validSex;
        return this;
    }
    public set validSex(validSex: boolean | undefined) {
        this['valid_sex'] = validSex;
    }
    public get validSex() {
        return this['valid_sex'];
    }
    public withValidDate(validDate: boolean): IdcardVerificationResult {
        this['valid_date'] = validDate;
        return this;
    }
    public set validDate(validDate: boolean | undefined) {
        this['valid_date'] = validDate;
    }
    public get validDate() {
        return this['valid_date'];
    }
}