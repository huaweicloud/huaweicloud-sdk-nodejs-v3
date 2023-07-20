import { BatchUpdateSrcUserReq } from './BatchUpdateSrcUserReq';


export class BatchUpdateUserRequest {
    private 'X-Language'?: BatchUpdateUserRequestXLanguageEnum | string;
    public body?: BatchUpdateSrcUserReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchUpdateUserRequestXLanguageEnum | string): BatchUpdateUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchUpdateUserRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchUpdateUserRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: BatchUpdateSrcUserReq): BatchUpdateUserRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateUserRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
