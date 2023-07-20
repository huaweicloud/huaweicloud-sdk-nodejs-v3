

export class ListGraphsRespSchemaPath {
    private 'job_id'?: string;
    public path?: string;
    public status?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): ListGraphsRespSchemaPath {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withPath(path: string): ListGraphsRespSchemaPath {
        this['path'] = path;
        return this;
    }
    public withStatus(status: string): ListGraphsRespSchemaPath {
        this['status'] = status;
        return this;
    }
}