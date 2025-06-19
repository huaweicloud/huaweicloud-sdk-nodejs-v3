

export class ListSqlJobDefendRulesRequest {
    private 'queue_name'?: string;
    private 'rule_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withQueueName(queueName: string): ListSqlJobDefendRulesRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withRuleName(ruleName: string): ListSqlJobDefendRulesRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withOffset(offset: number): ListSqlJobDefendRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSqlJobDefendRulesRequest {
        this['limit'] = limit;
        return this;
    }
}