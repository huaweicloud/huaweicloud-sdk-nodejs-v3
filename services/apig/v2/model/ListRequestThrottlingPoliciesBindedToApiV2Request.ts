

export class ListRequestThrottlingPoliciesBindedToApiV2Request {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'api_id'?: string;
    private 'throttle_id'?: string;
    private 'throttle_name'?: string;
    private 'env_id'?: string;
    public constructor(instanceId?: string, apiId?: string) { 
        this['instance_id'] = instanceId;
        this['api_id'] = apiId;
    }
    public withInstanceId(instanceId: string): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['limit'] = limit;
        return this;
    }
    public withApiId(apiId: string): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withThrottleId(throttleId: string): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['throttle_id'] = throttleId;
        return this;
    }
    public set throttleId(throttleId: string  | undefined) {
        this['throttle_id'] = throttleId;
    }
    public get throttleId(): string | undefined {
        return this['throttle_id'];
    }
    public withThrottleName(throttleName: string): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['throttle_name'] = throttleName;
        return this;
    }
    public set throttleName(throttleName: string  | undefined) {
        this['throttle_name'] = throttleName;
    }
    public get throttleName(): string | undefined {
        return this['throttle_name'];
    }
    public withEnvId(envId: string): ListRequestThrottlingPoliciesBindedToApiV2Request {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
}