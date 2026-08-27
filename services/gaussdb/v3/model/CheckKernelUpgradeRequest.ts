import { UpgradePrecheckRequest } from './UpgradePrecheckRequest';


export class CheckKernelUpgradeRequest {
    private 'X-Language'?: CheckKernelUpgradeRequestXLanguageEnum | string;
    public body?: UpgradePrecheckRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CheckKernelUpgradeRequestXLanguageEnum | string): CheckKernelUpgradeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CheckKernelUpgradeRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CheckKernelUpgradeRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpgradePrecheckRequest): CheckKernelUpgradeRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckKernelUpgradeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
