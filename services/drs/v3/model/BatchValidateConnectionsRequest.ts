import { BatchTestConnectionReq } from './BatchTestConnectionReq';


export class BatchValidateConnectionsRequest {
    private 'X-Language'?: BatchValidateConnectionsRequestXLanguageEnum | string;
    public body?: BatchTestConnectionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchValidateConnectionsRequestXLanguageEnum | string): BatchValidateConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchValidateConnectionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchValidateConnectionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchTestConnectionReq): BatchValidateConnectionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchValidateConnectionsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
