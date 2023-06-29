

export class ListThumbnailsTaskRequest {
    private 'x-language'?: string | undefined;
    private 'task_id'?: Array<string> | undefined;
    public status?: ListThumbnailsTaskRequestStatusEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListThumbnailsTaskRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage() {
        return this['x-language'];
    }
    public withTaskId(taskId: Array<string>): ListThumbnailsTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string> | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withStatus(status: ListThumbnailsTaskRequestStatusEnum): ListThumbnailsTaskRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListThumbnailsTaskRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListThumbnailsTaskRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withPage(page: number): ListThumbnailsTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListThumbnailsTaskRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListThumbnailsTaskRequestStatusEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
