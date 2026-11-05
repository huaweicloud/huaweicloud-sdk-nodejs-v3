

export class AgencyRequest {
    private 'agency_name'?: string;
    public constructor(agencyName?: string) { 
        this['agency_name'] = agencyName;
    }
    public withAgencyName(agencyName: string): AgencyRequest {
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