

export class ShowJobBuildSuccessRatioRequest {
    private 'job_id'?: string;
    private 'repository_name'?: string;
    public branch?: string;
    public interval?: number;
    public constructor(jobId?: string, repositoryName?: string, interval?: number) { 
        this['job_id'] = jobId;
        this['repository_name'] = repositoryName;
        this['interval'] = interval;
    }
    public withJobId(jobId: string): ShowJobBuildSuccessRatioRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRepositoryName(repositoryName: string): ShowJobBuildSuccessRatioRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withBranch(branch: string): ShowJobBuildSuccessRatioRequest {
        this['branch'] = branch;
        return this;
    }
    public withInterval(interval: number): ShowJobBuildSuccessRatioRequest {
        this['interval'] = interval;
        return this;
    }
}