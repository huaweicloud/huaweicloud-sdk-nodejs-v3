import { CreateSqlAlarmRuleFrequency } from './CreateSqlAlarmRuleFrequency';
import { SqlRequest } from './SqlRequest';
import { TagsRequestBody } from './TagsRequestBody';


export class CreateSqlAlarmRuleRequestBody {
    private 'sql_alarm_rule_name'?: string;
    private 'is_css_sql'?: boolean;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequest>;
    public frequency?: CreateSqlAlarmRuleFrequency;
    private 'condition_expression'?: string;
    private 'sql_alarm_level'?: CreateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string;
    private 'domain_id'?: string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    private 'notification_frequency'?: CreateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    public tags?: Array<TagsRequestBody>;
    public constructor(sqlAlarmRuleName?: string, sqlRequests?: Array<SqlRequest>, frequency?: CreateSqlAlarmRuleFrequency, conditionExpression?: string, sqlAlarmLevel?: string, domainId?: string, notificationFrequency?: number) { 
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        this['sql_requests'] = sqlRequests;
        this['frequency'] = frequency;
        this['condition_expression'] = conditionExpression;
        this['sql_alarm_level'] = sqlAlarmLevel;
        this['domain_id'] = domainId;
        this['notification_frequency'] = notificationFrequency;
    }
    public withSqlAlarmRuleName(sqlAlarmRuleName: string): CreateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        return this;
    }
    public set sqlAlarmRuleName(sqlAlarmRuleName: string  | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName(): string | undefined {
        return this['sql_alarm_rule_name'];
    }
    public withIsCssSql(isCssSql: boolean): CreateSqlAlarmRuleRequestBody {
        this['is_css_sql'] = isCssSql;
        return this;
    }
    public set isCssSql(isCssSql: boolean  | undefined) {
        this['is_css_sql'] = isCssSql;
    }
    public get isCssSql(): boolean | undefined {
        return this['is_css_sql'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): CreateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string  | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription(): string | undefined {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequest>): CreateSqlAlarmRuleRequestBody {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequest>  | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests(): Array<SqlRequest> | undefined {
        return this['sql_requests'];
    }
    public withFrequency(frequency: CreateSqlAlarmRuleFrequency): CreateSqlAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): CreateSqlAlarmRuleRequestBody {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withSqlAlarmLevel(sqlAlarmLevel: CreateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string): CreateSqlAlarmRuleRequestBody {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: CreateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string  | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel(): CreateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string | undefined {
        return this['sql_alarm_level'];
    }
    public withDomainId(domainId: string): CreateSqlAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): CreateSqlAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): CreateSqlAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): CreateSqlAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): CreateSqlAlarmRuleRequestBody {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
    public withNotificationFrequency(notificationFrequency: CreateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number): CreateSqlAlarmRuleRequestBody {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: CreateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): CreateSqlAlarmRuleRequestBodyNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): CreateSqlAlarmRuleRequestBody {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withTags(tags: Array<TagsRequestBody>): CreateSqlAlarmRuleRequestBody {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlAlarmRuleRequestBodySqlAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSqlAlarmRuleRequestBodyNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
