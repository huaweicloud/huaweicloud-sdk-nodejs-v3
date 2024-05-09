import { ExecuteFlinkJobSavepointRequestBody } from './ExecuteFlinkJobSavepointRequestBody';


export class ExecuteFlinkJobSavepointRequest {
    private 'job_id'?: string;
    public body?: ExecuteFlinkJobSavepointRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ExecuteFlinkJobSavepointRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ExecuteFlinkJobSavepointRequestBody): ExecuteFlinkJobSavepointRequest {
        this['body'] = body;
        return this;
    }
}