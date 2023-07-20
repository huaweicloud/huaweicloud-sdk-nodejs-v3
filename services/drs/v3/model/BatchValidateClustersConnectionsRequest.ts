import { BatchSpecialTestConnectionReq } from './BatchSpecialTestConnectionReq';


export class BatchValidateClustersConnectionsRequest {
    private 'X-Language'?: BatchValidateClustersConnectionsRequestXLanguageEnum | string;
    public body?: BatchSpecialTestConnectionReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchValidateClustersConnectionsRequestXLanguageEnum | string): BatchValidateClustersConnectionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchValidateClustersConnectionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchValidateClustersConnectionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchSpecialTestConnectionReq): BatchValidateClustersConnectionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchValidateClustersConnectionsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
