

export class PolicyStatistics {
    public namespace?: string;
    private 'policy_num'?: number;
    public constructor(namespace?: string, policyNum?: number) { 
        this['namespace'] = namespace;
        this['policy_num'] = policyNum;
    }
    public withNamespace(namespace: string): PolicyStatistics {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicyNum(policyNum: number): PolicyStatistics {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number  | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum(): number | undefined {
        return this['policy_num'];
    }
}