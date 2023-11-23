import { DeleteDriverReq } from './DeleteDriverReq';


export class DeleteJdbcDriverRequest {
    private 'X-Language'?: DeleteJdbcDriverRequestXLanguageEnum | string;
    public body?: DeleteDriverReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DeleteJdbcDriverRequestXLanguageEnum | string): DeleteJdbcDriverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DeleteJdbcDriverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DeleteJdbcDriverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteDriverReq): DeleteJdbcDriverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteJdbcDriverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
