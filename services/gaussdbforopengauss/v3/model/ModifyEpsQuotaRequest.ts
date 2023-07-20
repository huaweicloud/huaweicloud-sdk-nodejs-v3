import { ModifyEpsQuotaRequestBody } from './ModifyEpsQuotaRequestBody';


export class ModifyEpsQuotaRequest {
    private 'X-Language'?: ModifyEpsQuotaRequestXLanguageEnum | string;
    public body?: ModifyEpsQuotaRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ModifyEpsQuotaRequestXLanguageEnum | string): ModifyEpsQuotaRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyEpsQuotaRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyEpsQuotaRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyEpsQuotaRequestBody): ModifyEpsQuotaRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyEpsQuotaRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
