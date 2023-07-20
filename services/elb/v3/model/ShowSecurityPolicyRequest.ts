

export class ShowSecurityPolicyRequest {
    private 'security_policy_id'?: string;
    public constructor(securityPolicyId?: string) { 
        this['security_policy_id'] = securityPolicyId;
    }
    public withSecurityPolicyId(securityPolicyId: string): ShowSecurityPolicyRequest {
        this['security_policy_id'] = securityPolicyId;
        return this;
    }
    public set securityPolicyId(securityPolicyId: string  | undefined) {
        this['security_policy_id'] = securityPolicyId;
    }
    public get securityPolicyId(): string | undefined {
        return this['security_policy_id'];
    }
}