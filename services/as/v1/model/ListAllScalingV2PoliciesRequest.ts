

export class ListAllScalingV2PoliciesRequest {
    private 'scaling_resource_id'?: string;
    private 'scaling_resource_type'?: ListAllScalingV2PoliciesRequestScalingResourceTypeEnum | string;
    private 'scaling_policy_name'?: string;
    private 'scaling_policy_type'?: ListAllScalingV2PoliciesRequestScalingPolicyTypeEnum | string;
    private 'scaling_policy_id'?: string;
    private 'start_number'?: number;
    public limit?: number;
    private 'sort_by'?: ListAllScalingV2PoliciesRequestSortByEnum | string;
    public order?: ListAllScalingV2PoliciesRequestOrderEnum | string;
    private 'enterprise_project_id'?: string;
    private 'alarm_id'?: string;
    public constructor() { 
    }
    public withScalingResourceId(scalingResourceId: string): ListAllScalingV2PoliciesRequest {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withScalingResourceType(scalingResourceType: ListAllScalingV2PoliciesRequestScalingResourceTypeEnum | string): ListAllScalingV2PoliciesRequest {
        this['scaling_resource_type'] = scalingResourceType;
        return this;
    }
    public set scalingResourceType(scalingResourceType: ListAllScalingV2PoliciesRequestScalingResourceTypeEnum | string  | undefined) {
        this['scaling_resource_type'] = scalingResourceType;
    }
    public get scalingResourceType(): ListAllScalingV2PoliciesRequestScalingResourceTypeEnum | string | undefined {
        return this['scaling_resource_type'];
    }
    public withScalingPolicyName(scalingPolicyName: string): ListAllScalingV2PoliciesRequest {
        this['scaling_policy_name'] = scalingPolicyName;
        return this;
    }
    public set scalingPolicyName(scalingPolicyName: string  | undefined) {
        this['scaling_policy_name'] = scalingPolicyName;
    }
    public get scalingPolicyName(): string | undefined {
        return this['scaling_policy_name'];
    }
    public withScalingPolicyType(scalingPolicyType: ListAllScalingV2PoliciesRequestScalingPolicyTypeEnum | string): ListAllScalingV2PoliciesRequest {
        this['scaling_policy_type'] = scalingPolicyType;
        return this;
    }
    public set scalingPolicyType(scalingPolicyType: ListAllScalingV2PoliciesRequestScalingPolicyTypeEnum | string  | undefined) {
        this['scaling_policy_type'] = scalingPolicyType;
    }
    public get scalingPolicyType(): ListAllScalingV2PoliciesRequestScalingPolicyTypeEnum | string | undefined {
        return this['scaling_policy_type'];
    }
    public withScalingPolicyId(scalingPolicyId: string): ListAllScalingV2PoliciesRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withStartNumber(startNumber: number): ListAllScalingV2PoliciesRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListAllScalingV2PoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortBy(sortBy: ListAllScalingV2PoliciesRequestSortByEnum | string): ListAllScalingV2PoliciesRequest {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: ListAllScalingV2PoliciesRequestSortByEnum | string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): ListAllScalingV2PoliciesRequestSortByEnum | string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: ListAllScalingV2PoliciesRequestOrderEnum | string): ListAllScalingV2PoliciesRequest {
        this['order'] = order;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAllScalingV2PoliciesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAlarmId(alarmId: string): ListAllScalingV2PoliciesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllScalingV2PoliciesRequestScalingResourceTypeEnum {
    SCALING_GROUP = 'SCALING_GROUP',
    BANDWIDTH = 'BANDWIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllScalingV2PoliciesRequestScalingPolicyTypeEnum {
    ALARM = 'ALARM',
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllScalingV2PoliciesRequestSortByEnum {
    POLICY_NAME = 'POLICY_NAME',
    TRIGGER_CONDITION = 'TRIGGER_CONDITION',
    CREATE_TIME = 'CREATE_TIME'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAllScalingV2PoliciesRequestOrderEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
