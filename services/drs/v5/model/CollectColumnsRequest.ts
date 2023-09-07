import { QueryColumnReq } from './QueryColumnReq';


export class CollectColumnsRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CollectColumnsRequestXLanguageEnum | string;
    public body?: QueryColumnReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CollectColumnsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CollectColumnsRequestXLanguageEnum | string): CollectColumnsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectColumnsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CollectColumnsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryColumnReq): CollectColumnsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectColumnsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
