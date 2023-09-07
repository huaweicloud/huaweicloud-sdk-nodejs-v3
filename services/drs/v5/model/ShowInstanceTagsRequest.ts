

export class ShowInstanceTagsRequest {
    private 'resource_type'?: ShowInstanceTagsRequestResourceTypeEnum | string;
    private 'job_id'?: string;
    private 'X-Language'?: ShowInstanceTagsRequestXLanguageEnum | string;
    public constructor(resourceType?: string, jobId?: string) { 
        this['resource_type'] = resourceType;
        this['job_id'] = jobId;
    }
    public withResourceType(resourceType: ShowInstanceTagsRequestResourceTypeEnum | string): ShowInstanceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowInstanceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowInstanceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withJobId(jobId: string): ShowInstanceTagsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowInstanceTagsRequestXLanguageEnum | string): ShowInstanceTagsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowInstanceTagsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowInstanceTagsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceTagsRequestResourceTypeEnum {
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
export enum ShowInstanceTagsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
