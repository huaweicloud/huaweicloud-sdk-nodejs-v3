

export class Agency {
    private 'provider_name'?: string;
    private 'agency_name'?: string;
    public constructor(providerName?: string, agencyName?: string) { 
        this['provider_name'] = providerName;
        this['agency_name'] = agencyName;
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
}