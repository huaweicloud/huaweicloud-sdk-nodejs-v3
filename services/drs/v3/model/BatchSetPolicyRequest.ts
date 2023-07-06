import { BatchSetupSyncPolicyReq } from './BatchSetupSyncPolicyReq';


export class BatchSetPolicyRequest {
    private 'X-Language'?: BatchSetPolicyRequestXLanguageEnum | undefined;
    public body?: BatchSetupSyncPolicyReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchSetPolicyRequestXLanguageEnum): BatchSetPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchSetPolicyRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
