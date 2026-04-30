

export class ShowChildNumRequest {
    private 'instance_id'?: string;
    public region?: string;
    private 'X-Language'?: ShowChildNumRequestXLanguageEnum | string;
    private 'db_type'?: ShowChildNumRequestDbTypeEnum | string;
    public constructor(instanceId?: string, dbType?: string) { 
        this['instance_id'] = instanceId;
        this['db_type'] = dbType;
    }
    public withInstanceId(instanceId: string): ShowChildNumRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRegion(region: string): ShowChildNumRequest {
        this['region'] = region;
        return this;
    }
    public withXLanguage(xLanguage: ShowChildNumRequestXLanguageEnum | string): ShowChildNumRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowChildNumRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowChildNumRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withDbType(dbType: ShowChildNumRequestDbTypeEnum | string): ShowChildNumRequest {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: ShowChildNumRequestDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): ShowChildNumRequestDbTypeEnum | string | undefined {
        return this['db_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowChildNumRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowChildNumRequestDbTypeEnum {
    GAUSSDBV5 = 'gaussdbv5',
    DDM = 'ddm'
}
