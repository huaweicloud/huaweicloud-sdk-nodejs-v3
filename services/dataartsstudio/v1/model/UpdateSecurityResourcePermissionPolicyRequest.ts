import { PermissionResourcePolicyCreateDTO } from './PermissionResourcePolicyCreateDTO';


export class UpdateSecurityResourcePermissionPolicyRequest {
    public workspace?: string;
    private 'policy_id'?: string;
    public body?: PermissionResourcePolicyCreateDTO;
    public constructor(workspace?: string, policyId?: string) { 
        this['workspace'] = workspace;
        this['policy_id'] = policyId;
    }
    public withWorkspace(workspace: string): UpdateSecurityResourcePermissionPolicyRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withPolicyId(policyId: string): UpdateSecurityResourcePermissionPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: PermissionResourcePolicyCreateDTO): UpdateSecurityResourcePermissionPolicyRequest {
        this['body'] = body;
        return this;
    }
}