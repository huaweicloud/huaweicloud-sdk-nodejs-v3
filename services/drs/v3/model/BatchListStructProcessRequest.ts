import { BatchQueryJobReq } from './BatchQueryJobReq';


export class BatchListStructProcessRequest {
    private 'X-Language'?: BatchListStructProcessRequestXLanguageEnum | string;
    public body?: BatchQueryJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListStructProcessRequestXLanguageEnum | string): BatchListStructProcessRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListStructProcessRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchListStructProcessRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryJobReq): BatchListStructProcessRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListStructProcessRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
