import { HoneypotPortPolicyContent } from './HoneypotPortPolicyContent';


export class CreateDecoyPortPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: HoneypotPortPolicyContent;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateDecoyPortPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: HoneypotPortPolicyContent): CreateDecoyPortPolicyRequest {
        this['body'] = body;
        return this;
    }
}