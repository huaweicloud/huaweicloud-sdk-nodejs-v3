

export class ListApplicableInstancesWithEntitiesRequest {
    private 'X-Language'?: ListApplicableInstancesWithEntitiesRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: ListApplicableInstancesWithEntitiesRequestXLanguageEnum | string): ListApplicableInstancesWithEntitiesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListApplicableInstancesWithEntitiesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListApplicableInstancesWithEntitiesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): ListApplicableInstancesWithEntitiesRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withOffset(offset: number): ListApplicableInstancesWithEntitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApplicableInstancesWithEntitiesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApplicableInstancesWithEntitiesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
