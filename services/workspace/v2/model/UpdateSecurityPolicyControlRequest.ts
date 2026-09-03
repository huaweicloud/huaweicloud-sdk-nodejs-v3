import { UpdateSecurityPolicyControlReq } from './UpdateSecurityPolicyControlReq';


export class UpdateSecurityPolicyControlRequest {
    private 'X-Language'?: UpdateSecurityPolicyControlRequestXLanguageEnum | string;
    public body?: UpdateSecurityPolicyControlReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: UpdateSecurityPolicyControlRequestXLanguageEnum | string): UpdateSecurityPolicyControlRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateSecurityPolicyControlRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateSecurityPolicyControlRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateSecurityPolicyControlReq): UpdateSecurityPolicyControlRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSecurityPolicyControlRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
