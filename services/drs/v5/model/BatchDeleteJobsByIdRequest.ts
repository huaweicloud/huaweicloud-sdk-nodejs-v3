import { BatchDeleteJobReq } from './BatchDeleteJobReq';


export class BatchDeleteJobsByIdRequest {
    private 'X-Language'?: BatchDeleteJobsByIdRequestXLanguageEnum | string;
    public body?: BatchDeleteJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchDeleteJobsByIdRequestXLanguageEnum | string): BatchDeleteJobsByIdRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchDeleteJobsByIdRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchDeleteJobsByIdRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDeleteJobReq): BatchDeleteJobsByIdRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteJobsByIdRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
