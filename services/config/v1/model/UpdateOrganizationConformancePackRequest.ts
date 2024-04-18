import { UpdateOrgConformancePackRequestBody } from './UpdateOrgConformancePackRequestBody';


export class UpdateOrganizationConformancePackRequest {
    private 'organization_id'?: string;
    private 'conformance_pack_id'?: string;
    public body?: UpdateOrgConformancePackRequestBody;
    public constructor(organizationId?: string, conformancePackId?: string) { 
        this['organization_id'] = organizationId;
        this['conformance_pack_id'] = conformancePackId;
    }
    public withOrganizationId(organizationId: string): UpdateOrganizationConformancePackRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withConformancePackId(conformancePackId: string): UpdateOrganizationConformancePackRequest {
        this['conformance_pack_id'] = conformancePackId;
        return this;
    }
    public set conformancePackId(conformancePackId: string  | undefined) {
        this['conformance_pack_id'] = conformancePackId;
    }
    public get conformancePackId(): string | undefined {
        return this['conformance_pack_id'];
    }
    public withBody(body: UpdateOrgConformancePackRequestBody): UpdateOrganizationConformancePackRequest {
        this['body'] = body;
        return this;
    }
}