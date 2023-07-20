import { BatchQueryRpoAndRtoReq } from './BatchQueryRpoAndRtoReq';


export class BatchListRposAndRtosRequest {
    private 'X-Language'?: BatchListRposAndRtosRequestXLanguageEnum | string;
    public body?: BatchQueryRpoAndRtoReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListRposAndRtosRequestXLanguageEnum | string): BatchListRposAndRtosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListRposAndRtosRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchListRposAndRtosRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryRpoAndRtoReq): BatchListRposAndRtosRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListRposAndRtosRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
