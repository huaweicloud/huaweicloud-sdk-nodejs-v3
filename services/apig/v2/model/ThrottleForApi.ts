import { ThrottlesInfo } from './ThrottlesInfo';


export class ThrottleForApi {
    private 'app_call_limits'?: number;
    public name?: string;
    private 'time_unit'?: ThrottleForApiTimeUnitEnum | string;
    public remark?: string;
    private 'api_call_limits'?: number;
    public type?: ThrottleForApiTypeEnum | number;
    private 'enable_adaptive_control'?: string;
    private 'user_call_limits'?: number;
    private 'time_interval'?: number;
    private 'ip_call_limits'?: number;
    public id?: string;
    private 'bind_num'?: number;
    private 'is_inclu_special_throttle'?: ThrottleForApiIsIncluSpecialThrottleEnum | number;
    private 'create_time'?: Date;
    private 'env_name'?: string;
    private 'bind_id'?: string;
    private 'bind_time'?: Date;
    public constructor(name?: string, timeUnit?: string, apiCallLimits?: number, timeInterval?: number) { 
        this['name'] = name;
        this['time_unit'] = timeUnit;
        this['api_call_limits'] = apiCallLimits;
        this['time_interval'] = timeInterval;
    }
    public withAppCallLimits(appCallLimits: number): ThrottleForApi {
        this['app_call_limits'] = appCallLimits;
        return this;
    }
    public set appCallLimits(appCallLimits: number  | undefined) {
        this['app_call_limits'] = appCallLimits;
    }
    public get appCallLimits(): number | undefined {
        return this['app_call_limits'];
    }
    public withName(name: string): ThrottleForApi {
        this['name'] = name;
        return this;
    }
    public withTimeUnit(timeUnit: ThrottleForApiTimeUnitEnum | string): ThrottleForApi {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ThrottleForApiTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ThrottleForApiTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withRemark(remark: string): ThrottleForApi {
        this['remark'] = remark;
        return this;
    }
    public withApiCallLimits(apiCallLimits: number): ThrottleForApi {
        this['api_call_limits'] = apiCallLimits;
        return this;
    }
    public set apiCallLimits(apiCallLimits: number  | undefined) {
        this['api_call_limits'] = apiCallLimits;
    }
    public get apiCallLimits(): number | undefined {
        return this['api_call_limits'];
    }
    public withType(type: ThrottleForApiTypeEnum | number): ThrottleForApi {
        this['type'] = type;
        return this;
    }
    public withEnableAdaptiveControl(enableAdaptiveControl: string): ThrottleForApi {
        this['enable_adaptive_control'] = enableAdaptiveControl;
        return this;
    }
    public set enableAdaptiveControl(enableAdaptiveControl: string  | undefined) {
        this['enable_adaptive_control'] = enableAdaptiveControl;
    }
    public get enableAdaptiveControl(): string | undefined {
        return this['enable_adaptive_control'];
    }
    public withUserCallLimits(userCallLimits: number): ThrottleForApi {
        this['user_call_limits'] = userCallLimits;
        return this;
    }
    public set userCallLimits(userCallLimits: number  | undefined) {
        this['user_call_limits'] = userCallLimits;
    }
    public get userCallLimits(): number | undefined {
        return this['user_call_limits'];
    }
    public withTimeInterval(timeInterval: number): ThrottleForApi {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withIpCallLimits(ipCallLimits: number): ThrottleForApi {
        this['ip_call_limits'] = ipCallLimits;
        return this;
    }
    public set ipCallLimits(ipCallLimits: number  | undefined) {
        this['ip_call_limits'] = ipCallLimits;
    }
    public get ipCallLimits(): number | undefined {
        return this['ip_call_limits'];
    }
    public withId(id: string): ThrottleForApi {
        this['id'] = id;
        return this;
    }
    public withBindNum(bindNum: number): ThrottleForApi {
        this['bind_num'] = bindNum;
        return this;
    }
    public set bindNum(bindNum: number  | undefined) {
        this['bind_num'] = bindNum;
    }
    public get bindNum(): number | undefined {
        return this['bind_num'];
    }
    public withIsIncluSpecialThrottle(isIncluSpecialThrottle: ThrottleForApiIsIncluSpecialThrottleEnum | number): ThrottleForApi {
        this['is_inclu_special_throttle'] = isIncluSpecialThrottle;
        return this;
    }
    public set isIncluSpecialThrottle(isIncluSpecialThrottle: ThrottleForApiIsIncluSpecialThrottleEnum | number  | undefined) {
        this['is_inclu_special_throttle'] = isIncluSpecialThrottle;
    }
    public get isIncluSpecialThrottle(): ThrottleForApiIsIncluSpecialThrottleEnum | number | undefined {
        return this['is_inclu_special_throttle'];
    }
    public withCreateTime(createTime: Date): ThrottleForApi {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withEnvName(envName: string): ThrottleForApi {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withBindId(bindId: string): ThrottleForApi {
        this['bind_id'] = bindId;
        return this;
    }
    public set bindId(bindId: string  | undefined) {
        this['bind_id'] = bindId;
    }
    public get bindId(): string | undefined {
        return this['bind_id'];
    }
    public withBindTime(bindTime: Date): ThrottleForApi {
        this['bind_time'] = bindTime;
        return this;
    }
    public set bindTime(bindTime: Date  | undefined) {
        this['bind_time'] = bindTime;
    }
    public get bindTime(): Date | undefined {
        return this['bind_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThrottleForApiTimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum ThrottleForApiTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ThrottleForApiIsIncluSpecialThrottleEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}