import { BatchAsyncCreateJobReq } from './BatchAsyncCreateJobReq';


export class BatchCreateJobsAsyncRequest {
    private 'X-Language'?: BatchCreateJobsAsyncRequestXLanguageEnum | undefined;
    public body?: BatchAsyncCreateJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchCreateJobsAsyncRequestXLanguageEnum): BatchCreateJobsAsyncRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchCreateJobsAsyncRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchAsyncCreateJobReq): BatchCreateJobsAsyncRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateJobsAsyncRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
