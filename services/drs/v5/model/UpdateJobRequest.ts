import { SingleUpdateJobReq } from './SingleUpdateJobReq';


export class UpdateJobRequest {
    private 'job_id'?: string;
    private 'X-Language'?: UpdateJobRequestXLanguageEnum | string;
    public body?: SingleUpdateJobReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: UpdateJobRequestXLanguageEnum | string): UpdateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: SingleUpdateJobReq): UpdateJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
