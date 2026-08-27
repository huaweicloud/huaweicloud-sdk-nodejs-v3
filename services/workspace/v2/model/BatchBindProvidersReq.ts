

export class BatchBindProvidersReq {
    private 'provider_ids'?: Array<string>;
    public constructor(providerIds?: Array<string>) { 
        this['provider_ids'] = providerIds;
    }
    public withProviderIds(providerIds: Array<string>): BatchBindProvidersReq {
        this['provider_ids'] = providerIds;
        return this;
    }
    public set providerIds(providerIds: Array<string>  | undefined) {
        this['provider_ids'] = providerIds;
    }
    public get providerIds(): Array<string> | undefined {
        return this['provider_ids'];
    }
}