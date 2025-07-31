import { ModPolicyRequestInfo } from './ModPolicyRequestInfo';


export class ChangeClusterProtectionPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: ModPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeClusterProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ModPolicyRequestInfo): ChangeClusterProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}