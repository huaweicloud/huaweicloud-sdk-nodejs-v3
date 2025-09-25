import { AssociateProtectionPolicyRequestInfo } from './AssociateProtectionPolicyRequestInfo';


export class AssociateProtectionPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: AssociateProtectionPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AssociateProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AssociateProtectionPolicyRequestInfo): AssociateProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}