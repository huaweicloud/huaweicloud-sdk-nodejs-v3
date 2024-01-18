

export class ShowInstanceInfosRequest {
    public instance?: string;
    private 'workspace_id'?: string;
    private 'task_id'?: string;
    private 'job_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instance?: string, taskId?: string, jobName?: string, startTime?: number, endTime?: number, offset?: number, limit?: number) { 
        this['instance'] = instance;
        this['task_id'] = taskId;
        this['job_name'] = jobName;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withInstance(instance: string): ShowInstanceInfosRequest {
        this['instance'] = instance;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ShowInstanceInfosRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTaskId(taskId: string): ShowInstanceInfosRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withJobName(jobName: string): ShowInstanceInfosRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStartTime(startTime: number): ShowInstanceInfosRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowInstanceInfosRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowInstanceInfosRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowInstanceInfosRequest {
        this['limit'] = limit;
        return this;
    }
}