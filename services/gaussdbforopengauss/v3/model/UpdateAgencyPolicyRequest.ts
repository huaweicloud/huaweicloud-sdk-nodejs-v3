import { UpdateAgencyPolicyRequestBody } from './UpdateAgencyPolicyRequestBody';


export class UpdateAgencyPolicyRequest {
    private 'X-Language'?: UpdateAgencyPolicyRequestXLanguageEnum | string;
    private 'agency_name'?: string;
    public body?: UpdateAgencyPolicyRequestBody;
    public constructor(agencyName?: string) { 
        this['agency_name'] = agencyName;
    }
    public withXLanguage(xLanguage: UpdateAgencyPolicyRequestXLanguageEnum | string): UpdateAgencyPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateAgencyPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateAgencyPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withAgencyName(agencyName: string): UpdateAgencyPolicyRequest {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withBody(body: UpdateAgencyPolicyRequestBody): UpdateAgencyPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAgencyPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
