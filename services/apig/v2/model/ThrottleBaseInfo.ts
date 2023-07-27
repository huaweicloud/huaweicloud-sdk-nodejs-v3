

export class ThrottleBaseInfo {
    private 'app_call_limits'?: number;
    public name?: string;
    private 'time_unit'?: ThrottleBaseInfoTimeUnitEnum | string;
    public remark?: string;
    private 'api_call_limits'?: number;
    public type?: ThrottleBaseInfoTypeEnum | number;
    private 'enable_adaptive_control'?: string;
    private 'user_call_limits'?: number;
    private 'time_interval'?: number;
    private 'ip_call_limits'?: number;
    public constructor(name?: string, timeUnit?: string, apiCallLimits?: number, timeInterval?: number) { 
        this['name'] = name;
        this['time_unit'] = timeUnit;
        this['api_call_limits'] = apiCallLimits;
        this['time_interval'] = timeInterval;
    }
    public withAppCallLimits(appCallLimits: number): ThrottleBaseInfo {
        this['app_call_limits'] = appCallLimits;
        return this;
    }
    public set appCallLimits(appCallLimits: number  | undefined) {
        this['app_call_limits'] = appCallLimits;
    }
    public get appCallLimits(): number | undefined {
        return this['app_call_limits'];
    }
    public withName(name: string): ThrottleBaseInfo {
        this['name'] = name;
        return this;
    }
    public withTimeUnit(timeUnit: ThrottleBaseInfoTimeUnitEnum | string): ThrottleBaseInfo {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ThrottleBaseInfoTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ThrottleBaseInfoTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withRemark(remark: string): ThrottleBaseInfo {
        this['remark'] = remark;
        return this;
    }
    public withApiCallLimits(apiCallLimits: number): ThrottleBaseInfo {
        this['api_call_limits'] = apiCallLimits;
        return this;
    }
    public set apiCallLimits(apiCallLimits: number  | undefined) {
        this['api_call_limits'] = apiCallLimits;
    }
    public get apiCallLimits(): number | undefined {
        return this['api_call_limits'];
    }
    public withType(type: ThrottleBaseInfoTypeEnum | number): ThrottleBaseInfo {
        this['type'] = type;
        return this;
    }
    public withEnableAdaptiveControl(enableAdaptiveControl: string): ThrottleBaseInfo {
        this['enable_adaptive_control'] = enableAdaptiveControl;
        return this;
    }
    public set enableAdaptiveControl(enableAdaptiveControl: string  | undefined) {
        this['enable_adaptive_control'] = enableAdaptiveControl;
    }
    public get enableAdaptiveControl(): string | undefined {
        return this['enable_adaptive_control'];
    }
    public withUserCallLimits(userCallLimits: number): ThrottleBaseInfo {
        this['user_call_limits'] = userCallLimits;
        return this;
    }
    public set userCallLimits(userCallLimits: number  | undefined) {
        this['user_call_limits'] = userCallLimits;
    }
    public get userCallLimits(): number | undefined {
        return this['user_call_limits'];
    }
    public withTimeInterval(timeInterval: number): ThrottleBaseInfo {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withIpCallLimits(ipCallLimits: number): ThrottleBaseInfo {
        this['ip_call_limits'] = ipCallLimits;
        return this;
    }
    public set ipCallLimits(ipCallLimits: number  | undefined) {
        this['ip_call_limits'] = ipCallLimits;
    }
    public get ipCallLimits(): number | undefined {
        return this['ip_call_limits'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThrottleBaseInfoTimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum ThrottleBaseInfoTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
