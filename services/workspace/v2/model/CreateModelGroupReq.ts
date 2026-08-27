

export class CreateModelGroupReq {
    public name?: string;
    public description?: string;
    private 'provider_ids'?: Array<string>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateModelGroupReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateModelGroupReq {
        this['description'] = description;
        return this;
    }
    public withProviderIds(providerIds: Array<string>): CreateModelGroupReq {
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