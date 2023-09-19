

export class PeriodReq {
    public periodType?: number;
    public periodNum?: number;
    public isAutoRenew?: number;
    public isAutoPay?: number;
    public consoleURL?: string;
    public constructor(periodType?: number, periodNum?: number) { 
        this['periodType'] = periodType;
        this['periodNum'] = periodNum;
    }
    public withPeriodType(periodType: number): PeriodReq {
        this['periodType'] = periodType;
        return this;
    }
    public withPeriodNum(periodNum: number): PeriodReq {
        this['periodNum'] = periodNum;
        return this;
    }
    public withIsAutoRenew(isAutoRenew: number): PeriodReq {
        this['isAutoRenew'] = isAutoRenew;
        return this;
    }
    public withIsAutoPay(isAutoPay: number): PeriodReq {
        this['isAutoPay'] = isAutoPay;
        return this;
    }
    public withConsoleURL(consoleURL: string): PeriodReq {
        this['consoleURL'] = consoleURL;
        return this;
    }
}