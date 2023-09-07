import { BatchStopJobActionReq } from './BatchStopJobActionReq';


export class BatchStopJobsActionRequest {
    private 'X-Language'?: BatchStopJobsActionRequestXLanguageEnum | string;
    public body?: BatchStopJobActionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchStopJobsActionRequestXLanguageEnum | string): BatchStopJobsActionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchStopJobsActionRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchStopJobsActionRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchStopJobActionReq): BatchStopJobsActionRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchStopJobsActionRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
