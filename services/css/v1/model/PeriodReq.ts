

export class PeriodReq {
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'is_auto_pay'?: number;
    private 'console_url'?: string;
    public constructor(periodType?: number, periodNum?: number) { 
        this['period_type'] = periodType;
        this['period_num'] = periodNum;
    }
    public withPeriodType(periodType: number): PeriodReq {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): PeriodReq {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): PeriodReq {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withIsAutoPay(isAutoPay: number): PeriodReq {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: number  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): number | undefined {
        return this['is_auto_pay'];
    }
    public withConsoleUrl(consoleUrl: string): PeriodReq {
        this['console_url'] = consoleUrl;
        return this;
    }
    public set consoleUrl(consoleUrl: string  | undefined) {
        this['console_url'] = consoleUrl;
    }
    public get consoleUrl(): string | undefined {
        return this['console_url'];
    }
}