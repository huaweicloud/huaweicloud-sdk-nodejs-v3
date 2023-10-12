

export class OrgConformancePackDetailedStatus {
    private 'domain_id'?: string;
    private 'conformance_pack_id'?: string;
    private 'conformance_pack_name'?: string;
    public state?: string;
    private 'error_message'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): OrgConformancePackDetailedStatus {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withConformancePackId(conformancePackId: string): OrgConformancePackDetailedStatus {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
    public withConformancePackName(conformancePackName: string): OrgConformancePackDetailedStatus {
        this['conformance_pack_name'] = conformancePackName;
        return this;
    }
    public set conformancePackName(conformancePackName: string  | undefined) {
        this['conformance_pack_name'] = conformancePackName;
    }
    public get conformancePackName(): string | undefined {
        return this['conformance_pack_name'];
    }
    public withState(state: string): OrgConformancePackDetailedStatus {
        this['state'] = state;
        return this;
    }
    public withErrorMessage(errorMessage: string): OrgConformancePackDetailedStatus {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withCreatedAt(createdAt: string): OrgConformancePackDetailedStatus {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): OrgConformancePackDetailedStatus {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}