import { UnbindLtsConfigRequestBody } from './UnbindLtsConfigRequestBody';


export class UnbindLtsConfigRequest {
    private 'X-Language'?: UnbindLtsConfigRequestXLanguageEnum | string;
    public body?: UnbindLtsConfigRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: UnbindLtsConfigRequestXLanguageEnum | string): UnbindLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UnbindLtsConfigRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UnbindLtsConfigRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UnbindLtsConfigRequestBody): UnbindLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UnbindLtsConfigRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
