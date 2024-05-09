import { ImportFlinkJobSavepointRequestBody } from './ImportFlinkJobSavepointRequestBody';


export class ImportFlinkJobSavepointRequest {
    private 'job_id'?: string;
    public body?: ImportFlinkJobSavepointRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ImportFlinkJobSavepointRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ImportFlinkJobSavepointRequestBody): ImportFlinkJobSavepointRequest {
        this['body'] = body;
        return this;
    }
}