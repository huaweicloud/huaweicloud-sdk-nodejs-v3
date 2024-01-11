import { QueryInstanceByTagReq } from './QueryInstanceByTagReq';


export class CountInstanceByTagsRequest {
    private 'resource_type'?: CountInstanceByTagsRequestResourceTypeEnum | string;
    private 'X-Language'?: CountInstanceByTagsRequestXLanguageEnum | string;
    public body?: QueryInstanceByTagReq;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: CountInstanceByTagsRequestResourceTypeEnum | string): CountInstanceByTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CountInstanceByTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CountInstanceByTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withXLanguage(xLanguage: CountInstanceByTagsRequestXLanguageEnum | string): CountInstanceByTagsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CountInstanceByTagsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CountInstanceByTagsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: QueryInstanceByTagReq): CountInstanceByTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountInstanceByTagsRequestResourceTypeEnum {
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
export enum CountInstanceByTagsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
