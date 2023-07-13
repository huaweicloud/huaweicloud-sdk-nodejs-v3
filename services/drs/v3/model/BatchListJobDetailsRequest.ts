import { BatchQueryJobReqPage } from './BatchQueryJobReqPage';


export class BatchListJobDetailsRequest {
    private 'X-Language'?: BatchListJobDetailsRequestXLanguageEnum | undefined;
    public body?: BatchQueryJobReqPage;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListJobDetailsRequestXLanguageEnum): BatchListJobDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListJobDetailsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryJobReqPage): BatchListJobDetailsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListJobDetailsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
