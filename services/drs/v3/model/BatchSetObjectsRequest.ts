import { BatchUpdateDatabaseObjectReq } from './BatchUpdateDatabaseObjectReq';


export class BatchSetObjectsRequest {
    private 'X-Language'?: BatchSetObjectsRequestXLanguageEnum | undefined;
    public body?: BatchUpdateDatabaseObjectReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetObjectsRequestXLanguageEnum): BatchSetObjectsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetObjectsRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchUpdateDatabaseObjectReq): BatchSetObjectsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetObjectsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
