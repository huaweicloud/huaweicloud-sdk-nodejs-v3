

export class DeleteWorkloadRuleRequest {
    private 'cluster_id'?: string;
    private 'rule_name'?: string;
    public constructor(clusterId?: string, ruleName?: string) { 
        this['cluster_id'] = clusterId;
        this['rule_name'] = ruleName;
    }
    public withClusterId(clusterId: string): DeleteWorkloadRuleRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withRuleName(ruleName: string): DeleteWorkloadRuleRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
}