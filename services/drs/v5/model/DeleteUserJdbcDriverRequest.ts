import { DeleteUserDriverReq } from './DeleteUserDriverReq';


export class DeleteUserJdbcDriverRequest {
    private 'X-Language'?: DeleteUserJdbcDriverRequestXLanguageEnum | string;
    public body?: DeleteUserDriverReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DeleteUserJdbcDriverRequestXLanguageEnum | string): DeleteUserJdbcDriverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteUserJdbcDriverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteUserJdbcDriverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteUserDriverReq): DeleteUserJdbcDriverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteUserJdbcDriverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
