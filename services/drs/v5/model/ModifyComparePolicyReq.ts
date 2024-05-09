

export class ModifyComparePolicyReq {
    public action?: string;
    public period?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'compare_type'?: Array<string>;
    private 'compare_policy'?: string;
    private 'interval_hour'?: number;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): ModifyComparePolicyReq {
        this['action'] = action;
        return this;
    }
    public withPeriod(period: string): ModifyComparePolicyReq {
        this['period'] = period;
        return this;
    }
    public withBeginTime(beginTime: string): ModifyComparePolicyReq {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ModifyComparePolicyReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCompareType(compareType: Array<string>): ModifyComparePolicyReq {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: Array<string>  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): Array<string> | undefined {
        return this['compare_type'];
    }
    public withComparePolicy(comparePolicy: string): ModifyComparePolicyReq {
        this['compare_policy'] = comparePolicy;
        return this;
    }
    public set comparePolicy(comparePolicy: string  | undefined) {
        this['compare_policy'] = comparePolicy;
    }
    public get comparePolicy(): string | undefined {
        return this['compare_policy'];
    }
    public withIntervalHour(intervalHour: number): ModifyComparePolicyReq {
        this['interval_hour'] = intervalHour;
        return this;
    }
    public set intervalHour(intervalHour: number  | undefined) {
        this['interval_hour'] = intervalHour;
    }
    public get intervalHour(): number | undefined {
        return this['interval_hour'];
    }
}