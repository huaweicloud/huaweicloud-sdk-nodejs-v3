

export class ListScalingPoliciesRequest {
    private 'scaling_group_id'?: string;
    private 'scaling_policy_name'?: string;
    private 'scaling_policy_type'?: ListScalingPoliciesRequestScalingPolicyTypeEnum | string;
    private 'scaling_policy_id'?: string;
    private 'start_number'?: number;
    public limit?: number;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): ListScalingPoliciesRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withScalingPolicyName(scalingPolicyName: string): ListScalingPoliciesRequest {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingPolicyType(scalingPolicyType: ListScalingPoliciesRequestScalingPolicyTypeEnum | string): ListScalingPoliciesRequest {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: ListScalingPoliciesRequestScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): ListScalingPoliciesRequestScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withScalingPolicyId(scalingPolicyId: string): ListScalingPoliciesRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withStartNumber(startNumber: number): ListScalingPoliciesRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingPoliciesRequestScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE'
}
