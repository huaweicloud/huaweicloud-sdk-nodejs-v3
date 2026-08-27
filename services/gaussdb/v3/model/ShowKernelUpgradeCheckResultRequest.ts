import { UpgradePrecheckRequest } from './UpgradePrecheckRequest';


export class ShowKernelUpgradeCheckResultRequest {
    private 'X-Language'?: ShowKernelUpgradeCheckResultRequestXLanguageEnum | string;
    public body?: UpgradePrecheckRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowKernelUpgradeCheckResultRequestXLanguageEnum | string): ShowKernelUpgradeCheckResultRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowKernelUpgradeCheckResultRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowKernelUpgradeCheckResultRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpgradePrecheckRequest): ShowKernelUpgradeCheckResultRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowKernelUpgradeCheckResultRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
