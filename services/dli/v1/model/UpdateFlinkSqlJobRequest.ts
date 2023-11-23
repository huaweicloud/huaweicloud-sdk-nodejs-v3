import { UpdateFlinkSqlRequestBody } from './UpdateFlinkSqlRequestBody';


export class UpdateFlinkSqlJobRequest {
    private 'job_id'?: number;
    public body?: UpdateFlinkSqlRequestBody;
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
    public withBody(body: UpdateFlinkSqlRequestBody): UpdateFlinkSqlJobRequest {
        this['body'] = body;
        return this;
    }
}