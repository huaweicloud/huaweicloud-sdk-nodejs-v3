

export class IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails {
    private 'agency_id'?: string;
    private 'policy_name'?: string;
    public constructor(agencyId?: string, policyName?: string) { 
        this['agency_id'] = agencyId;
        this['policy_name'] = policyName;
    }
    public withAgencyId(agencyId: string): IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
    public withPolicyName(policyName: string): IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
}