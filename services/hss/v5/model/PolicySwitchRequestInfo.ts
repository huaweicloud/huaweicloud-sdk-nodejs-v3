

export class PolicySwitchRequestInfo {
    private 'policy_name'?: string;
    public enable?: boolean;
    public constructor(policyName?: string, enable?: boolean) { 
        this['policy_name'] = policyName;
        this['enable'] = enable;
    }
    public withPolicyName(policyName: string): PolicySwitchRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withEnable(enable: boolean): PolicySwitchRequestInfo {
        this['enable'] = enable;
        return this;
    }
}