

export class IamBpAttachHighRiskSysIdentityPolicyToUserDetails {
    private 'user_id'?: string;
    private 'policy_name'?: string;
    public constructor(userId?: string, policyName?: string) { 
        this['user_id'] = userId;
        this['policy_name'] = policyName;
    }
    public withUserId(userId: string): IamBpAttachHighRiskSysIdentityPolicyToUserDetails {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withPolicyName(policyName: string): IamBpAttachHighRiskSysIdentityPolicyToUserDetails {
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