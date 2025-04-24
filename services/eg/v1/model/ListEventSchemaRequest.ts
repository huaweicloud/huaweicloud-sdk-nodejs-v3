

export class ListEventSchemaRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    private 'provider_type'?: ListEventSchemaRequestProviderTypeEnum | string;
    public name?: string;
    private 'fuzzy_name'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListEventSchemaRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEventSchemaRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListEventSchemaRequest {
        this['sort'] = sort;
        return this;
    }
    public withProviderType(providerType: ListEventSchemaRequestProviderTypeEnum | string): ListEventSchemaRequest {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ListEventSchemaRequestProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ListEventSchemaRequestProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withName(name: string): ListEventSchemaRequest {
        this['name'] = name;
        return this;
    }
    public withFuzzyName(fuzzyName: string): ListEventSchemaRequest {
        this['fuzzy_name'] = fuzzyName;
        return this;
    }
    public set fuzzyName(fuzzyName: string  | undefined) {
        this['fuzzy_name'] = fuzzyName;
    }
    public get fuzzyName(): string | undefined {
        return this['fuzzy_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventSchemaRequestProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
