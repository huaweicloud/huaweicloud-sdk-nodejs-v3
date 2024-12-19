

export class RetryFactoryJobInstanceBodyJobs {
    private 'job_name'?: string;
    private 'workspace_id'?: string;
    public constructor(jobName?: string, workspaceId?: string) { 
        this['job_name'] = jobName;
        this['workspace_id'] = workspaceId;
    }
    public withJobName(jobName: string): RetryFactoryJobInstanceBodyJobs {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withWorkspaceId(workspaceId: string): RetryFactoryJobInstanceBodyJobs {
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