import { UploadJdbcDriverRequestBody } from './UploadJdbcDriverRequestBody';


export class UploadJdbcDriverRequest {
    private 'X-Language'?: UploadJdbcDriverRequestXLanguageEnum | string;
    public body?: UploadJdbcDriverRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: UploadJdbcDriverRequestXLanguageEnum | string): UploadJdbcDriverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UploadJdbcDriverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UploadJdbcDriverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UploadJdbcDriverRequestBody): UploadJdbcDriverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadJdbcDriverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
