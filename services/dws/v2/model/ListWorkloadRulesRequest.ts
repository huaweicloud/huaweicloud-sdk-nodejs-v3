

export class ListWorkloadRulesRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'rule_name'?: string;
    private 'queue_name'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListWorkloadRulesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListWorkloadRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWorkloadRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withRuleName(ruleName: string): ListWorkloadRulesRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withQueueName(queueName: string): ListWorkloadRulesRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
}