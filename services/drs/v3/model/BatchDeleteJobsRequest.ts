import { BatchDeleteJobReq } from './BatchDeleteJobReq';


export class BatchDeleteJobsRequest {
    private 'X-Language'?: BatchDeleteJobsRequestXLanguageEnum | undefined;
    public body?: BatchDeleteJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchDeleteJobsRequestXLanguageEnum): BatchDeleteJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchDeleteJobsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchDeleteJobReq): BatchDeleteJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
