

export class ModelArtsAgencyRequest {
    private 'agency_name_suffix'?: string;
    public constructor() { 
    }
    public withAgencyNameSuffix(agencyNameSuffix: string): ModelArtsAgencyRequest {
        this['agency_name_suffix'] = agencyNameSuffix;
        return this;
    }
    public set agencyNameSuffix(agencyNameSuffix: string  | undefined) {
        this['agency_name_suffix'] = agencyNameSuffix;
    }
    public get agencyNameSuffix(): string | undefined {
        return this['agency_name_suffix'];
    }
}