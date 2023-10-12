

export class DeleteOrganizationConformancePackRequest {
    private 'organization_id'?: string;
    private 'conformance_pack_id'?: string;
    public constructor(organizationId?: string, conformancePackId?: string) { 
        this['organization_id'] = organizationId;
        this['conformance_pack_id'] = conformancePackId;
    }
    public withOrganizationId(organizationId: string): DeleteOrganizationConformancePackRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withConformancePackId(conformancePackId: string): DeleteOrganizationConformancePackRequest {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
}