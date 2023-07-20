

export class ListTakeOverTaskRequest {
    private 'X-Sdk-Date'?: string;
    public status?: string;
    private 'task_id'?: string;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ListTakeOverTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withStatus(status: string): ListTakeOverTaskRequest {
        this['status'] = status;
        return this;
    }
    public withTaskId(taskId: string): ListTakeOverTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withPage(page: number): ListTakeOverTaskRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListTakeOverTaskRequest {
        this['size'] = size;
        return this;
    }
}