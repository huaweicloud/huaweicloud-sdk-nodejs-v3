import { BatchDeleteTagReq } from './BatchDeleteTagReq';


export class BatchDeleteTagsRequest {
    private 'resource_type'?: BatchDeleteTagsRequestResourceTypeEnum | string;
    private 'X-Language'?: BatchDeleteTagsRequestXLanguageEnum | string;
    private 'resource_id'?: string;
    public body?: BatchDeleteTagReq;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: BatchDeleteTagsRequestResourceTypeEnum | string): BatchDeleteTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BatchDeleteTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BatchDeleteTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withXLanguage(xLanguage: BatchDeleteTagsRequestXLanguageEnum | string): BatchDeleteTagsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: BatchDeleteTagsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): BatchDeleteTagsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withResourceId(resourceId: string): BatchDeleteTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: BatchDeleteTagReq): BatchDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteTagsRequestResourceTypeEnum {
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
export enum BatchDeleteTagsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
