

export class Agency {
    private 'provider_name'?: string;
    private 'agency_name'?: string;
    private 'agency_urn'?: string;
    public constructor(providerName?: string) { 
        this['provider_name'] = providerName;
    }
    public withProviderName(providerName: string): Agency {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withAgencyName(agencyName: string): Agency {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withAgencyUrn(agencyUrn: string): Agency {
        this['agency_urn'] = agencyUrn;
        return this;
    }
    public set agencyUrn(agencyUrn: string  | undefined) {
        this['agency_urn'] = agencyUrn;
    }
    public get agencyUrn(): string | undefined {
        return this['agency_urn'];
    }
}