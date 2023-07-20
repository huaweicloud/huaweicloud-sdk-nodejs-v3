import { QueryUserSelectedObjectInfoReq } from './QueryUserSelectedObjectInfoReq';


export class ShowObjectMappingRequest {
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public body?: QueryUserSelectedObjectInfoReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowObjectMappingRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ShowObjectMappingRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryUserSelectedObjectInfoReq): ShowObjectMappingRequest {
        this['body'] = body;
        return this;
    }
}