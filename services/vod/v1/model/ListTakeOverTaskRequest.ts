

export class ListTakeOverTaskRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    public status?: string;
    private 'task_id'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListTakeOverTaskRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListTakeOverTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
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
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
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