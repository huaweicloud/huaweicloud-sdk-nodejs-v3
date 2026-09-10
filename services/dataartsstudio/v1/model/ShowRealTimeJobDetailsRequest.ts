

export class ShowRealTimeJobDetailsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'job_name'?: string;
    public constructor(workspace?: string, jobName?: string) { 
        this['workspace'] = workspace;
        this['job_name'] = jobName;
    }
    public withWorkspace(workspace: string): ShowRealTimeJobDetailsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowRealTimeJobDetailsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withJobName(jobName: string): ShowRealTimeJobDetailsRequest {
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