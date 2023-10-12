import { OrgConformancePackRequestBody } from './OrgConformancePackRequestBody';


export class CreateOrganizationConformancePackRequest {
    private 'organization_id'?: string;
    public body?: OrgConformancePackRequestBody;
    public constructor(organizationId?: string) { 
        this['organization_id'] = organizationId;
    }
    public withOrganizationId(organizationId: string): CreateOrganizationConformancePackRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withBody(body: OrgConformancePackRequestBody): CreateOrganizationConformancePackRequest {
        this['body'] = body;
        return this;
    }
}