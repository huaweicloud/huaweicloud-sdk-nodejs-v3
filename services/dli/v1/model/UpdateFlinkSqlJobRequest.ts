import { UpdateFlinkSqlJobRequestBody } from './UpdateFlinkSqlJobRequestBody';


export class UpdateFlinkSqlJobRequest {
    private 'job_id'?: number;
    public body?: UpdateFlinkSqlJobRequestBody;
    public constructor(jobId?: number) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: number): UpdateFlinkSqlJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withBody(body: UpdateFlinkSqlJobRequestBody): UpdateFlinkSqlJobRequest {
        this['body'] = body;
        return this;
    }
}