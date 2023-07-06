import { BatchUpdateSrcUserReq } from './BatchUpdateSrcUserReq';


export class BatchUpdateUserRequest {
    private 'X-Language'?: BatchUpdateUserRequestXLanguageEnum | undefined;
    public body?: BatchUpdateSrcUserReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: BatchUpdateUserRequestXLanguageEnum): BatchUpdateUserRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchUpdateUserRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
