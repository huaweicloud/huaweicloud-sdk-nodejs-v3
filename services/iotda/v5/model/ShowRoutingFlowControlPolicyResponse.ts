
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRoutingFlowControlPolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public description?: string;
    public scope?: string;
    private 'scope_value'?: string;
    public limit?: number;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): ShowRoutingFlowControlPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ShowRoutingFlowControlPolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withDescription(description: string): ShowRoutingFlowControlPolicyResponse {
        this['description'] = description;
        return this;
    }
    public withScope(scope: string): ShowRoutingFlowControlPolicyResponse {
        this['scope'] = scope;
        return this;
    }
    public withScopeValue(scopeValue: string): ShowRoutingFlowControlPolicyResponse {
        this['scope_value'] = scopeValue;
        return this;
    }
    public set scopeValue(scopeValue: string  | undefined) {
        this['scope_value'] = scopeValue;
    }
    public get scopeValue(): string | undefined {
        return this['scope_value'];
    }
    public withLimit(limit: number): ShowRoutingFlowControlPolicyResponse {
        this['limit'] = limit;
        return this;
    }
}