import { BatchDeleteBackupRequestBody } from './BatchDeleteBackupRequestBody';


export class BatchDeleteBackupRequest {
    private 'X-Language'?: BatchDeleteBackupRequestXLanguageEnum | string;
    public body?: BatchDeleteBackupRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchDeleteBackupRequestXLanguageEnum | string): BatchDeleteBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchDeleteBackupRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchDeleteBackupRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDeleteBackupRequestBody): BatchDeleteBackupRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteBackupRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
