import { FrequencyRespBody } from './FrequencyRespBody';
import { SqlRequestResponse } from './SqlRequestResponse';
import { TagsResBody } from './TagsResBody';
import { Topics } from './Topics';


export class SqlAlarmRuleRespList {
    private 'sql_alarm_rule_name'?: string;
    private 'is_css_sql'?: boolean;
    private 'sql_alarm_rule_id'?: string;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequestResponse>;
    public frequency?: FrequencyRespBody;
    private 'condition_expression'?: string;
    public topics?: Array<Topics>;
    private 'sql_alarm_level'?: SqlAlarmRuleRespListSqlAlarmLevelEnum | string;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'template_name'?: string;
    public status?: SqlAlarmRuleRespListStatusEnum | string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    private 'notification_frequency'?: SqlAlarmRuleRespListNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    public tags?: Array<TagsResBody>;
    public constructor(sqlAlarmRuleName?: string, sqlAlarmRuleId?: string, sqlAlarmRuleDescription?: string, sqlRequests?: Array<SqlRequestResponse>, frequency?: FrequencyRespBody, conditionExpression?: string, topics?: Array<Topics>, sqlAlarmLevel?: string, domainId?: string, createTime?: number, updateTime?: number, notificationFrequency?: number) { 
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        this['sql_requests'] = sqlRequests;
        this['frequency'] = frequency;
        this['condition_expression'] = conditionExpression;
        this['topics'] = topics;
        this['sql_alarm_level'] = sqlAlarmLevel;
        this['domain_id'] = domainId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['notification_frequency'] = notificationFrequency;
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
    public withIsCssSql(isCssSql: boolean): SqlAlarmRuleRespList {
        this['is_css_sql'] = isCssSql;
        return this;
    }
    public set isCssSql(isCssSql: boolean  | undefined) {
        this['is_css_sql'] = isCssSql;
    }
    public get isCssSql(): boolean | undefined {
        return this['is_css_sql'];
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
    public withSqlRequests(sqlRequests: Array<SqlRequestResponse>): SqlAlarmRuleRespList {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequestResponse>  | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests(): Array<SqlRequestResponse> | undefined {
        return this['sql_requests'];
    }
    public withFrequency(frequency: FrequencyRespBody): SqlAlarmRuleRespList {
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
    public withNotificationFrequency(notificationFrequency: SqlAlarmRuleRespListNotificationFrequencyEnum | number): SqlAlarmRuleRespList {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: SqlAlarmRuleRespListNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): SqlAlarmRuleRespListNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): SqlAlarmRuleRespList {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withTags(tags: Array<TagsResBody>): SqlAlarmRuleRespList {
        this['tags'] = tags;
        return this;
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
    RUNNING = 'RUNNING 启用',
    STOPPING = 'STOPPING 停止'
}
/**
    * @export
    * @enum {string}
    */
export enum SqlAlarmRuleRespListNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
