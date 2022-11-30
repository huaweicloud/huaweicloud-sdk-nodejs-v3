

export class ShowSecurityPolicyRequest {
    private 'security_policy_id': string | undefined;
    public constructor(securityPolicyId?: any) { 
        this['security_policy_id'] = securityPolicyId;
    }
    public withSecurityPolicyId(securityPolicyId: string): ShowSecurityPolicyRequest {
        this['security_policy_id'] = securityPolicyId;
        return this;
    }
    public set securityPolicyId(securityPolicyId: string | undefined) {
        this['security_policy_id'] = securityPolicyId;
    }
    public get securityPolicyId() {
        return this['security_policy_id'];
    }
}