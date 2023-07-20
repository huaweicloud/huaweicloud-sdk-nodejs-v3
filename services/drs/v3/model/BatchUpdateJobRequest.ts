import { BatchModifyJobReq } from './BatchModifyJobReq';


export class BatchUpdateJobRequest {
    private 'X-Language'?: BatchUpdateJobRequestXLanguageEnum | string;
    public body?: BatchModifyJobReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchUpdateJobRequestXLanguageEnum | string): BatchUpdateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchUpdateJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchUpdateJobRequestXLanguageEnum | string | undefined {
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
