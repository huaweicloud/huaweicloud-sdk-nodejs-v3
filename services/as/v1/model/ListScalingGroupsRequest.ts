

export class ListScalingGroupsRequest {
    private 'scaling_group_name'?: string;
    private 'scaling_configuration_id'?: string;
    private 'scaling_group_status'?: ListScalingGroupsRequestScalingGroupStatusEnum | string;
    private 'start_number'?: number;
    public limit?: number;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withScalingGroupName(scalingGroupName: string): ListScalingGroupsRequest {
        this['scaling_group_name'] = scalingGroupName;
        return this;
    }
    public set scalingGroupName(scalingGroupName: string  | undefined) {
        this['scaling_group_name'] = scalingGroupName;
    }
    public get scalingGroupName(): string | undefined {
        return this['scaling_group_name'];
    }
    public withScalingConfigurationId(scalingConfigurationId: string): ListScalingGroupsRequest {
        this['scaling_configuration_id'] = scalingConfigurationId;
        return this;
    }
    public set scalingConfigurationId(scalingConfigurationId: string  | undefined) {
        this['scaling_configuration_id'] = scalingConfigurationId;
    }
    public get scalingConfigurationId(): string | undefined {
        return this['scaling_configuration_id'];
    }
    public withScalingGroupStatus(scalingGroupStatus: ListScalingGroupsRequestScalingGroupStatusEnum | string): ListScalingGroupsRequest {
        this['scaling_group_status'] = scalingGroupStatus;
        return this;
    }
    public set scalingGroupStatus(scalingGroupStatus: ListScalingGroupsRequestScalingGroupStatusEnum | string  | undefined) {
        this['scaling_group_status'] = scalingGroupStatus;
    }
    public get scalingGroupStatus(): ListScalingGroupsRequestScalingGroupStatusEnum | string | undefined {
        return this['scaling_group_status'];
    }
    public withStartNumber(startNumber: number): ListScalingGroupsRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListScalingGroupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingGroupsRequestScalingGroupStatusEnum {
    INSERVICE = 'INSERVICE',
    PAUSED = 'PAUSED',
    ERROR = 'ERROR',
    DELETING = 'DELETING'
}
