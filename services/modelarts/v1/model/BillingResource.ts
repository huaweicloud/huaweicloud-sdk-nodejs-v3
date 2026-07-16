

export class BillingResource {
    public code?: string;
    private 'unit_num'?: number;
    public constructor() { 
    }
    public withCode(code: string): BillingResource {
        this['code'] = code;
        return this;
    }
    public withUnitNum(unitNum: number): BillingResource {
        this['unit_num'] = unitNum;
        return this;
    }
    public set unitNum(unitNum: number  | undefined) {
        this['unit_num'] = unitNum;
    }
    public get unitNum(): number | undefined {
        return this['unit_num'];
    }
}