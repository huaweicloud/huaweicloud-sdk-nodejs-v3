

export class ListDevicePoliciesRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    private 'policy_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDevicePoliciesRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ListDevicePoliciesRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withPolicyName(policyName: string): ListDevicePoliciesRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withLimit(limit: number): ListDevicePoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDevicePoliciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDevicePoliciesRequest {
        this['offset'] = offset;
        return this;
    }
}