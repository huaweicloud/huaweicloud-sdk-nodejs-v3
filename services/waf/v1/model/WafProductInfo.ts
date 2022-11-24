

export class WafProductInfo {
    private 'resource_spec_code'?: string | undefined;
    private 'period_type'?: string | undefined;
    private 'period_num'?: number | undefined;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): WafProductInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode() {
        return this['resource_spec_code'];
    }
    public withPeriodType(periodType: string): WafProductInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: string | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType() {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): WafProductInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum() {
        return this['period_num'];
    }
}