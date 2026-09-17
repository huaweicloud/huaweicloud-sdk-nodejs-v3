

export class RetryPipelineRequest {
    private 'repo_https_url'?: string;
    private 'job_run_ids'?: Array<string>;
    public constructor() { 
    }
    public withRepoHttpsUrl(repoHttpsUrl: string): RetryPipelineRequest {
        this['repo_https_url'] = repoHttpsUrl;
        return this;
    }
    public set repoHttpsUrl(repoHttpsUrl: string  | undefined) {
        this['repo_https_url'] = repoHttpsUrl;
    }
    public get repoHttpsUrl(): string | undefined {
        return this['repo_https_url'];
    }
    public withJobRunIds(jobRunIds: Array<string>): RetryPipelineRequest {
        this['job_run_ids'] = jobRunIds;
        return this;
    }
    public set jobRunIds(jobRunIds: Array<string>  | undefined) {
        this['job_run_ids'] = jobRunIds;
    }
    public get jobRunIds(): Array<string> | undefined {
        return this['job_run_ids'];
    }
}