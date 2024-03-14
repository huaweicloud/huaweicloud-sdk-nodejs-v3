

export class UpdateActiveCodeReq {
    private 'valid_period'?: number;
    public constructor() { 
    }
    public withValidPeriod(validPeriod: number): UpdateActiveCodeReq {
        this['valid_period'] = validPeriod;
        return this;
    }
    public set validPeriod(validPeriod: number  | undefined) {
        this['valid_period'] = validPeriod;
    }
    public get validPeriod(): number | undefined {
        return this['valid_period'];
    }
}