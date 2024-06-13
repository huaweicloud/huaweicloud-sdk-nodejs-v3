import { ConformancePackRequestBody } from './ConformancePackRequestBody';


export class CreateConformancePackRequest {
    private 'X-Language'?: CreateConformancePackRequestXLanguageEnum | string;
    public body?: ConformancePackRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateConformancePackRequestXLanguageEnum | string): CreateConformancePackRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateConformancePackRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateConformancePackRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ConformancePackRequestBody): CreateConformancePackRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConformancePackRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
