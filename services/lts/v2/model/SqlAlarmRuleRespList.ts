import { Frequency } from './Frequency';
import { SqlRequest } from './SqlRequest';
import { Topics } from './Topics';


export class SqlAlarmRuleRespList {
    private 'sql_alarm_rule_name': string | undefined;
    private 'sql_alarm_rule_id': string | undefined;
    private 'sql_alarm_rule_description': string | undefined;
    private 'sql_requests': Array<SqlRequest> | undefined;
    public frequency: Frequency;
    private 'condition_expression': string | undefined;
    public topics: Array<Topics>;
    private 'sql_alarm_level': SqlAlarmRuleRespListSqlAlarmLevelEnum | undefined;
    private 'sql_alarm_send': boolean | undefined;
    private 'domain_id': string | undefined;
    private 'create_time': number | undefined;
    private 'update_time': number | undefined;
    private 'template_name'?: string | undefined;
    public status?: SqlAlarmRuleRespListStatusEnum;
    private 'trigger_condition_count'?: number | undefined;
    private 'trigger_condition_frequency'?: number | undefined;
    private 'whether_recovery_policy'?: boolean | undefined;
    private 'recovery_policy'?: number | undefined;
    public constructor(sqlAlarmRuleName?: any, sqlAlarmRuleId?: any, sqlAlarmRuleDescription?: any, sqlRequests?: any, frequency?: any, conditionExpression?: any, topics?: any, sqlAlarmLevel?: any, sqlAlarmSend?: any, domainId?: any, createTime?: any, updateTime?: any) { 
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
    public set sqlAlarmRuleName(sqlAlarmRuleName: string | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName() {
        return this['sql_alarm_rule_name'];
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): SqlAlarmRuleRespList {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId() {
        return this['sql_alarm_rule_id'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): SqlAlarmRuleRespList {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription() {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequest>): SqlAlarmRuleRespList {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequest> | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests() {
        return this['sql_requests'];
    }
    public withFrequency(frequency: Frequency): SqlAlarmRuleRespList {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): SqlAlarmRuleRespList {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression() {
        return this['condition_expression'];
    }
    public withTopics(topics: Array<Topics>): SqlAlarmRuleRespList {
        this['topics'] = topics;
        return this;
    }
    public withSqlAlarmLevel(sqlAlarmLevel: SqlAlarmRuleRespListSqlAlarmLevelEnum): SqlAlarmRuleRespList {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: SqlAlarmRuleRespListSqlAlarmLevelEnum | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel() {
        return this['sql_alarm_level'];
    }
    public withSqlAlarmSend(sqlAlarmSend: boolean): SqlAlarmRuleRespList {
        this['sql_alarm_send'] = sqlAlarmSend;
        return this;
    }
    public set sqlAlarmSend(sqlAlarmSend: boolean | undefined) {
        this['sql_alarm_send'] = sqlAlarmSend;
    }
    public get sqlAlarmSend() {
        return this['sql_alarm_send'];
    }
    public withDomainId(domainId: string): SqlAlarmRuleRespList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): SqlAlarmRuleRespList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): SqlAlarmRuleRespList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withTemplateName(templateName: string): SqlAlarmRuleRespList {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withStatus(status: SqlAlarmRuleRespListStatusEnum): SqlAlarmRuleRespList {
        this['status'] = status;
        return this;
    }
    public withTriggerConditionCount(triggerConditionCount: number): SqlAlarmRuleRespList {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount() {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): SqlAlarmRuleRespList {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency() {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): SqlAlarmRuleRespList {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy() {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): SqlAlarmRuleRespList {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy() {
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
