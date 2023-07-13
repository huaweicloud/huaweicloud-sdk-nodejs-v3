import { BatchQueryJobReq } from './BatchQueryJobReq';


export class BatchListStructProcessRequest {
    private 'X-Language'?: BatchListStructProcessRequestXLanguageEnum | undefined;
    public body?: BatchQueryJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListStructProcessRequestXLanguageEnum): BatchListStructProcessRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListStructProcessRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
