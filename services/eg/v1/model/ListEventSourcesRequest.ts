

export class ListEventSourcesRequest {
    private 'channel_id'?: string;
    public offset?: number;
    public limit?: number;
    public sort?: string;
    private 'provider_type'?: ListEventSourcesRequestProviderTypeEnum | string;
    public name?: string;
    private 'fuzzy_name'?: string;
    private 'fuzzy_label'?: string;
    public constructor() { 
    }
    public withChannelId(channelId: string): ListEventSourcesRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withOffset(offset: number): ListEventSourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEventSourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListEventSourcesRequest {
        this['sort'] = sort;
        return this;
    }
    public withProviderType(providerType: ListEventSourcesRequestProviderTypeEnum | string): ListEventSourcesRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ListEventSourcesRequestProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ListEventSourcesRequestProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withName(name: string): ListEventSourcesRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListEventSourcesRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
    public withFuzzyLabel(fuzzyLabel: string): ListEventSourcesRequest {
        this['fuzzy_label'] = fuzzyLabel;
        return this;
    }
    public set fuzzyLabel(fuzzyLabel: string  | undefined) {
        this['fuzzy_label'] = fuzzyLabel;
    }
    public get fuzzyLabel(): string | undefined {
        return this['fuzzy_label'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventSourcesRequestProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
