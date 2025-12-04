

export class WafProductInfo {
    private 'resource_spec_code'?: string;
    private 'period_type'?: WafProductInfoPeriodTypeEnum | string;
    private 'period_num'?: number;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): WafProductInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withPeriodType(periodType: WafProductInfoPeriodTypeEnum | string): WafProductInfo {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: WafProductInfoPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): WafProductInfoPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): WafProductInfo {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WafProductInfoPeriodTypeEnum {
    MONTH = 'month',
    YEAR = 'year'
}
