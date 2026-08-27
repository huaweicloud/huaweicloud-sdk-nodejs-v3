

export class ModelGroupProviderSimpleResp {
    public id?: string;
    private 'provider_name'?: string;
    public constructor() { 
    }
    public withId(id: string): ModelGroupProviderSimpleResp {
        this['id'] = id;
        return this;
    }
    public withProviderName(providerName: string): ModelGroupProviderSimpleResp {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
}