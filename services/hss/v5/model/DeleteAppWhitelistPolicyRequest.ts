import { DeleteAppWhitelistPolicyRequestInfo } from './DeleteAppWhitelistPolicyRequestInfo';


export class DeleteAppWhitelistPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteAppWhitelistPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAppWhitelistPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteAppWhitelistPolicyRequestInfo): DeleteAppWhitelistPolicyRequest {
        this['body'] = body;
        return this;
    }
}