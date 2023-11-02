import { QueryDbPositionReq } from './QueryDbPositionReq';


export class CollectPositionAsyncRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CollectPositionAsyncRequestXLanguageEnum | string;
    public body?: QueryDbPositionReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CollectPositionAsyncRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CollectPositionAsyncRequestXLanguageEnum | string): CollectPositionAsyncRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectPositionAsyncRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CollectPositionAsyncRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryDbPositionReq): CollectPositionAsyncRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectPositionAsyncRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
