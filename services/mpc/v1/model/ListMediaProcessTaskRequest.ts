

export class ListMediaProcessTaskRequest {
    private 'task_id'?: Array<string> | undefined;
    public status?: ListMediaProcessTaskRequestStatusEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withTaskId(taskId: Array<string>): ListMediaProcessTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string> | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: ListMediaProcessTaskRequestStatusEnum): ListMediaProcessTaskRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListMediaProcessTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMediaProcessTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withPage(page: number): ListMediaProcessTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListMediaProcessTaskRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMediaProcessTaskRequestStatusEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
