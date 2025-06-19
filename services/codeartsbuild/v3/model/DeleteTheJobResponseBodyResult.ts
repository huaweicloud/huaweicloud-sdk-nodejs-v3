

export class DeleteTheJobResponseBodyResult {
    private 'job_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): DeleteTheJobResponseBodyResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withProjectId(projectId: string): DeleteTheJobResponseBodyResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}