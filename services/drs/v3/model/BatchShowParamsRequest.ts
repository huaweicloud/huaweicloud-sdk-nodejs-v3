import { BatchQueryParamReq } from './BatchQueryParamReq';


export class BatchShowParamsRequest {
    private 'X-Language'?: BatchShowParamsRequestXLanguageEnum | undefined;
    public body?: BatchQueryParamReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchShowParamsRequestXLanguageEnum): BatchShowParamsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchShowParamsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryParamReq): BatchShowParamsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchShowParamsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
