

export class ListInstanceTagsRequest {
    private 'resource_type'?: ListInstanceTagsRequestResourceTypeEnum | string;
    private 'X-Language'?: ListInstanceTagsRequestXLanguageEnum | string;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ListInstanceTagsRequestResourceTypeEnum | string): ListInstanceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListInstanceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListInstanceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withXLanguage(xLanguage: ListInstanceTagsRequestXLanguageEnum | string): ListInstanceTagsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceTagsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceTagsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withResourceId(resourceId: string): ListInstanceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceTagsRequestResourceTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard',
    SUBSCRIPTION = 'subscription',
    BACKUPMIGRATION = 'backupMigration',
    REPLAY = 'replay'
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceTagsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
