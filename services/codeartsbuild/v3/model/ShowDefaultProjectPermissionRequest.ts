

export class ShowDefaultProjectPermissionRequest {
    private 'project_id'?: string;
    private 'job_id'?: string;
    public constructor(projectId?: string, jobId?: string) { 
        this['project_id'] = projectId;
        this['job_id'] = jobId;
    }
    public withProjectId(projectId: string): ShowDefaultProjectPermissionRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobId(jobId: string): ShowDefaultProjectPermissionRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}