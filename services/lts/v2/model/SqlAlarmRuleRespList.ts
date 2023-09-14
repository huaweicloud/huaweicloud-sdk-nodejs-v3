import { SqlRequest } from './SqlRequest';
import { Topics } from './Topics';


export class SqlAlarmRuleRespList {
    private 'sql_alarm_rule_name'?: string;
    private 'sql_alarm_rule_id'?: string;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequest>;
    public frequency?: object;
    private 'condition_expression'?: string;
    public topics?: Array<Topics>;
    private 'sql_alarm_level'?: SqlAlarmRuleRespListSqlAlarmLevelEnum | string;
    private 'sql_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'template_name'?: string;
    public status?: SqlAlarmRuleRespListStatusEnum | string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    public constructor(sqlAlarmRuleName?: string, sqlAlarmRuleId?: string, sqlAlarmRuleDescription?: string, sqlRequests?: Array<SqlRequest>, frequency?: object, conditionExpression?: string, topics?: Array<Topics>, sqlAlarmLevel?: string, sqlAlarmSend?: boolean, domainId?: string, createTime?: number, updateTime?: number) { 
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        this['sql_requests'] = sqlRequests;
        this['frequency'] = frequency;
        this['condition_expression'] = conditionExpression;
        this['topics'] = topics;
        this['sql_alarm_level'] = sqlAlarmLevel;
        this['sql_alarm_send'] = sqlAlarmSend;
        this['domain_id'] = domainId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
    }
    public withSqlAlarmRuleName(sqlAlarmRuleName: string): SqlAlarmRuleRespList {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        return this;
    }
    public set sqlAlarmRuleName(sqlAlarmRuleName: string  | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName(): string | undefined {
        return this['sql_alarm_rule_name'];
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): SqlAlarmRuleRespList {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string  | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId(): string | undefined {
        return this['sql_alarm_rule_id'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): SqlAlarmRuleRespList {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string  | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription(): string | undefined {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequest>): SqlAlarmRuleRespList {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequest>  | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests(): Array<SqlRequest> | undefined {
        return this['sql_requests'];
    }
    public withFrequency(frequency: object): SqlAlarmRuleRespList {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): SqlAlarmRuleRespList {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withTopics(topics: Array<Topics>): SqlAlarmRuleRespList {
        this['topics'] = topics;
        return this;
    }
    public withSqlAlarmLevel(sqlAlarmLevel: SqlAlarmRuleRespListSqlAlarmLevelEnum | string): SqlAlarmRuleRespList {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: SqlAlarmRuleRespListSqlAlarmLevelEnum | string  | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel(): SqlAlarmRuleRespListSqlAlarmLevelEnum | string | undefined {
        return this['sql_alarm_level'];
    }
    public withSqlAlarmSend(sqlAlarmSend: boolean): SqlAlarmRuleRespList {
        this['sql_alarm_send'] = sqlAlarmSend;
        return this;
    }
    public set sqlAlarmSend(sqlAlarmSend: boolean  | undefined) {
        this['sql_alarm_send'] = sqlAlarmSend;
    }
    public get sqlAlarmSend(): boolean | undefined {
        return this['sql_alarm_send'];
    }
    public withDomainId(domainId: string): SqlAlarmRuleRespList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): SqlAlarmRuleRespList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): SqlAlarmRuleRespList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTemplateName(templateName: string): SqlAlarmRuleRespList {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withStatus(status: SqlAlarmRuleRespListStatusEnum | string): SqlAlarmRuleRespList {
        this['status'] = status;
        return this;
    }
    public withTriggerConditionCount(triggerConditionCount: number): SqlAlarmRuleRespList {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): SqlAlarmRuleRespList {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): SqlAlarmRuleRespList {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): SqlAlarmRuleRespList {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SqlAlarmRuleRespListSqlAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum SqlAlarmRuleRespListStatusEnum {
    RUNNING = 'RUNNING',
    STOPPING = 'STOPPING'
}
