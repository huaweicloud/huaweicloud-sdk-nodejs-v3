

export class SecurityReportSubscriptionResponseStatPeriod {
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withBeginTime(beginTime: number): SecurityReportSubscriptionResponseStatPeriod {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): SecurityReportSubscriptionResponseStatPeriod {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}