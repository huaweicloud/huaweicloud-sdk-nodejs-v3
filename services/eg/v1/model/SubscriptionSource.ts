

export class SubscriptionSource {
    public id?: string;
    public name?: string;
    private 'provider_type'?: SubscriptionSourceProviderTypeEnum | string;
    public detail?: object;
    public filter?: object;
    public constructor(name?: string, providerType?: string, filter?: object) { 
        this['name'] = name;
        this['provider_type'] = providerType;
        this['filter'] = filter;
    }
    public withId(id: string): SubscriptionSource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubscriptionSource {
        this['name'] = name;
        return this;
    }
    public withProviderType(providerType: SubscriptionSourceProviderTypeEnum | string): SubscriptionSource {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: SubscriptionSourceProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): SubscriptionSourceProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withDetail(detail: object): SubscriptionSource {
        this['detail'] = detail;
        return this;
    }
    public withFilter(filter: object): SubscriptionSource {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubscriptionSourceProviderTypeEnum {
    CUSTOM = 'CUSTOM',
    OFFICIAL = 'OFFICIAL',
    PARTNER = 'PARTNER'
}
