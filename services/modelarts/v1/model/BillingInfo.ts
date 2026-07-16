

export class BillingInfo {
    public code?: string;
    private 'unit_num'?: number;
    public constructor() { 
    }
    public withCode(code: string): BillingInfo {
        this['code'] = code;
        return this;
    }
    public withUnitNum(unitNum: number): BillingInfo {
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