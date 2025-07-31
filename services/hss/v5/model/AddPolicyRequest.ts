import { AddPolicyRequestInfo } from './AddPolicyRequestInfo';


export class AddPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'os_type'?: string;
    private 'policy_name'?: string;
    public body?: AddPolicyRequestInfo;
    public constructor(policyName?: string) { 
        this['policy_name'] = policyName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOsType(osType: string): AddPolicyRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withPolicyName(policyName: string): AddPolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withBody(body: AddPolicyRequestInfo): AddPolicyRequest {
        this['body'] = body;
        return this;
    }
}