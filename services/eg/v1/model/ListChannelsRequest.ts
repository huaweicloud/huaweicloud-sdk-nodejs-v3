

export class ListChannelsRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    private 'provider_type'?: ListChannelsRequestProviderTypeEnum | string;
    public name?: string;
    private 'fuzzy_name'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListChannelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListChannelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListChannelsRequest {
        this['sort'] = sort;
        return this;
    }
    public withProviderType(providerType: ListChannelsRequestProviderTypeEnum | string): ListChannelsRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ListChannelsRequestProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ListChannelsRequestProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withName(name: string): ListChannelsRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListChannelsRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListChannelsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListChannelsRequestProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
