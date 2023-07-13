import { BatchQueryProgressReq } from './BatchQueryProgressReq';


export class BatchListProgressesRequest {
    private 'X-Language'?: BatchListProgressesRequestXLanguageEnum | undefined;
    public body?: BatchQueryProgressReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchListProgressesRequestXLanguageEnum): BatchListProgressesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchListProgressesRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchQueryProgressReq): BatchListProgressesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListProgressesRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
