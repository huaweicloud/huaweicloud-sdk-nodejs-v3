

export class ShowAgencyRequest {
    private 'agency_id': string | undefined;
    public constructor(agencyId?: any) { 
        this['agency_id'] = agencyId;
    }
    public withAgencyId(agencyId: string): ShowAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId() {
        return this['agency_id'];
    }
}