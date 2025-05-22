

export class ShowYamlTemplateRequest {
    private 'job_id'?: string;
    private 'default_host'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowYamlTemplateRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDefaultHost(defaultHost: string): ShowYamlTemplateRequest {
        this['default_host'] = defaultHost;
        return this;
    }
    public set defaultHost(defaultHost: string  | undefined) {
        this['default_host'] = defaultHost;
    }
    public get defaultHost(): string | undefined {
        return this['default_host'];
    }
}