

export class ListRemuxTaskRequest {
    private 'task_id'?: Array<string> | undefined;
    public status?: ListRemuxTaskRequestStatusEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'input_bucket'?: string | undefined;
    private 'input_object'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withTaskId(taskId: Array<string>): ListRemuxTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string> | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: ListRemuxTaskRequestStatusEnum): ListRemuxTaskRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListRemuxTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRemuxTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withInputBucket(inputBucket: string): ListRemuxTaskRequest {
        this['input_bucket'] = inputBucket;
        return this;
    }
    public set inputBucket(inputBucket: string | undefined) {
        this['input_bucket'] = inputBucket;
    }
    public get inputBucket() {
        return this['input_bucket'];
    }
    public withInputObject(inputObject: string): ListRemuxTaskRequest {
        this['input_object'] = inputObject;
        return this;
    }
    public set inputObject(inputObject: string | undefined) {
        this['input_object'] = inputObject;
    }
    public get inputObject() {
        return this['input_object'];
    }
    public withPage(page: number): ListRemuxTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListRemuxTaskRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRemuxTaskRequestStatusEnum {
    INIT = 'INIT',
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
