import { UpgradeInstancesRequestBody } from './UpgradeInstancesRequestBody';


export class BatchShowUpgradeCandidateVersionsRequest {
    private 'X-Language'?: BatchShowUpgradeCandidateVersionsRequestXLanguageEnum | string;
    public body?: UpgradeInstancesRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchShowUpgradeCandidateVersionsRequestXLanguageEnum | string): BatchShowUpgradeCandidateVersionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchShowUpgradeCandidateVersionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchShowUpgradeCandidateVersionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpgradeInstancesRequestBody): BatchShowUpgradeCandidateVersionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchShowUpgradeCandidateVersionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
