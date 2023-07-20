

export class ShowTakeOverTaskDetailsRequest {
    private 'X-Sdk-Date'?: string;
    private 'task_id'?: string;
    public page?: number;
    public size?: number;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withXSdkDate(xSdkDate: string): ShowTakeOverTaskDetailsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withTaskId(taskId: string): ShowTakeOverTaskDetailsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPage(page: number): ShowTakeOverTaskDetailsRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ShowTakeOverTaskDetailsRequest {
        this['size'] = size;
        return this;
    }
}