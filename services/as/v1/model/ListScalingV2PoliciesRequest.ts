

export class ListScalingV2PoliciesRequest {
    private 'scaling_resource_id'?: string;
    private 'scaling_policy_name'?: string;
    private 'scaling_policy_type'?: string;
    private 'scaling_policy_id'?: string;
    private 'start_number'?: number;
    public limit?: number;
    public constructor(scalingResourceId?: string) { 
        this['scaling_resource_id'] = scalingResourceId;
    }
    public withScalingResourceId(scalingResourceId: string): ListScalingV2PoliciesRequest {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withScalingPolicyName(scalingPolicyName: string): ListScalingV2PoliciesRequest {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingPolicyType(scalingPolicyType: string): ListScalingV2PoliciesRequest {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): string | undefined {
        return this['scaling_policy_type'];
    }
    public withScalingPolicyId(scalingPolicyId: string): ListScalingV2PoliciesRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withStartNumber(startNumber: number): ListScalingV2PoliciesRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingV2PoliciesRequest {
        this['limit'] = limit;
        return this;
    }
}