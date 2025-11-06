import { CreateSqlAlarmRuleFrequency } from './CreateSqlAlarmRuleFrequency';
import { SqlRequest } from './SqlRequest';
import { TagsRequestBody } from './TagsRequestBody';


export class UpdateSqlAlarmRuleRequestBody {
    private 'sql_alarm_rule_id'?: string;
    private 'sql_alarm_rule_name'?: string;
    private 'alarm_rule_alias'?: string;
    private 'is_css_sql'?: boolean;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequest>;
    public frequency?: CreateSqlAlarmRuleFrequency;
    private 'condition_expression'?: string;
    private 'sql_alarm_level'?: UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string;
    private 'domain_id'?: string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    private 'notification_frequency'?: UpdateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    public tags?: Array<TagsRequestBody>;
    public constructor(sqlAlarmRuleId?: string, sqlAlarmRuleName?: string, sqlRequests?: Array<SqlRequest>, frequency?: CreateSqlAlarmRuleFrequency, conditionExpression?: string, sqlAlarmLevel?: string, domainId?: string, notificationFrequency?: number) { 
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        this['sql_requests'] = sqlRequests;
        this['frequency'] = frequency;
        this['condition_expression'] = conditionExpression;
        this['sql_alarm_level'] = sqlAlarmLevel;
        this['domain_id'] = domainId;
        this['notification_frequency'] = notificationFrequency;
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string  | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId(): string | undefined {
        return this['sql_alarm_rule_id'];
    }
    public withSqlAlarmRuleName(sqlAlarmRuleName: string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        return this;
    }
    public set sqlAlarmRuleName(sqlAlarmRuleName: string  | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName(): string | undefined {
        return this['sql_alarm_rule_name'];
    }
    public withAlarmRuleAlias(alarmRuleAlias: string): UpdateSqlAlarmRuleRequestBody {
        this['alarm_rule_alias'] = alarmRuleAlias;
        return this;
    }
    public set alarmRuleAlias(alarmRuleAlias: string  | undefined) {
        this['alarm_rule_alias'] = alarmRuleAlias;
    }
    public get alarmRuleAlias(): string | undefined {
        return this['alarm_rule_alias'];
    }
    public withIsCssSql(isCssSql: boolean): UpdateSqlAlarmRuleRequestBody {
        this['is_css_sql'] = isCssSql;
        return this;
    }
    public set isCssSql(isCssSql: boolean  | undefined) {
        this['is_css_sql'] = isCssSql;
    }
    public get isCssSql(): boolean | undefined {
        return this['is_css_sql'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string  | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription(): string | undefined {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequest>): UpdateSqlAlarmRuleRequestBody {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequest>  | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests(): Array<SqlRequest> | undefined {
        return this['sql_requests'];
    }
    public withFrequency(frequency: CreateSqlAlarmRuleFrequency): UpdateSqlAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): UpdateSqlAlarmRuleRequestBody {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withSqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string  | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel(): UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string | undefined {
        return this['sql_alarm_level'];
    }
    public withDomainId(domainId: string): UpdateSqlAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): UpdateSqlAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): UpdateSqlAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): UpdateSqlAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): UpdateSqlAlarmRuleRequestBody {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
    public withNotificationFrequency(notificationFrequency: UpdateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number): UpdateSqlAlarmRuleRequestBody {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: UpdateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): UpdateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): UpdateSqlAlarmRuleRequestBody {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withTags(tags: Array<TagsRequestBody>): UpdateSqlAlarmRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleRequestBodyNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
