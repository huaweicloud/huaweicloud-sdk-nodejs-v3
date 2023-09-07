import { DataProcessReq } from './DataProcessReq';


export class CheckDataFilterRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CheckDataFilterRequestXLanguageEnum | string;
    public body?: DataProcessReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CheckDataFilterRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CheckDataFilterRequestXLanguageEnum | string): CheckDataFilterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CheckDataFilterRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CheckDataFilterRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DataProcessReq): CheckDataFilterRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckDataFilterRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
