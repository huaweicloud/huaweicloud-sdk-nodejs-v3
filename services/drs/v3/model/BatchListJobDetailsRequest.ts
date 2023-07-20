import { BatchQueryJobReqPage } from './BatchQueryJobReqPage';


export class BatchListJobDetailsRequest {
    private 'X-Language'?: BatchListJobDetailsRequestXLanguageEnum | string;
    public body?: BatchQueryJobReqPage;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListJobDetailsRequestXLanguageEnum | string): BatchListJobDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListJobDetailsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchListJobDetailsRequestXLanguageEnum | string | undefined {
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
