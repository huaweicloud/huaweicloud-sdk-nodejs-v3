
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlJobDefendRuleResponse extends SdkResponse {
    private 'rule_uuid'?: string;
    private 'project_id'?: string;
    private 'rule_name'?: string;
    private 'rule_id'?: ShowSqlJobDefendRuleResponseRuleIdEnum | string;
    public category?: ShowSqlJobDefendRuleResponseCategoryEnum | string;
    private 'engine_rules'?: object;
    private 'queue_names'?: Array<string>;
    public desc?: string;
    private 'sys_desc'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withRuleUuid(ruleUuid: string): ShowSqlJobDefendRuleResponse {
        this['rule_uuid'] = ruleUuid;
        return this;
    }
    public set ruleUuid(ruleUuid: string  | undefined) {
        this['rule_uuid'] = ruleUuid;
    }
    public get ruleUuid(): string | undefined {
        return this['rule_uuid'];
    }
    public withProjectId(projectId: string): ShowSqlJobDefendRuleResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRuleName(ruleName: string): ShowSqlJobDefendRuleResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleId(ruleId: ShowSqlJobDefendRuleResponseRuleIdEnum | string): ShowSqlJobDefendRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: ShowSqlJobDefendRuleResponseRuleIdEnum | string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): ShowSqlJobDefendRuleResponseRuleIdEnum | string | undefined {
        return this['rule_id'];
    }
    public withCategory(category: ShowSqlJobDefendRuleResponseCategoryEnum | string): ShowSqlJobDefendRuleResponse {
        this['category'] = category;
        return this;
    }
    public withEngineRules(engineRules: object): ShowSqlJobDefendRuleResponse {
        this['engine_rules'] = engineRules;
        return this;
    }
    public set engineRules(engineRules: object  | undefined) {
        this['engine_rules'] = engineRules;
    }
    public get engineRules(): object | undefined {
        return this['engine_rules'];
    }
    public withQueueNames(queueNames: Array<string>): ShowSqlJobDefendRuleResponse {
        this['queue_names'] = queueNames;
        return this;
    }
    public set queueNames(queueNames: Array<string>  | undefined) {
        this['queue_names'] = queueNames;
    }
    public get queueNames(): Array<string> | undefined {
        return this['queue_names'];
    }
    public withDesc(desc: string): ShowSqlJobDefendRuleResponse {
        this['desc'] = desc;
        return this;
    }
    public withSysDesc(sysDesc: string): ShowSqlJobDefendRuleResponse {
        this['sys_desc'] = sysDesc;
        return this;
    }
    public set sysDesc(sysDesc: string  | undefined) {
        this['sys_desc'] = sysDesc;
    }
    public get sysDesc(): string | undefined {
        return this['sys_desc'];
    }
    public withCreateTime(createTime: number): ShowSqlJobDefendRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowSqlJobDefendRuleResponse {
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
export enum ShowSqlJobDefendRuleResponseRuleIdEnum {
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
export enum ShowSqlJobDefendRuleResponseCategoryEnum {
    STATIC = 'static',
    DYNAMIC = 'dynamic',
    RUNNING = 'running'
}
