import { CreateObjectCompareJobReq } from './CreateObjectCompareJobReq';


export class CreateObjectLevelCompareJobRequest {
    private 'X-Language'?: CreateObjectLevelCompareJobRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: CreateObjectCompareJobReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: CreateObjectLevelCompareJobRequestXLanguageEnum | string): CreateObjectLevelCompareJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateObjectLevelCompareJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateObjectLevelCompareJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): CreateObjectLevelCompareJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: CreateObjectCompareJobReq): CreateObjectLevelCompareJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateObjectLevelCompareJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
