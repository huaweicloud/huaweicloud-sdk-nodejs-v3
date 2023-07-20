

export class ListScalingActivityV2LogsRequest {
    private 'scaling_group_id'?: string;
    private 'log_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'start_number'?: number;
    public limit?: number;
    public type?: ListScalingActivityV2LogsRequestTypeEnum | string;
    public status?: ListScalingActivityV2LogsRequestStatusEnum | string;
    public constructor(scalingGroupId?: string) { 
        this['scaling_group_id'] = scalingGroupId;
    }
    public withScalingGroupId(scalingGroupId: string): ListScalingActivityV2LogsRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withLogId(logId: string): ListScalingActivityV2LogsRequest {
        this['log_id'] = logId;
        return this;
    }
    public set logId(logId: string  | undefined) {
        this['log_id'] = logId;
    }
    public get logId(): string | undefined {
        return this['log_id'];
    }
    public withStartTime(startTime: string): ListScalingActivityV2LogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListScalingActivityV2LogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStartNumber(startNumber: number): ListScalingActivityV2LogsRequest {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withLimit(limit: number): ListScalingActivityV2LogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ListScalingActivityV2LogsRequestTypeEnum | string): ListScalingActivityV2LogsRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ListScalingActivityV2LogsRequestStatusEnum | string): ListScalingActivityV2LogsRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingActivityV2LogsRequestTypeEnum {
    NORMAL = 'NORMAL',
    MANNUAL_REMOVE = 'MANNUAL_REMOVE',
    MANNUAL_DELETE = 'MANNUAL_DELETE',
    MANNUAL_ADD = 'MANNUAL_ADD',
    ELB_CHECK_DELETE = 'ELB_CHECK_DELETE',
    AUDIT_CHECK_DELETE = 'AUDIT_CHECK_DELETE',
    MODIFY_ELB = 'MODIFY_ELB'
}
/**
    * @export
    * @enum {string}
    */
export enum ListScalingActivityV2LogsRequestStatusEnum {
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    DOING = 'DOING'
}
