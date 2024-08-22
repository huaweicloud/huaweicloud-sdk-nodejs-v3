import { UploadUserJdbcDriverRequestBody } from './UploadUserJdbcDriverRequestBody';


export class UploadUserJdbcDriverRequest {
    private 'X-Language'?: UploadUserJdbcDriverRequestXLanguageEnum | string;
    private 'driver_type'?: UploadUserJdbcDriverRequestDriverTypeEnum | string;
    public body?: UploadUserJdbcDriverRequestBody;
    public constructor(driverType?: string) { 
        this['driver_type'] = driverType;
    }
    public withXLanguage(xLanguage: UploadUserJdbcDriverRequestXLanguageEnum | string): UploadUserJdbcDriverRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UploadUserJdbcDriverRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UploadUserJdbcDriverRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withDriverType(driverType: UploadUserJdbcDriverRequestDriverTypeEnum | string): UploadUserJdbcDriverRequest {
        this['driver_type'] = driverType;
        return this;
    }
    public set driverType(driverType: UploadUserJdbcDriverRequestDriverTypeEnum | string  | undefined) {
        this['driver_type'] = driverType;
    }
    public get driverType(): UploadUserJdbcDriverRequestDriverTypeEnum | string | undefined {
        return this['driver_type'];
    }
    public withBody(body: UploadUserJdbcDriverRequestBody): UploadUserJdbcDriverRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadUserJdbcDriverRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum UploadUserJdbcDriverRequestDriverTypeEnum {
    DB2 = 'db2',
    INFORMIX = 'informix'
}
