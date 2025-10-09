

export class AttachAgencyPolicyReqBody {
    private 'agency_id'?: string;
    public constructor(agencyId?: string) { 
        this['agency_id'] = agencyId;
    }
    public withAgencyId(agencyId: string): AttachAgencyPolicyReqBody {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
}