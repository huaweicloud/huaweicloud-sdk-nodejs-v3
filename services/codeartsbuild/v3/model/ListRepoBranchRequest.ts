

export class ListRepoBranchRequest {
    private 'job_id'?: string;
    private 'repository_name'?: string;
    public constructor(jobId?: string, repositoryName?: string) { 
        this['job_id'] = jobId;
        this['repository_name'] = repositoryName;
    }
    public withJobId(jobId: string): ListRepoBranchRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRepositoryName(repositoryName: string): ListRepoBranchRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
}