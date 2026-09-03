

export class ValidateTrainingJobNameRequest {
    private 'job_name'?: string;
    private 'workspace_id'?: string;
    public constructor(jobName?: string) { 
        this['job_name'] = jobName;
    }
    public withJobName(jobName: string): ValidateTrainingJobNameRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withWorkspaceId(workspaceId: string): ValidateTrainingJobNameRequest {
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