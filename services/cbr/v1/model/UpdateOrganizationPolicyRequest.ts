import { OrganizationPolicyUpdateReq } from './OrganizationPolicyUpdateReq';


export class UpdateOrganizationPolicyRequest {
    private 'organization_policy_id'?: string;
    public body?: OrganizationPolicyUpdateReq;
    public constructor(organizationPolicyId?: string) { 
        this['organization_policy_id'] = organizationPolicyId;
    }
    public withOrganizationPolicyId(organizationPolicyId: string): UpdateOrganizationPolicyRequest {
        this['organization_policy_id'] = organizationPolicyId;
        return this;
    }
    public set organizationPolicyId(organizationPolicyId: string  | undefined) {
        this['organization_policy_id'] = organizationPolicyId;
    }
    public get organizationPolicyId(): string | undefined {
        return this['organization_policy_id'];
    }
    public withBody(body: OrganizationPolicyUpdateReq): UpdateOrganizationPolicyRequest {
        this['body'] = body;
        return this;
    }
}