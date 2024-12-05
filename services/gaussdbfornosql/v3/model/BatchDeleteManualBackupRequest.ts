import { BatchDeleteManualBackupRequestBody } from './BatchDeleteManualBackupRequestBody';


export class BatchDeleteManualBackupRequest {
    private 'X-Language'?: BatchDeleteManualBackupRequestXLanguageEnum | string;
    public body?: BatchDeleteManualBackupRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchDeleteManualBackupRequestXLanguageEnum | string): BatchDeleteManualBackupRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchDeleteManualBackupRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchDeleteManualBackupRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchDeleteManualBackupRequestBody): BatchDeleteManualBackupRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteManualBackupRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
