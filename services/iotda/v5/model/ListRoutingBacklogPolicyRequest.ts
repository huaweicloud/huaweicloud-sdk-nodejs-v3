

export class ListRoutingBacklogPolicyRequest {
    private 'Instance-Id'?: string;
    private 'policy_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListRoutingBacklogPolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withPolicyName(policyName: string): ListRoutingBacklogPolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withLimit(limit: number): ListRoutingBacklogPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRoutingBacklogPolicyRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListRoutingBacklogPolicyRequest {
        this['offset'] = offset;
        return this;
    }
}