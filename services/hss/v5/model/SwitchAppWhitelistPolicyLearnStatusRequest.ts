import { SwitchAppWhitelistPolicyLearnStatusRequestInfo } from './SwitchAppWhitelistPolicyLearnStatusRequestInfo';


export class SwitchAppWhitelistPolicyLearnStatusRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public body?: SwitchAppWhitelistPolicyLearnStatusRequestInfo;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchAppWhitelistPolicyLearnStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): SwitchAppWhitelistPolicyLearnStatusRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: SwitchAppWhitelistPolicyLearnStatusRequestInfo): SwitchAppWhitelistPolicyLearnStatusRequest {
        this['body'] = body;
        return this;
    }
}