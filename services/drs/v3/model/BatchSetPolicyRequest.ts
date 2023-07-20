import { BatchSetupSyncPolicyReq } from './BatchSetupSyncPolicyReq';


export class BatchSetPolicyRequest {
    private 'X-Language'?: BatchSetPolicyRequestXLanguageEnum | string;
    public body?: BatchSetupSyncPolicyReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetPolicyRequestXLanguageEnum | string): BatchSetPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchSetPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchSetupSyncPolicyReq): BatchSetPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSetPolicyRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
