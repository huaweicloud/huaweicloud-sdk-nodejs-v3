

export class AppQuotaCreate {
    public name?: string;
    private 'call_limits'?: number;
    private 'time_unit'?: AppQuotaCreateTimeUnitEnum | string;
    private 'time_interval'?: number;
    private 'reset_time'?: string;
    public remark?: string;
    public constructor(name?: string, callLimits?: number, timeUnit?: string, timeInterval?: number) { 
        this['name'] = name;
        this['call_limits'] = callLimits;
        this['time_unit'] = timeUnit;
        this['time_interval'] = timeInterval;
    }
    public withName(name: string): AppQuotaCreate {
        this['name'] = name;
        return this;
    }
    public withCallLimits(callLimits: number): AppQuotaCreate {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
    public withTimeUnit(timeUnit: AppQuotaCreateTimeUnitEnum | string): AppQuotaCreate {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: AppQuotaCreateTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): AppQuotaCreateTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withTimeInterval(timeInterval: number): AppQuotaCreate {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withResetTime(resetTime: string): AppQuotaCreate {
        this['reset_time'] = resetTime;
        return this;
    }
    public set resetTime(resetTime: string  | undefined) {
        this['reset_time'] = resetTime;
    }
    public get resetTime(): string | undefined {
        return this['reset_time'];
    }
    public withRemark(remark: string): AppQuotaCreate {
        this['remark'] = remark;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppQuotaCreateTimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
