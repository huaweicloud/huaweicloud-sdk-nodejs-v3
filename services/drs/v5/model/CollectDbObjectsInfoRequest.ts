import { QuerySelectObjectInfoReq } from './QuerySelectObjectInfoReq';


export class CollectDbObjectsInfoRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CollectDbObjectsInfoRequestXLanguageEnum | string;
    public body?: QuerySelectObjectInfoReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CollectDbObjectsInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CollectDbObjectsInfoRequestXLanguageEnum | string): CollectDbObjectsInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectDbObjectsInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CollectDbObjectsInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QuerySelectObjectInfoReq): CollectDbObjectsInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectDbObjectsInfoRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
