import { QueryInstanceByTagReq } from './QueryInstanceByTagReq';


export class ListInstanceByTagsRequest {
    private 'resource_type'?: ListInstanceByTagsRequestResourceTypeEnum | string;
    private 'X-Language'?: ListInstanceByTagsRequestXLanguageEnum | string;
    public limit?: number;
    public offset?: number;
    public body?: QueryInstanceByTagReq;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListInstanceByTagsRequestResourceTypeEnum | string): ListInstanceByTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListInstanceByTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListInstanceByTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withXLanguage(xLanguage: ListInstanceByTagsRequestXLanguageEnum | string): ListInstanceByTagsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListInstanceByTagsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListInstanceByTagsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ListInstanceByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: QueryInstanceByTagReq): ListInstanceByTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceByTagsRequestResourceTypeEnum {
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
export enum ListInstanceByTagsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
