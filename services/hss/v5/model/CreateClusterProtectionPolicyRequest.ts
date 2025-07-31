import { ModPolicyRequestInfo } from './ModPolicyRequestInfo';


export class CreateClusterProtectionPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModPolicyRequestInfo): CreateClusterProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}