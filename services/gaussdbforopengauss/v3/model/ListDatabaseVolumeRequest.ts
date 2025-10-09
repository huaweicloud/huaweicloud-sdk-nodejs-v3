

export class ListDatabaseVolumeRequest {
    private 'X-Language'?: ListDatabaseVolumeRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'database_name'?: string;
    private 'table_space_name'?: string;
    private 'user_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ListDatabaseVolumeRequestXLanguageEnum | string): ListDatabaseVolumeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDatabaseVolumeRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDatabaseVolumeRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDatabaseVolumeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabaseName(databaseName: string): ListDatabaseVolumeRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableSpaceName(tableSpaceName: string): ListDatabaseVolumeRequest {
        this['table_space_name'] = tableSpaceName;
        return this;
    }
    public set tableSpaceName(tableSpaceName: string  | undefined) {
        this['table_space_name'] = tableSpaceName;
    }
    public get tableSpaceName(): string | undefined {
        return this['table_space_name'];
    }
    public withUserName(userName: string): ListDatabaseVolumeRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withOffset(offset: number): ListDatabaseVolumeRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDatabaseVolumeRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDatabaseVolumeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
