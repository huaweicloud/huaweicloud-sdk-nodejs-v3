import { BatchCreateJobReq } from './BatchCreateJobReq';


export class BatchCreateJobsRequest {
    private 'X-Language'?: BatchCreateJobsRequestXLanguageEnum | undefined;
    public body?: BatchCreateJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchCreateJobsRequestXLanguageEnum): BatchCreateJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchCreateJobsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
