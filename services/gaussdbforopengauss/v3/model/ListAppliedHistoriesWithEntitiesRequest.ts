

export class ListAppliedHistoriesWithEntitiesRequest {
    private 'X-Language'?: ListAppliedHistoriesWithEntitiesRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: ListAppliedHistoriesWithEntitiesRequestXLanguageEnum | string): ListAppliedHistoriesWithEntitiesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAppliedHistoriesWithEntitiesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAppliedHistoriesWithEntitiesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): ListAppliedHistoriesWithEntitiesRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withOffset(offset: number): ListAppliedHistoriesWithEntitiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAppliedHistoriesWithEntitiesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAppliedHistoriesWithEntitiesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
