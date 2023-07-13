import { BatchPauseJobReq } from './BatchPauseJobReq';


export class BatchStopJobsRequest {
    private 'X-Language'?: BatchStopJobsRequestXLanguageEnum | undefined;
    public body?: BatchPauseJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchStopJobsRequestXLanguageEnum): BatchStopJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchStopJobsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
