

export class SqlJobDefendRuleRequestBody {
    private 'rule_name'?: string;
    private 'rule_id'?: SqlJobDefendRuleRequestBodyRuleIdEnum | string;
    public category?: SqlJobDefendRuleRequestBodyCategoryEnum | string;
    private 'engine_rules'?: object;
    private 'queue_names'?: Array<string>;
    public constructor(ruleName?: string, ruleId?: string, category?: string, engineRules?: object) { 
        this['rule_name'] = ruleName;
        this['rule_id'] = ruleId;
        this['category'] = category;
        this['engine_rules'] = engineRules;
    }
    public withRuleName(ruleName: string): SqlJobDefendRuleRequestBody {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: SqlJobDefendRuleRequestBodyRuleIdEnum | string): SqlJobDefendRuleRequestBody {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: SqlJobDefendRuleRequestBodyRuleIdEnum | string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): SqlJobDefendRuleRequestBodyRuleIdEnum | string | undefined {
        return this['rule_id'];
    }
    public withCategory(category: SqlJobDefendRuleRequestBodyCategoryEnum | string): SqlJobDefendRuleRequestBody {
        this['category'] = category;
        return this;
    }
    public withEngineRules(engineRules: object): SqlJobDefendRuleRequestBody {
        this['engine_rules'] = engineRules;
        return this;
    }
    public set engineRules(engineRules: object  | undefined) {
        this['engine_rules'] = engineRules;
    }
    public get engineRules(): object | undefined {
        return this['engine_rules'];
    }
    public withQueueNames(queueNames: Array<string>): SqlJobDefendRuleRequestBody {
        this['queue_names'] = queueNames;
        return this;
    }
    public set queueNames(queueNames: Array<string>  | undefined) {
        this['queue_names'] = queueNames;
    }
    public get queueNames(): Array<string> | undefined {
        return this['queue_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlJobDefendRuleRequestBodyRuleIdEnum {
    STATIC_0001 = 'static_0001',
    STATIC_0002 = 'static_0002',
    STATIC_0003 = 'static_0003',
    STATIC_0004 = 'static_0004',
    STATIC_0005 = 'static_0005',
    STATIC_0006 = 'static_0006',
    STATIC_0007 = 'static_0007',
    STATIC_0008 = 'static_0008',
    STATIC_0009 = 'static_0009',
    STATIC_0010 = 'static_0010',
    STATIC_0011 = 'static_0011',
    STATIC_0012 = 'static_0012',
    STATIC_0013 = 'static_0013',
    STATIC_0014 = 'static_0014',
    STATIC_0015 = 'static_0015',
    STATIC_0016 = 'static_0016',
    STATIC_0017 = 'static_0017',
    DYNAMIC_0001 = 'dynamic_0001',
    DYNAMIC_0002 = 'dynamic_0002',
    DYNAMIC_0003 = 'dynamic_0003',
    DYNAMIC_0004 = 'dynamic_0004',
    DYNAMIC_0005 = 'dynamic_0005',
    DYNAMIC_0006 = 'dynamic_0006',
    DYNAMIC_0007 = 'dynamic_0007',
    DYNAMIC_0008 = 'dynamic_0008',
    DYNAMIC_0009 = 'dynamic_0009',
    DYNAMIC_0010 = 'dynamic_0010',
    DYNAMIC_0011 = 'dynamic_0011',
    DYNAMIC_0012 = 'dynamic_0012',
    RUNNING_0001 = 'running_0001',
    RUNNING_0002 = 'running_0002',
    RUNNING_0003 = 'running_0003',
    RUNNING_0004 = 'running_0004',
    RUNNING_0005 = 'running_0005',
    RUNNING_0006 = 'running_0006',
    RUNNING_0007 = 'running_0007',
    RUNNING_0008 = 'running_0008',
    RUNNING_0009 = 'running_0009',
    RUNNING_0010 = 'running_0010',
    RUNNING_0011 = 'running_0011',
    RUNNING_0012 = 'running_0012',
    RUNNING_0013 = 'running_0013',
    RUNNING_0014 = 'running_0014',
    RUNNING_0015 = 'running_0015'
}
/**
    * @export
    * @enum {string}
    */
export enum SqlJobDefendRuleRequestBodyCategoryEnum {
    STATIC = 'static',
    DYNAMIC = 'dynamic',
    RUNNING = 'running'
}
