import { BindLtsConfigRequestBody } from './BindLtsConfigRequestBody';


export class BindLtsConfigRequest {
    private 'X-Language'?: BindLtsConfigRequestXLanguageEnum | string;
    public body?: BindLtsConfigRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BindLtsConfigRequestXLanguageEnum | string): BindLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BindLtsConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BindLtsConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BindLtsConfigRequestBody): BindLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BindLtsConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
