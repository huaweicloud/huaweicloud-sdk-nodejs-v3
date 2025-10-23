import { CheckWeakPasswordRequest } from './CheckWeakPasswordRequest';


export class CheckWeakpwdRequest {
    private 'X-Language'?: CheckWeakpwdRequestXLanguageEnum | string;
    public body?: CheckWeakPasswordRequest;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CheckWeakpwdRequestXLanguageEnum | string): CheckWeakpwdRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CheckWeakpwdRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CheckWeakpwdRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CheckWeakPasswordRequest): CheckWeakpwdRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckWeakpwdRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
