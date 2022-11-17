

export class Agency {
    private 'provider_name': string | undefined;
    private 'agency_name': string | undefined;
    public constructor(providerName?: any, agencyName?: any) { 
        this['provider_name'] = providerName;
        this['agency_name'] = agencyName;
    }
    public withProviderName(providerName: string): Agency {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName() {
        return this['provider_name'];
    }
    public withAgencyName(agencyName: string): Agency {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName() {
        return this['agency_name'];
    }
}