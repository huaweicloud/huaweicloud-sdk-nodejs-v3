

export class ShowAlertPolicyRequest {
    private 'tenant_id'?: string;
    private 'policy_id'?: string;
    public constructor(tenantId?: string, policyId?: string) { 
        this['tenant_id'] = tenantId;
        this['policy_id'] = policyId;
    }
    public withTenantId(tenantId: string): ShowAlertPolicyRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withPolicyId(policyId: string): ShowAlertPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}