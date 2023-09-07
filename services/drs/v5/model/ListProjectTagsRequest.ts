

export class ListProjectTagsRequest {
    private 'resource_type'?: ListProjectTagsRequestResourceTypeEnum | string;
    private 'X-Language'?: ListProjectTagsRequestXLanguageEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | string): ListProjectTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListProjectTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withXLanguage(xLanguage: ListProjectTagsRequestXLanguageEnum | string): ListProjectTagsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListProjectTagsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListProjectTagsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectTagsRequestResourceTypeEnum {
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
export enum ListProjectTagsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
