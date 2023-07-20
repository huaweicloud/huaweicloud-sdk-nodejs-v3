import { BatchPrecheckReq } from './BatchPrecheckReq';


export class BatchCheckJobsRequest {
    private 'X-Language'?: BatchCheckJobsRequestXLanguageEnum | string;
    public body?: BatchPrecheckReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchCheckJobsRequestXLanguageEnum | string): BatchCheckJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchCheckJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchCheckJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchPrecheckReq): BatchCheckJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCheckJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
