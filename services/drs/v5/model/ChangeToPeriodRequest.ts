import { ToPeriodReq } from './ToPeriodReq';


export class ChangeToPeriodRequest {
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public body?: ToPeriodReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ChangeToPeriodRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ChangeToPeriodRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ToPeriodReq): ChangeToPeriodRequest {
        this['body'] = body;
        return this;
    }
}