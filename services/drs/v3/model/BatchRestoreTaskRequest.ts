import { BatchRetryReq } from './BatchRetryReq';


export class BatchRestoreTaskRequest {
    private 'X-Language'?: BatchRestoreTaskRequestXLanguageEnum | undefined;
    public body?: BatchRetryReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchRestoreTaskRequestXLanguageEnum): BatchRestoreTaskRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchRestoreTaskRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
