

export class ImportFlinkJobSavepointRequestBody {
    private 'job_id'?: number;
    private 'savepoint_path'?: string;
    public constructor(jobId?: number, savepointPath?: string) { 
        this['job_id'] = jobId;
        this['savepoint_path'] = savepointPath;
    }
    public withJobId(jobId: number): ImportFlinkJobSavepointRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withSavepointPath(savepointPath: string): ImportFlinkJobSavepointRequestBody {
        this['savepoint_path'] = savepointPath;
        return this;
    }
    public set savepointPath(savepointPath: string  | undefined) {
        this['savepoint_path'] = savepointPath;
    }
    public get savepointPath(): string | undefined {
        return this['savepoint_path'];
    }
}