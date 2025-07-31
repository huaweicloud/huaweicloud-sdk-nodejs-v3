import { DeletePolicyRequestInfo } from './DeletePolicyRequestInfo';


export class DeleteClusterProtectionPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeletePolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteClusterProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeletePolicyRequestInfo): DeleteClusterProtectionPolicyRequest {
        this['body'] = body;
        return this;
    }
}