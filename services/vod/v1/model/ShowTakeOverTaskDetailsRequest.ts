

export class ShowTakeOverTaskDetailsRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'task_id': string | undefined;
    public page?: number;
    public size?: number;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withXSdkDate(xSdkDate: string): ShowTakeOverTaskDetailsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withTaskId(taskId: string): ShowTakeOverTaskDetailsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
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