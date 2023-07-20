import { BatchRetryReq } from './BatchRetryReq';


export class BatchRestoreTaskRequest {
    private 'X-Language'?: BatchRestoreTaskRequestXLanguageEnum | string;
    public body?: BatchRetryReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchRestoreTaskRequestXLanguageEnum | string): BatchRestoreTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchRestoreTaskRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchRestoreTaskRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchRetryReq): BatchRestoreTaskRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchRestoreTaskRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
