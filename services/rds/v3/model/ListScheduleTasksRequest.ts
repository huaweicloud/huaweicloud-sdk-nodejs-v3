

export class ListScheduleTasksRequest {
    public offset?: number;
    public limit?: number;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public status?: ListScheduleTasksRequestStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListScheduleTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScheduleTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withInstanceId(instanceId: string): ListScheduleTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListScheduleTasksRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: ListScheduleTasksRequestStatusEnum | string): ListScheduleTasksRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListScheduleTasksRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListScheduleTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScheduleTasksRequestStatusEnum {
    INITING = 'Initing',
    PENDING = 'Pending',
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed',
    UNAUTHORIZED = 'Unauthorized',
    CANCELED = 'Canceled'
}
