import { BatchSwitchoverReq } from './BatchSwitchoverReq';


export class BatchSwitchoverRequest {
    private 'X-Language'?: BatchSwitchoverRequestXLanguageEnum | string;
    public body?: BatchSwitchoverReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSwitchoverRequestXLanguageEnum | string): BatchSwitchoverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSwitchoverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchSwitchoverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchSwitchoverReq): BatchSwitchoverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSwitchoverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
