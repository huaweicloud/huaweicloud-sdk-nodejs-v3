

export class SqlJobDefendRule {
    private 'rule_uuid'?: string;
    private 'project_id'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: SqlJobDefendRuleRuleIdEnum | string;
    public category?: SqlJobDefendRuleCategoryEnum | string;
    private 'engine_rules'?: object;
    public queueNames?: Array<string>;
    public desc?: string;
    private 'sys_desc'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withRuleUuid(ruleUuid: string): SqlJobDefendRule {
        this['rule_uuid'] = ruleUuid;
        return this;
    }
    public set ruleUuid(ruleUuid: string  | undefined) {
        this['rule_uuid'] = ruleUuid;
    }
    public get ruleUuid(): string | undefined {
        return this['rule_uuid'];
    }
    public withProjectId(projectId: string): SqlJobDefendRule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRuleName(ruleName: string): SqlJobDefendRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: SqlJobDefendRuleRuleIdEnum | string): SqlJobDefendRule {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: SqlJobDefendRuleRuleIdEnum | string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): SqlJobDefendRuleRuleIdEnum | string | undefined {
        return this['rule_id'];
    }
    public withCategory(category: SqlJobDefendRuleCategoryEnum | string): SqlJobDefendRule {
        this['category'] = category;
        return this;
    }
    public withEngineRules(engineRules: object): SqlJobDefendRule {
        this['engine_rules'] = engineRules;
        return this;
    }
    public set engineRules(engineRules: object  | undefined) {
        this['engine_rules'] = engineRules;
    }
    public get engineRules(): object | undefined {
        return this['engine_rules'];
    }
    public withQueueNames(queueNames: Array<string>): SqlJobDefendRule {
        this['queueNames'] = queueNames;
        return this;
    }
    public withDesc(desc: string): SqlJobDefendRule {
        this['desc'] = desc;
        return this;
    }
    public withSysDesc(sysDesc: string): SqlJobDefendRule {
        this['sys_desc'] = sysDesc;
        return this;
    }
    public set sysDesc(sysDesc: string  | undefined) {
        this['sys_desc'] = sysDesc;
    }
    public get sysDesc(): string | undefined {
        return this['sys_desc'];
    }
    public withCreateTime(createTime: number): SqlJobDefendRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): SqlJobDefendRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlJobDefendRuleRuleIdEnum {
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
export enum SqlJobDefendRuleCategoryEnum {
    STATIC = 'static',
    DYNAMIC = 'dynamic',
    RUNNING = 'running'
}
