import { BatchQueryPrecheckResultReq } from './BatchQueryPrecheckResultReq';


export class BatchCheckResultsRequest {
    private 'X-Language'?: BatchCheckResultsRequestXLanguageEnum | undefined;
    public body?: BatchQueryPrecheckResultReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchCheckResultsRequestXLanguageEnum): BatchCheckResultsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchCheckResultsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryPrecheckResultReq): BatchCheckResultsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCheckResultsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
