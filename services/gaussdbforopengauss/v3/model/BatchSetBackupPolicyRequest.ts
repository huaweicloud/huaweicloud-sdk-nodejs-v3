import { BatchSetBackupPolicyRequestBody } from './BatchSetBackupPolicyRequestBody';


export class BatchSetBackupPolicyRequest {
    private 'X-Language'?: BatchSetBackupPolicyRequestXLanguageEnum | string;
    public body?: BatchSetBackupPolicyRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetBackupPolicyRequestXLanguageEnum | string): BatchSetBackupPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetBackupPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchSetBackupPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchSetBackupPolicyRequestBody): BatchSetBackupPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetBackupPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
