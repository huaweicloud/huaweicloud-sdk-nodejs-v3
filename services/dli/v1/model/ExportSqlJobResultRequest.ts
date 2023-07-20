import { ExportSqlResultRequestBody } from './ExportSqlResultRequestBody';


export class ExportSqlJobResultRequest {
    private 'job_id'?: string;
    public body?: ExportSqlResultRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ExportSqlJobResultRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ExportSqlResultRequestBody): ExportSqlJobResultRequest {
        this['body'] = body;
        return this;
    }
}