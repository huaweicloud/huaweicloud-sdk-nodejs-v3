

export class ProviderAgencyNamePrimitiveTypeHolder {
    private 'provider_agency_name'?: string;
    public constructor() { 
    }
    public withProviderAgencyName(providerAgencyName: string): ProviderAgencyNamePrimitiveTypeHolder {
        this['provider_agency_name'] = providerAgencyName;
        return this;
    }
    public set providerAgencyName(providerAgencyName: string  | undefined) {
        this['provider_agency_name'] = providerAgencyName;
    }
    public get providerAgencyName(): string | undefined {
        return this['provider_agency_name'];
    }
}