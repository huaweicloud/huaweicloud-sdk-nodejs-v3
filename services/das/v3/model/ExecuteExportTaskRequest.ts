

export class ExecuteExportTaskRequest {
    private 'connection_id'?: string;
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public constructor(connectionId?: string, jobId?: string) { 
        this['connection_id'] = connectionId;
        this['job_id'] = jobId;
    }
    public withConnectionId(connectionId: string): ExecuteExportTaskRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withJobId(jobId: string): ExecuteExportTaskRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ExecuteExportTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}