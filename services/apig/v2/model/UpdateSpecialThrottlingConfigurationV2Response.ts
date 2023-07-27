import { ThrottleSpecialBase } from './ThrottleSpecialBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSpecialThrottlingConfigurationV2Response extends SdkResponse {
    public id?: string;
    private 'call_limits'?: number;
    private 'apply_time'?: Date;
    private 'app_name'?: string;
    private 'app_id'?: string;
    private 'object_id'?: string;
    private 'object_type'?: string;
    private 'object_name'?: string;
    private 'throttle_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['id'] = id;
        return this;
    }
    public withCallLimits(callLimits: number): UpdateSpecialThrottlingConfigurationV2Response {
        this['call_limits'] = callLimits;
        return this;
    }
    public set callLimits(callLimits: number  | undefined) {
        this['call_limits'] = callLimits;
    }
    public get callLimits(): number | undefined {
        return this['call_limits'];
    }
    public withApplyTime(applyTime: Date): UpdateSpecialThrottlingConfigurationV2Response {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: Date  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): Date | undefined {
        return this['apply_time'];
    }
    public withAppName(appName: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppId(appId: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withObjectId(objectId: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withObjectType(objectType: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withObjectName(objectName: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withThrottleId(throttleId: string): UpdateSpecialThrottlingConfigurationV2Response {
        this['throttle_id'] = throttleId;
        return this;
    }
    public set throttleId(throttleId: string  | undefined) {
        this['throttle_id'] = throttleId;
    }
    public get throttleId(): string | undefined {
        return this['throttle_id'];
    }
}