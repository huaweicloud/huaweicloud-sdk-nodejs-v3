

export class ListInstancesRequest {
    public workspace?: string;
    public name?: string;
    private 'task_type'?: ListInstancesRequestTaskTypeEnum | string;
    private 'run_status'?: ListInstancesRequestRunStatusEnum | string;
    private 'notify_status'?: ListInstancesRequestNotifyStatusEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListInstancesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withTaskType(taskType: ListInstancesRequestTaskTypeEnum | string): ListInstancesRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ListInstancesRequestTaskTypeEnum | string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ListInstancesRequestTaskTypeEnum | string | undefined {
        return this['task_type'];
    }
    public withRunStatus(runStatus: ListInstancesRequestRunStatusEnum | string): ListInstancesRequest {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: ListInstancesRequestRunStatusEnum | string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): ListInstancesRequestRunStatusEnum | string | undefined {
        return this['run_status'];
    }
    public withNotifyStatus(notifyStatus: ListInstancesRequestNotifyStatusEnum | string): ListInstancesRequest {
        this['notify_status'] = notifyStatus;
        return this;
    }
    public set notifyStatus(notifyStatus: ListInstancesRequestNotifyStatusEnum | string  | undefined) {
        this['notify_status'] = notifyStatus;
    }
    public get notifyStatus(): ListInstancesRequestNotifyStatusEnum | string | undefined {
        return this['notify_status'];
    }
    public withStartTime(startTime: number): ListInstancesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListInstancesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestTaskTypeEnum {
    QUALITY_TASK = 'QUALITY_TASK',
    CONSISTENCY_TASK = 'CONSISTENCY_TASK'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestRunStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    RUNNING = 'RUNNING',
    ALARMING = 'ALARMING'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRequestNotifyStatusEnum {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    NOT_TRIGGERED = 'NOT_TRIGGERED'
}
