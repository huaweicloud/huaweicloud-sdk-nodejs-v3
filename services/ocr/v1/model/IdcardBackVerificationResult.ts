

export class IdcardBackVerificationResult {
    private 'valid_date'?: boolean;
    private 'valid_validity_period'?: boolean;
    public constructor() { 
    }
    public withValidDate(validDate: boolean): IdcardBackVerificationResult {
        this['valid_date'] = validDate;
        return this;
    }
    public set validDate(validDate: boolean  | undefined) {
        this['valid_date'] = validDate;
    }
    public get validDate(): boolean | undefined {
        return this['valid_date'];
    }
    public withValidValidityPeriod(validValidityPeriod: boolean): IdcardBackVerificationResult {
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