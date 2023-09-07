import { StopJobActionReq } from './StopJobActionReq';


export class StopJobActionRequest {
    private 'job_id'?: string;
    private 'X-Language'?: StopJobActionRequestXLanguageEnum | string;
    public body?: StopJobActionReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): StopJobActionRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: StopJobActionRequestXLanguageEnum | string): StopJobActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StopJobActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StopJobActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: StopJobActionReq): StopJobActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StopJobActionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
