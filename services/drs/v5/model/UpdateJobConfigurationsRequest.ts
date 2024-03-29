import { ModifyParameterReq } from './ModifyParameterReq';


export class UpdateJobConfigurationsRequest {
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public body?: ModifyParameterReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateJobConfigurationsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): UpdateJobConfigurationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyParameterReq): UpdateJobConfigurationsRequest {
        this['body'] = body;
        return this;
    }
}