

export class ListRoutingFlowControlPolicyRequest {
    private 'Instance-Id'?: string;
    public scope?: string;
    private 'scope_value'?: string;
    private 'policy_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListRoutingFlowControlPolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withScope(scope: string): ListRoutingFlowControlPolicyRequest {
        this['scope'] = scope;
        return this;
    }
    public withScopeValue(scopeValue: string): ListRoutingFlowControlPolicyRequest {
        this['scope_value'] = scopeValue;
        return this;
    }
    public set scopeValue(scopeValue: string  | undefined) {
        this['scope_value'] = scopeValue;
    }
    public get scopeValue(): string | undefined {
        return this['scope_value'];
    }
    public withPolicyName(policyName: string): ListRoutingFlowControlPolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withLimit(limit: number): ListRoutingFlowControlPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRoutingFlowControlPolicyRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListRoutingFlowControlPolicyRequest {
        this['offset'] = offset;
        return this;
    }
}