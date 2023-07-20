import { JobActionReq } from './JobActionReq';


export class ExecuteJobActionRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ExecuteJobActionRequestXLanguageEnum | string;
    public body?: JobActionReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ExecuteJobActionRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ExecuteJobActionRequestXLanguageEnum | string): ExecuteJobActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExecuteJobActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExecuteJobActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: JobActionReq): ExecuteJobActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteJobActionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
