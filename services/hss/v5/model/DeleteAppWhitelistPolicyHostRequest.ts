import { DeleteAppWhitelistPolicyHostRequestInfo } from './DeleteAppWhitelistPolicyHostRequestInfo';


export class DeleteAppWhitelistPolicyHostRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public body?: DeleteAppWhitelistPolicyHostRequestInfo;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAppWhitelistPolicyHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): DeleteAppWhitelistPolicyHostRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: DeleteAppWhitelistPolicyHostRequestInfo): DeleteAppWhitelistPolicyHostRequest {
        this['body'] = body;
        return this;
    }
}