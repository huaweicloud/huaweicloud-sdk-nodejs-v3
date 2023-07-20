import { WeakPasswordRequestBody } from './WeakPasswordRequestBody';


export class ValidateWeakPasswordRequest {
    private 'X-Language'?: ValidateWeakPasswordRequestXLanguageEnum | string;
    public body?: WeakPasswordRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ValidateWeakPasswordRequestXLanguageEnum | string): ValidateWeakPasswordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ValidateWeakPasswordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ValidateWeakPasswordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: WeakPasswordRequestBody): ValidateWeakPasswordRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidateWeakPasswordRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
