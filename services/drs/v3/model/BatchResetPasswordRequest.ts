import { BatchModifyPwdReq } from './BatchModifyPwdReq';


export class BatchResetPasswordRequest {
    private 'X-Language'?: BatchResetPasswordRequestXLanguageEnum | undefined;
    public body?: BatchModifyPwdReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchResetPasswordRequestXLanguageEnum): BatchResetPasswordRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchResetPasswordRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
