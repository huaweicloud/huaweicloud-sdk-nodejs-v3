

export class OrgConformancePackStatus {
    private 'org_conformance_pack_id'?: string;
    private 'org_conformance_pack_name'?: string;
    public state?: string;
    private 'error_message'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withOrgConformancePackId(orgConformancePackId: string): OrgConformancePackStatus {
        this['org_conformance_pack_id'] = orgConformancePackId;
        return this;
    }
    public set orgConformancePackId(orgConformancePackId: string  | undefined) {
        this['org_conformance_pack_id'] = orgConformancePackId;
    }
    public get orgConformancePackId(): string | undefined {
        return this['org_conformance_pack_id'];
    }
    public withOrgConformancePackName(orgConformancePackName: string): OrgConformancePackStatus {
        this['org_conformance_pack_name'] = orgConformancePackName;
        return this;
    }
    public set orgConformancePackName(orgConformancePackName: string  | undefined) {
        this['org_conformance_pack_name'] = orgConformancePackName;
    }
    public get orgConformancePackName(): string | undefined {
        return this['org_conformance_pack_name'];
    }
    public withState(state: string): OrgConformancePackStatus {
        this['state'] = state;
        return this;
    }
    public withErrorMessage(errorMessage: string): OrgConformancePackStatus {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withCreatedAt(createdAt: string): OrgConformancePackStatus {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): OrgConformancePackStatus {
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