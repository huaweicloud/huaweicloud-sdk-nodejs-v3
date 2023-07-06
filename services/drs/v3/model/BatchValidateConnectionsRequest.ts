import { BatchTestConnectionReq } from './BatchTestConnectionReq';


export class BatchValidateConnectionsRequest {
    private 'X-Language'?: BatchValidateConnectionsRequestXLanguageEnum | undefined;
    public body?: BatchTestConnectionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchValidateConnectionsRequestXLanguageEnum): BatchValidateConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchValidateConnectionsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
