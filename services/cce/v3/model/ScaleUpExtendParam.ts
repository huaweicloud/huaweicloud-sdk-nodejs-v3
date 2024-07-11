

export class ScaleUpExtendParam {
    public periodNum?: number;
    public periodType?: string;
    public isAutoRenew?: boolean;
    public isAutoPay?: boolean;
    public constructor(periodNum?: number, periodType?: string) { 
        this['periodNum'] = periodNum;
        this['periodType'] = periodType;
    }
    public withPeriodNum(periodNum: number): ScaleUpExtendParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withPeriodType(periodType: string): ScaleUpExtendParam {
        this['periodType'] = periodType;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: boolean): ScaleUpExtendParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: boolean): ScaleUpExtendParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
}