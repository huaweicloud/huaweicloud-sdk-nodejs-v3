

export class ShowFactoryJobDependInstancesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'job_name'?: string;
    public relation?: string;
    public constructor(workspace?: string, jobName?: string) { 
        this['workspace'] = workspace;
        this['job_name'] = jobName;
    }
    public withWorkspace(workspace: string): ShowFactoryJobDependInstancesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowFactoryJobDependInstancesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ShowFactoryJobDependInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withJobName(jobName: string): ShowFactoryJobDependInstancesRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withRelation(relation: string): ShowFactoryJobDependInstancesRequest {
        this['relation'] = relation;
        return this;
    }
}