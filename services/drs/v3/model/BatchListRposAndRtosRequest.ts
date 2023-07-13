import { BatchQueryRpoAndRtoReq } from './BatchQueryRpoAndRtoReq';


export class BatchListRposAndRtosRequest {
    private 'X-Language'?: BatchListRposAndRtosRequestXLanguageEnum | undefined;
    public body?: BatchQueryRpoAndRtoReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListRposAndRtosRequestXLanguageEnum): BatchListRposAndRtosRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListRposAndRtosRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
