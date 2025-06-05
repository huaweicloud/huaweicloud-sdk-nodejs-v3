

export class CheckJobNameIsExistsRequest {
    private 'project_id'?: string;
    private 'job_name'?: string;
    public constructor(projectId?: string, jobName?: string) { 
        this['project_id'] = projectId;
        this['job_name'] = jobName;
    }
    public withProjectId(projectId: string): CheckJobNameIsExistsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobName(jobName: string): CheckJobNameIsExistsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
}