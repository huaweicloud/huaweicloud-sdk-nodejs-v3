

export class PolicyAgency {
    private 'agency_id'?: string;
    private 'attached_at'?: Date;
    public constructor(agencyId?: string, attachedAt?: Date) { 
        this['agency_id'] = agencyId;
        this['attached_at'] = attachedAt;
    }
    public withAgencyId(agencyId: string): PolicyAgency {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withAttachedAt(attachedAt: Date): PolicyAgency {
        this['attached_at'] = attachedAt;
        return this;
    }
    public set attachedAt(attachedAt: Date  | undefined) {
        this['attached_at'] = attachedAt;
    }
    public get attachedAt(): Date | undefined {
        return this['attached_at'];
    }
}