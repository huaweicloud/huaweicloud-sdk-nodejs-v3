

export class ProviderAgencyUrnPrimitiveTypeHolder {
    private 'provider_agency_urn'?: string;
    public constructor() { 
    }
    public withProviderAgencyUrn(providerAgencyUrn: string): ProviderAgencyUrnPrimitiveTypeHolder {
        this['provider_agency_urn'] = providerAgencyUrn;
        return this;
    }
    public set providerAgencyUrn(providerAgencyUrn: string  | undefined) {
        this['provider_agency_urn'] = providerAgencyUrn;
    }
    public get providerAgencyUrn(): string | undefined {
        return this['provider_agency_urn'];
    }
}