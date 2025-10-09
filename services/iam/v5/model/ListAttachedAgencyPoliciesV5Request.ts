

export class ListAttachedAgencyPoliciesV5Request {
    private 'agency_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(agencyId?: string) { 
        this['agency_id'] = agencyId;
    }
    public withAgencyId(agencyId: string): ListAttachedAgencyPoliciesV5Request {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withLimit(limit: number): ListAttachedAgencyPoliciesV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAttachedAgencyPoliciesV5Request {
        this['marker'] = marker;
        return this;
    }
}