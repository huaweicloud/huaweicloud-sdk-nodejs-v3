

export class ShowAgencyPolicyRequest {
    private 'agency_name'?: string;
    private 'X-Language'?: string;
    public constructor(agencyName?: string) { 
        this['agency_name'] = agencyName;
    }
    public withAgencyName(agencyName: string): ShowAgencyPolicyRequest {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withXLanguage(xLanguage: string): ShowAgencyPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}