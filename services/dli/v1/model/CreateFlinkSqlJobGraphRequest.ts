import { CreateFlinkSqlJobGraphRequestBody } from './CreateFlinkSqlJobGraphRequestBody';


export class CreateFlinkSqlJobGraphRequest {
    private 'job_id'?: string;
    public body?: CreateFlinkSqlJobGraphRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CreateFlinkSqlJobGraphRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: CreateFlinkSqlJobGraphRequestBody): CreateFlinkSqlJobGraphRequest {
        this['body'] = body;
        return this;
    }
}