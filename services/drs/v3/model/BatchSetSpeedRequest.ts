import { BatchLimitSpeedReq } from './BatchLimitSpeedReq';


export class BatchSetSpeedRequest {
    private 'X-Language'?: BatchSetSpeedRequestXLanguageEnum | string;
    public body?: BatchLimitSpeedReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetSpeedRequestXLanguageEnum | string): BatchSetSpeedRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetSpeedRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchSetSpeedRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchLimitSpeedReq): BatchSetSpeedRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetSpeedRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
