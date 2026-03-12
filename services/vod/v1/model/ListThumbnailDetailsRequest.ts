

export class ListThumbnailDetailsRequest {
    private 'X-Sdk-Date'?: string;
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withXSdkDate(xSdkDate: string): ListThumbnailDetailsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withTaskId(taskId: string): ListThumbnailDetailsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ListThumbnailDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListThumbnailDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}