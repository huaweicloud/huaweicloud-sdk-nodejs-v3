

export class ShowPreheatingAssetRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'task_id': string | undefined;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withXSdkDate(xSdkDate: string): ShowPreheatingAssetRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withTaskId(taskId: string): ShowPreheatingAssetRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}