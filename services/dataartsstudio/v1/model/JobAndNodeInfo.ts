

export class JobAndNodeInfo {
    private 'task_id'?: string;
    private 'job_name'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): JobAndNodeInfo {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withJobName(jobName: string): JobAndNodeInfo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withWorkspaceId(workspaceId: string): JobAndNodeInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}