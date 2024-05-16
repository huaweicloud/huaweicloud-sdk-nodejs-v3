

export class StarRocksCreateRequestTagsInfoSysTags {
    public key?: StarRocksCreateRequestTagsInfoSysTagsKeyEnum | string;
    public value?: StarRocksCreateRequestTagsInfoSysTagsValueEnum | string;
    public constructor(key?: string, value?: string) { 
        this['key'] = key;
        this['value'] = value;
    }
    public withKey(key: StarRocksCreateRequestTagsInfoSysTagsKeyEnum | string): StarRocksCreateRequestTagsInfoSysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: StarRocksCreateRequestTagsInfoSysTagsValueEnum | string): StarRocksCreateRequestTagsInfoSysTags {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StarRocksCreateRequestTagsInfoSysTagsKeyEnum {
    SYS_ENTERPRISE_PROJECT_ID = '_sys_enterprise_project_id'
}
/**
    * @export
    * @enum {string}
    */
export enum StarRocksCreateRequestTagsInfoSysTagsValueEnum {
    E_0 = '0'
}
