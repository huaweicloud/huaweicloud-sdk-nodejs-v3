import { ShowEpsRemainingQuotaRequestBody } from './ShowEpsRemainingQuotaRequestBody';


export class ShowEpsRemainingQuotaRequest {
    private 'X-Language'?: ShowEpsRemainingQuotaRequestXLanguageEnum | string;
    public body?: ShowEpsRemainingQuotaRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowEpsRemainingQuotaRequestXLanguageEnum | string): ShowEpsRemainingQuotaRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowEpsRemainingQuotaRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowEpsRemainingQuotaRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ShowEpsRemainingQuotaRequestBody): ShowEpsRemainingQuotaRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEpsRemainingQuotaRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
