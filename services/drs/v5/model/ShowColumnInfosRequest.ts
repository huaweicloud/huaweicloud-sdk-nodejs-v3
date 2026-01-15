import { ShowColumnInfoReq } from './ShowColumnInfoReq';


export class ShowColumnInfosRequest {
    private 'X-Language'?: ShowColumnInfosRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public body?: ShowColumnInfoReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ShowColumnInfosRequestXLanguageEnum | string): ShowColumnInfosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowColumnInfosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowColumnInfosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowColumnInfosRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ShowColumnInfoReq): ShowColumnInfosRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowColumnInfosRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
