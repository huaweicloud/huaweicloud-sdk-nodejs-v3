import { BatchModifyJobReq } from './BatchModifyJobReq';


export class BatchUpdateJobRequest {
    private 'X-Language'?: BatchUpdateJobRequestXLanguageEnum | undefined;
    public body?: BatchModifyJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchUpdateJobRequestXLanguageEnum): BatchUpdateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchUpdateJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: BatchModifyJobReq): BatchUpdateJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
