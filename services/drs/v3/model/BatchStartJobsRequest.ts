import { BatchStartJobReq } from './BatchStartJobReq';


export class BatchStartJobsRequest {
    private 'X-Language'?: BatchStartJobsRequestXLanguageEnum | string;
    public body?: BatchStartJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchStartJobsRequestXLanguageEnum | string): BatchStartJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchStartJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchStartJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchStartJobReq): BatchStartJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchStartJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
