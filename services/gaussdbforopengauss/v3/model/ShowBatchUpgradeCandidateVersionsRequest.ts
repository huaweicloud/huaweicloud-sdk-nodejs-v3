import { UpgradeInstancesRequestBody } from './UpgradeInstancesRequestBody';


export class ShowBatchUpgradeCandidateVersionsRequest {
    private 'X-Language'?: ShowBatchUpgradeCandidateVersionsRequestXLanguageEnum | string;
    public body?: UpgradeInstancesRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowBatchUpgradeCandidateVersionsRequestXLanguageEnum | string): ShowBatchUpgradeCandidateVersionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowBatchUpgradeCandidateVersionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowBatchUpgradeCandidateVersionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpgradeInstancesRequestBody): ShowBatchUpgradeCandidateVersionsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBatchUpgradeCandidateVersionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
