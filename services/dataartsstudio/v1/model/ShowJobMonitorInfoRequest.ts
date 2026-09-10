

export class ShowJobMonitorInfoRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'task_id'?: string;
    public constructor(workspace?: string, taskId?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
    }
    public withWorkspace(workspace: string): ShowJobMonitorInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowJobMonitorInfoRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withTaskId(taskId: string): ShowJobMonitorInfoRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}