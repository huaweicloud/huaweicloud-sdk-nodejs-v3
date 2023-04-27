import { Frequency } from './Frequency';
import { NotificationSaveRule } from './NotificationSaveRule';
import { SqlRequest } from './SqlRequest';


export class UpdateSqlAlarmRuleRequestBody {
    private 'sql_alarm_rule_id': string | undefined;
    private 'sql_alarm_rule_name': string | undefined;
    private 'sql_alarm_rule_description'?: string | undefined;
    private 'sql_requests': Array<SqlRequest> | undefined;
    public frequency: Frequency;
    private 'condition_expression': string | undefined;
    private 'sql_alarm_level': UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | undefined;
    private 'sql_alarm_send': boolean | undefined;
    private 'sql_alarm_send_code': UpdateSqlAlarmRuleRequestBodySqlAlarmSendCodeEnum | undefined;
    private 'domain_id': string | undefined;
    private 'notification_save_rule'?: NotificationSaveRule | undefined;
    private 'trigger_condition_count'?: number | undefined;
    private 'trigger_condition_frequency'?: number | undefined;
    private 'whether_recovery_policy'?: boolean | undefined;
    private 'recovery_policy'?: number | undefined;
    public constructor(sqlAlarmRuleId?: any, sqlAlarmRuleName?: any, sqlRequests?: any, frequency?: any, conditionExpression?: any, sqlAlarmLevel?: any, sqlAlarmSend?: any, sqlAlarmSendCode?: any, domainId?: any) { 
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        this['sql_requests'] = sqlRequests;
        this['frequency'] = frequency;
        this['condition_expression'] = conditionExpression;
        this['sql_alarm_level'] = sqlAlarmLevel;
        this['sql_alarm_send'] = sqlAlarmSend;
        this['sql_alarm_send_code'] = sqlAlarmSendCode;
        this['domain_id'] = domainId;
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId() {
        return this['sql_alarm_rule_id'];
    }
    public withSqlAlarmRuleName(sqlAlarmRuleName: string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        return this;
    }
    public set sqlAlarmRuleName(sqlAlarmRuleName: string | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName() {
        return this['sql_alarm_rule_name'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription() {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequest>): UpdateSqlAlarmRuleRequestBody {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequest> | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests() {
        return this['sql_requests'];
    }
    public withFrequency(frequency: Frequency): UpdateSqlAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): UpdateSqlAlarmRuleRequestBody {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression() {
        return this['condition_expression'];
    }
    public withSqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel() {
        return this['sql_alarm_level'];
    }
    public withSqlAlarmSend(sqlAlarmSend: boolean): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_send'] = sqlAlarmSend;
        return this;
    }
    public set sqlAlarmSend(sqlAlarmSend: boolean | undefined) {
        this['sql_alarm_send'] = sqlAlarmSend;
    }
    public get sqlAlarmSend() {
        return this['sql_alarm_send'];
    }
    public withSqlAlarmSendCode(sqlAlarmSendCode: UpdateSqlAlarmRuleRequestBodySqlAlarmSendCodeEnum): UpdateSqlAlarmRuleRequestBody {
        this['sql_alarm_send_code'] = sqlAlarmSendCode;
        return this;
    }
    public set sqlAlarmSendCode(sqlAlarmSendCode: UpdateSqlAlarmRuleRequestBodySqlAlarmSendCodeEnum | undefined) {
        this['sql_alarm_send_code'] = sqlAlarmSendCode;
    }
    public get sqlAlarmSendCode() {
        return this['sql_alarm_send_code'];
    }
    public withDomainId(domainId: string): UpdateSqlAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withNotificationSaveRule(notificationSaveRule: NotificationSaveRule): UpdateSqlAlarmRuleRequestBody {
        this['notification_save_rule'] = notificationSaveRule;
        return this;
    }
    public set notificationSaveRule(notificationSaveRule: NotificationSaveRule | undefined) {
        this['notification_save_rule'] = notificationSaveRule;
    }
    public get notificationSaveRule() {
        return this['notification_save_rule'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): UpdateSqlAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount() {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): UpdateSqlAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency() {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): UpdateSqlAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy() {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): UpdateSqlAlarmRuleRequestBody {
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
export enum UpdateSqlAlarmRuleRequestBodySqlAlarmSendCodeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
