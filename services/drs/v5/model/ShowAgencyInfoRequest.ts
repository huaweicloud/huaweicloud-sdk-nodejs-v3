

export class ShowAgencyInfoRequest {
    private 'X-Language'?: string;
    private 'agency_name'?: string;
    public constructor(agencyName?: string) { 
        this['agency_name'] = agencyName;
    }
    public withXLanguage(xLanguage: string): ShowAgencyInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withAgencyName(agencyName: string): ShowAgencyInfoRequest {
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