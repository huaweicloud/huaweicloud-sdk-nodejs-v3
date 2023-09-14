import { SqlRequest } from './SqlRequest';


export class CreateSqlAlarmRuleRequestBody {
    private 'sql_alarm_rule_name'?: string;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequest>;
    public frequency?: object;
    private 'condition_expression'?: string;
    private 'sql_alarm_level'?: CreateSqlAlarmRuleRequestBodySqlAlarmLevelEnum | string;
    private 'sql_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'notification_save_rule'?: object;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    public constructor(sqlAlarmRuleName?: string, sqlRequests?: Array<SqlRequest>, frequency?: object, conditionExpression?: string, sqlAlarmLevel?: string, sqlAlarmSend?: boolean, domainId?: string) { 
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        this['sql_requests'] = sqlRequests;
        this['frequency'] = frequency;
        this['condition_expression'] = conditionExpression;
        this['sql_alarm_level'] = sqlAlarmLevel;
        this['sql_alarm_send'] = sqlAlarmSend;
        this['domain_id'] = domainId;
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
    public withFrequency(frequency: object): CreateSqlAlarmRuleRequestBody {
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
    public withSqlAlarmSend(sqlAlarmSend: boolean): CreateSqlAlarmRuleRequestBody {
        this['sql_alarm_send'] = sqlAlarmSend;
        return this;
    }
    public set sqlAlarmSend(sqlAlarmSend: boolean  | undefined) {
        this['sql_alarm_send'] = sqlAlarmSend;
    }
    public get sqlAlarmSend(): boolean | undefined {
        return this['sql_alarm_send'];
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
    public withNotificationSaveRule(notificationSaveRule: object): CreateSqlAlarmRuleRequestBody {
        this['notification_save_rule'] = notificationSaveRule;
        return this;
    }
    public set notificationSaveRule(notificationSaveRule: object  | undefined) {
        this['notification_save_rule'] = notificationSaveRule;
    }
    public get notificationSaveRule(): object | undefined {
        return this['notification_save_rule'];
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
