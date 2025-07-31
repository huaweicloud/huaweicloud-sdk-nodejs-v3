import { AddAppWhitelistPolicyProcessRequestInfo } from './AddAppWhitelistPolicyProcessRequestInfo';


export class AddAppWhitelistPolicyProcessRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    private 'host_id'?: string;
    public body?: AddAppWhitelistPolicyProcessRequestInfo;
    public constructor(policyId?: string, hostId?: string) { 
        this['policy_id'] = policyId;
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddAppWhitelistPolicyProcessRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): AddAppWhitelistPolicyProcessRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withHostId(hostId: string): AddAppWhitelistPolicyProcessRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withBody(body: AddAppWhitelistPolicyProcessRequestInfo): AddAppWhitelistPolicyProcessRequest {
        this['body'] = body;
        return this;
    }
}