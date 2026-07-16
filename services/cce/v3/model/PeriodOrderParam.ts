

export class PeriodOrderParam {
    public isAutoPay?: boolean;
    public isAutoRenew?: boolean;
    public periodNum?: number;
    public periodType?: string;
    public constructor(periodNum?: number, periodType?: string) { 
        this['periodNum'] = periodNum;
        this['periodType'] = periodType;
    }
    public withIsAutoPay(isAutoPay: boolean): PeriodOrderParam {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: boolean): PeriodOrderParam {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withPeriodNum(periodNum: number): PeriodOrderParam {
        this['periodNum'] = periodNum;
        return this;
    }
    public withPeriodType(periodType: string): PeriodOrderParam {
        this['periodType'] = periodType;
        return this;
    }
}