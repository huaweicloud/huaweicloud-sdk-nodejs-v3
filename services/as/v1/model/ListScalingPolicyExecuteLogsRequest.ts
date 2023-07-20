

export class ListScalingPolicyExecuteLogsRequest {
    private 'scaling_policy_id'?: string;
    private 'log_id'?: string;
    private 'scaling_resource_type'?: ListScalingPolicyExecuteLogsRequestScalingResourceTypeEnum | string;
    private 'scaling_resource_id'?: string;
    private 'execute_type'?: ListScalingPolicyExecuteLogsRequestExecuteTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'start_number'?: number;
    public limit?: number;
    public constructor(scalingPolicyId?: string) { 
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public withScalingPolicyId(scalingPolicyId: string): ListScalingPolicyExecuteLogsRequest {
        this['scaling_policy_id'] = scalingPolicyId;
        return this;
    }
    public set scalingPolicyId(scalingPolicyId: string  | undefined) {
        this['scaling_policy_id'] = scalingPolicyId;
    }
    public get scalingPolicyId(): string | undefined {
        return this['scaling_policy_id'];
    }
    public withLogId(logId: string): ListScalingPolicyExecuteLogsRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withScalingResourceType(scalingResourceType: ListScalingPolicyExecuteLogsRequestScalingResourceTypeEnum | string): ListScalingPolicyExecuteLogsRequest {
        this['scaling_resource_type'] = scalingResourceType;
        return this;
    }
    public set scalingResourceType(scalingResourceType: ListScalingPolicyExecuteLogsRequestScalingResourceTypeEnum | string  | undefined) {
        this['scaling_resource_type'] = scalingResourceType;
    }
    public get scalingResourceType(): ListScalingPolicyExecuteLogsRequestScalingResourceTypeEnum | string | undefined {
        return this['scaling_resource_type'];
    }
    public withScalingResourceId(scalingResourceId: string): ListScalingPolicyExecuteLogsRequest {
        this['scaling_resource_id'] = scalingResourceId;
        return this;
    }
    public set scalingResourceId(scalingResourceId: string  | undefined) {
        this['scaling_resource_id'] = scalingResourceId;
    }
    public get scalingResourceId(): string | undefined {
        return this['scaling_resource_id'];
    }
    public withExecuteType(executeType: ListScalingPolicyExecuteLogsRequestExecuteTypeEnum | string): ListScalingPolicyExecuteLogsRequest {
        this['execute_type'] = executeType;
        return this;
    }
    public set executeType(executeType: ListScalingPolicyExecuteLogsRequestExecuteTypeEnum | string  | undefined) {
        this['execute_type'] = executeType;
    }
    public get executeType(): ListScalingPolicyExecuteLogsRequestExecuteTypeEnum | string | undefined {
        return this['execute_type'];
    }
    public withStartTime(startTime: string): ListScalingPolicyExecuteLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListScalingPolicyExecuteLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStartNumber(startNumber: number): ListScalingPolicyExecuteLogsRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingPolicyExecuteLogsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingPolicyExecuteLogsRequestScalingResourceTypeEnum {
    SCALING_GROUP = 'SCALING_GROUP',
    BANDWIDTH = 'BANDWIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScalingPolicyExecuteLogsRequestExecuteTypeEnum {
    SCHEDULED = 'SCHEDULED',
    RECURRENCE = 'RECURRENCE',
    ALARM = 'ALARM',
    MANUAL = 'MANUAL'
}
