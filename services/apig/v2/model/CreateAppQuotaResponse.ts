
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppQuotaResponse extends SdkResponse {
    private 'app_quota_id'?: string;
    public name?: string;
    private 'call_limits'?: number;
    private 'time_unit'?: CreateAppQuotaResponseTimeUnitEnum | string;
    private 'time_interval'?: number;
    public remark?: string;
    private 'reset_time'?: string;
    private 'create_time'?: Date;
    private 'bound_app_num'?: number;
    public constructor() { 
        super();
    }
    public withAppQuotaId(appQuotaId: string): CreateAppQuotaResponse {
        this['app_quota_id'] = appQuotaId;
        return this;
    }
    public set appQuotaId(appQuotaId: string  | undefined) {
        this['app_quota_id'] = appQuotaId;
    }
    public get appQuotaId(): string | undefined {
        return this['app_quota_id'];
    }
    public withName(name: string): CreateAppQuotaResponse {
        this['name'] = name;
        return this;
    }
    public withCallLimits(callLimits: number): CreateAppQuotaResponse {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
    public withTimeUnit(timeUnit: CreateAppQuotaResponseTimeUnitEnum | string): CreateAppQuotaResponse {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: CreateAppQuotaResponseTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): CreateAppQuotaResponseTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withTimeInterval(timeInterval: number): CreateAppQuotaResponse {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withRemark(remark: string): CreateAppQuotaResponse {
        this['remark'] = remark;
        return this;
    }
    public withResetTime(resetTime: string): CreateAppQuotaResponse {
        this['reset_time'] = resetTime;
        return this;
    }
    public set resetTime(resetTime: string  | undefined) {
        this['reset_time'] = resetTime;
    }
    public get resetTime(): string | undefined {
        return this['reset_time'];
    }
    public withCreateTime(createTime: Date): CreateAppQuotaResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withBoundAppNum(boundAppNum: number): CreateAppQuotaResponse {
        this['bound_app_num'] = boundAppNum;
        return this;
    }
    public set boundAppNum(boundAppNum: number  | undefined) {
        this['bound_app_num'] = boundAppNum;
    }
    public get boundAppNum(): number | undefined {
        return this['bound_app_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAppQuotaResponseTimeUnitEnum {
    SECOND = 'SECOND',
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
