import { FrequencyRespBody } from './FrequencyRespBody';
import { SqlRequestResponse } from './SqlRequestResponse';
import { TagsResBody } from './TagsResBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSqlAlarmRuleResponse extends SdkResponse {
    private 'sql_alarm_rule_name'?: string;
    private 'alarm_rule_alias'?: string;
    private 'is_css_sql'?: boolean;
    public projectId?: string;
    private 'sql_alarm_rule_id'?: string;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequestResponse>;
    public frequency?: FrequencyRespBody;
    private 'condition_expression'?: string;
    private 'sql_alarm_level'?: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string;
    private 'sql_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'notification_frequency'?: UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    public tags?: Array<TagsResBody>;
    public constructor() { 
        super();
    }
    public withSqlAlarmRuleName(sqlAlarmRuleName: string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        return this;
    }
    public set sqlAlarmRuleName(sqlAlarmRuleName: string  | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName(): string | undefined {
        return this['sql_alarm_rule_name'];
    }
    public withAlarmRuleAlias(alarmRuleAlias: string): UpdateSqlAlarmRuleResponse {
        this['alarm_rule_alias'] = alarmRuleAlias;
        return this;
    }
    public set alarmRuleAlias(alarmRuleAlias: string  | undefined) {
        this['alarm_rule_alias'] = alarmRuleAlias;
    }
    public get alarmRuleAlias(): string | undefined {
        return this['alarm_rule_alias'];
    }
    public withIsCssSql(isCssSql: boolean): UpdateSqlAlarmRuleResponse {
        this['is_css_sql'] = isCssSql;
        return this;
    }
    public set isCssSql(isCssSql: boolean  | undefined) {
        this['is_css_sql'] = isCssSql;
    }
    public get isCssSql(): boolean | undefined {
        return this['is_css_sql'];
    }
    public withProjectId(projectId: string): UpdateSqlAlarmRuleResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string  | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId(): string | undefined {
        return this['sql_alarm_rule_id'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string  | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription(): string | undefined {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequestResponse>): UpdateSqlAlarmRuleResponse {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequestResponse>  | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests(): Array<SqlRequestResponse> | undefined {
        return this['sql_requests'];
    }
    public withFrequency(frequency: FrequencyRespBody): UpdateSqlAlarmRuleResponse {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): UpdateSqlAlarmRuleResponse {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withSqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string  | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel(): UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string | undefined {
        return this['sql_alarm_level'];
    }
    public withSqlAlarmSend(sqlAlarmSend: boolean): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_send'] = sqlAlarmSend;
        return this;
    }
    public set sqlAlarmSend(sqlAlarmSend: boolean  | undefined) {
        this['sql_alarm_send'] = sqlAlarmSend;
    }
    public get sqlAlarmSend(): boolean | undefined {
        return this['sql_alarm_send'];
    }
    public withDomainId(domainId: string): UpdateSqlAlarmRuleResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNotificationFrequency(notificationFrequency: UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number): UpdateSqlAlarmRuleResponse {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): UpdateSqlAlarmRuleResponse {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): UpdateSqlAlarmRuleResponse {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): UpdateSqlAlarmRuleResponse {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): UpdateSqlAlarmRuleResponse {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): UpdateSqlAlarmRuleResponse {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
    public withTags(tags: Array<TagsResBody>): UpdateSqlAlarmRuleResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'CRITICAL'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleResponseNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
