

export class ListUserJdbcDriversRequest {
    public limit?: number;
    public offset?: number;
    private 'driver_type'?: ListUserJdbcDriversRequestDriverTypeEnum | string;
    private 'X-Language'?: ListUserJdbcDriversRequestXLanguageEnum | string;
    public constructor(driverType?: string) { 
        this['driver_type'] = driverType;
    }
    public withLimit(limit: number): ListUserJdbcDriversRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListUserJdbcDriversRequest {
        this['offset'] = offset;
        return this;
    }
    public withDriverType(driverType: ListUserJdbcDriversRequestDriverTypeEnum | string): ListUserJdbcDriversRequest {
        this['driver_type'] = driverType;
        return this;
    }
    public set driverType(driverType: ListUserJdbcDriversRequestDriverTypeEnum | string  | undefined) {
        this['driver_type'] = driverType;
    }
    public get driverType(): ListUserJdbcDriversRequestDriverTypeEnum | string | undefined {
        return this['driver_type'];
    }
    public withXLanguage(xLanguage: ListUserJdbcDriversRequestXLanguageEnum | string): ListUserJdbcDriversRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListUserJdbcDriversRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListUserJdbcDriversRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUserJdbcDriversRequestDriverTypeEnum {
    DB2 = 'db2',
    INFORMIX = 'informix'
}
/**
    * @export
    * @enum {string}
    */
export enum ListUserJdbcDriversRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
