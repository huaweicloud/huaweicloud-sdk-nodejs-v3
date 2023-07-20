import { BatchPauseJobReq } from './BatchPauseJobReq';


export class BatchStopJobsRequest {
    private 'X-Language'?: BatchStopJobsRequestXLanguageEnum | string;
    public body?: BatchPauseJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchStopJobsRequestXLanguageEnum | string): BatchStopJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchStopJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchStopJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchPauseJobReq): BatchStopJobsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchStopJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
