import { ThrottleBaseInfo } from './ThrottleBaseInfo';


export class ThrottlesInfo {
    private 'app_call_limits'?: number;
    public name?: string;
    private 'time_unit'?: ThrottlesInfoTimeUnitEnum | string;
    public remark?: string;
    private 'api_call_limits'?: number;
    public type?: ThrottlesInfoTypeEnum | number;
    private 'enable_adaptive_control'?: string;
    private 'user_call_limits'?: number;
    private 'time_interval'?: number;
    private 'ip_call_limits'?: number;
    public id?: string;
    private 'bind_num'?: number;
    private 'is_inclu_special_throttle'?: ThrottlesInfoIsIncluSpecialThrottleEnum | number;
    private 'create_time'?: Date;
    public constructor(name?: string, timeUnit?: string, apiCallLimits?: number, timeInterval?: number) { 
        this['name'] = name;
        this['time_unit'] = timeUnit;
        this['api_call_limits'] = apiCallLimits;
        this['time_interval'] = timeInterval;
    }
    public withAppCallLimits(appCallLimits: number): ThrottlesInfo {
        this['app_call_limits'] = appCallLimits;
        return this;
    }
    public set appCallLimits(appCallLimits: number  | undefined) {
        this['app_call_limits'] = appCallLimits;
    }
    public get appCallLimits(): number | undefined {
        return this['app_call_limits'];
    }
    public withName(name: string): ThrottlesInfo {
        this['name'] = name;
        return this;
    }
    public withTimeUnit(timeUnit: ThrottlesInfoTimeUnitEnum | string): ThrottlesInfo {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ThrottlesInfoTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ThrottlesInfoTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withRemark(remark: string): ThrottlesInfo {
        this['remark'] = remark;
        return this;
    }
    public withApiCallLimits(apiCallLimits: number): ThrottlesInfo {
        this['api_call_limits'] = apiCallLimits;
        return this;
    }
    public set apiCallLimits(apiCallLimits: number  | undefined) {
        this['api_call_limits'] = apiCallLimits;
    }
    public get apiCallLimits(): number | undefined {
        return this['api_call_limits'];
    }
    public withType(type: ThrottlesInfoTypeEnum | number): ThrottlesInfo {
        this['type'] = type;
        return this;
    }
    public withEnableAdaptiveControl(enableAdaptiveControl: string): ThrottlesInfo {
        this['enable_adaptive_control'] = enableAdaptiveControl;
        return this;
    }
    public set enableAdaptiveControl(enableAdaptiveControl: string  | undefined) {
        this['enable_adaptive_control'] = enableAdaptiveControl;
    }
    public get enableAdaptiveControl(): string | undefined {
        return this['enable_adaptive_control'];
    }
    public withUserCallLimits(userCallLimits: number): ThrottlesInfo {
        this['user_call_limits'] = userCallLimits;
        return this;
    }
    public set userCallLimits(userCallLimits: number  | undefined) {
        this['user_call_limits'] = userCallLimits;
    }
    public get userCallLimits(): number | undefined {
        return this['user_call_limits'];
    }
    public withTimeInterval(timeInterval: number): ThrottlesInfo {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withIpCallLimits(ipCallLimits: number): ThrottlesInfo {
        this['ip_call_limits'] = ipCallLimits;
        return this;
    }
    public set ipCallLimits(ipCallLimits: number  | undefined) {
        this['ip_call_limits'] = ipCallLimits;
    }
    public get ipCallLimits(): number | undefined {
        return this['ip_call_limits'];
    }
    public withId(id: string): ThrottlesInfo {
        this['id'] = id;
        return this;
    }
    public withBindNum(bindNum: number): ThrottlesInfo {
        this['bind_num'] = bindNum;
        return this;
    }
    public set bindNum(bindNum: number  | undefined) {
        this['bind_num'] = bindNum;
    }
    public get bindNum(): number | undefined {
        return this['bind_num'];
    }
    public withIsIncluSpecialThrottle(isIncluSpecialThrottle: ThrottlesInfoIsIncluSpecialThrottleEnum | number): ThrottlesInfo {
        this['is_inclu_special_throttle'] = isIncluSpecialThrottle;
        return this;
    }
    public set isIncluSpecialThrottle(isIncluSpecialThrottle: ThrottlesInfoIsIncluSpecialThrottleEnum | number  | undefined) {
        this['is_inclu_special_throttle'] = isIncluSpecialThrottle;
    }
    public get isIncluSpecialThrottle(): ThrottlesInfoIsIncluSpecialThrottleEnum | number | undefined {
        return this['is_inclu_special_throttle'];
    }
    public withCreateTime(createTime: Date): ThrottlesInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThrottlesInfoTimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum ThrottlesInfoTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ThrottlesInfoIsIncluSpecialThrottleEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
