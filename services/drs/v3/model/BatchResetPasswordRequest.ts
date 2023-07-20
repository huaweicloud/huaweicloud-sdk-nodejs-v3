import { BatchModifyPwdReq } from './BatchModifyPwdReq';


export class BatchResetPasswordRequest {
    private 'X-Language'?: BatchResetPasswordRequestXLanguageEnum | string;
    public body?: BatchModifyPwdReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchResetPasswordRequestXLanguageEnum | string): BatchResetPasswordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchResetPasswordRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchResetPasswordRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchModifyPwdReq): BatchResetPasswordRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchResetPasswordRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
