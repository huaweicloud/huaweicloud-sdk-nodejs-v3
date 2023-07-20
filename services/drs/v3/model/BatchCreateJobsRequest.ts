import { BatchCreateJobReq } from './BatchCreateJobReq';


export class BatchCreateJobsRequest {
    private 'X-Language'?: BatchCreateJobsRequestXLanguageEnum | string;
    public body?: BatchCreateJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchCreateJobsRequestXLanguageEnum | string): BatchCreateJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchCreateJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchCreateJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchCreateJobReq): BatchCreateJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
