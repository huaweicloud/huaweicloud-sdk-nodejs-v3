

export class ListSpecialThrottlingConfigurationsV2Request {
    private 'instance_id'?: string;
    private 'throttle_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'object_type'?: string;
    private 'app_name'?: string;
    public user?: string;
    public constructor(instanceId?: string, throttleId?: string) { 
        this['instance_id'] = instanceId;
        this['throttle_id'] = throttleId;
    }
    public withInstanceId(instanceId: string): ListSpecialThrottlingConfigurationsV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withThrottleId(throttleId: string): ListSpecialThrottlingConfigurationsV2Request {
        this['throttle_id'] = throttleId;
        return this;
    }
    public set throttleId(throttleId: string  | undefined) {
        this['throttle_id'] = throttleId;
    }
    public get throttleId(): string | undefined {
        return this['throttle_id'];
    }
    public withOffset(offset: number): ListSpecialThrottlingConfigurationsV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSpecialThrottlingConfigurationsV2Request {
        this['limit'] = limit;
        return this;
    }
    public withObjectType(objectType: string): ListSpecialThrottlingConfigurationsV2Request {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withAppName(appName: string): ListSpecialThrottlingConfigurationsV2Request {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withUser(user: string): ListSpecialThrottlingConfigurationsV2Request {
        this['user'] = user;
        return this;
    }
}