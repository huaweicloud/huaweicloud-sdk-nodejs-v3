import { ValidatePolicyReqBody } from './ValidatePolicyReqBody';


export class ValidatePolicyRequest {
    public limit?: number;
    public marker?: string;
    private 'X-Language'?: ValidatePolicyRequestXLanguageEnum | string;
    public body?: ValidatePolicyReqBody;
    public constructor() { 
    }
    public withLimit(limit: number): ValidatePolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ValidatePolicyRequest {
        this['marker'] = marker;
        return this;
    }
    public withXLanguage(xLanguage: ValidatePolicyRequestXLanguageEnum | string): ValidatePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ValidatePolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ValidatePolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ValidatePolicyReqBody): ValidatePolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidatePolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
