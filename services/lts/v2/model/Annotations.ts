import { Results } from './Results';


export class Annotations {
    public message?: string;
    private 'log_info'?: string;
    private 'current_value'?: string;
    private 'old_annotations'?: string;
    private 'alarm_action_rule_name'?: string;
    private 'alarm_rule_alias'?: string;
    private 'alarm_rule_url'?: string;
    private 'alarm_status'?: string;
    private 'condition_expression'?: string;
    private 'condition_expression_with_value'?: string;
    private 'notification_frequency'?: string;
    private 'record_id'?: string;
    private 'recovery_policy'?: boolean;
    public results?: Array<Results>;
    public frequency?: string;
    public type?: string;
    public constructor(message?: string, logInfo?: string, currentValue?: string, oldAnnotations?: string) { 
        this['message'] = message;
        this['log_info'] = logInfo;
        this['current_value'] = currentValue;
        this['old_annotations'] = oldAnnotations;
    }
    public withMessage(message: string): Annotations {
        this['message'] = message;
        return this;
    }
    public withLogInfo(logInfo: string): Annotations {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: string  | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo(): string | undefined {
        return this['log_info'];
    }
    public withCurrentValue(currentValue: string): Annotations {
        this['current_value'] = currentValue;
        return this;
    }
    public set currentValue(currentValue: string  | undefined) {
        this['current_value'] = currentValue;
    }
    public get currentValue(): string | undefined {
        return this['current_value'];
    }
    public withOldAnnotations(oldAnnotations: string): Annotations {
        this['old_annotations'] = oldAnnotations;
        return this;
    }
    public set oldAnnotations(oldAnnotations: string  | undefined) {
        this['old_annotations'] = oldAnnotations;
    }
    public get oldAnnotations(): string | undefined {
        return this['old_annotations'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): Annotations {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withAlarmRuleAlias(alarmRuleAlias: string): Annotations {
        this['alarm_rule_alias'] = alarmRuleAlias;
        return this;
    }
    public set alarmRuleAlias(alarmRuleAlias: string  | undefined) {
        this['alarm_rule_alias'] = alarmRuleAlias;
    }
    public get alarmRuleAlias(): string | undefined {
        return this['alarm_rule_alias'];
    }
    public withAlarmRuleUrl(alarmRuleUrl: string): Annotations {
        this['alarm_rule_url'] = alarmRuleUrl;
        return this;
    }
    public set alarmRuleUrl(alarmRuleUrl: string  | undefined) {
        this['alarm_rule_url'] = alarmRuleUrl;
    }
    public get alarmRuleUrl(): string | undefined {
        return this['alarm_rule_url'];
    }
    public withAlarmStatus(alarmStatus: string): Annotations {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: string  | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus(): string | undefined {
        return this['alarm_status'];
    }
    public withConditionExpression(conditionExpression: string): Annotations {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withConditionExpressionWithValue(conditionExpressionWithValue: string): Annotations {
        this['condition_expression_with_value'] = conditionExpressionWithValue;
        return this;
    }
    public set conditionExpressionWithValue(conditionExpressionWithValue: string  | undefined) {
        this['condition_expression_with_value'] = conditionExpressionWithValue;
    }
    public get conditionExpressionWithValue(): string | undefined {
        return this['condition_expression_with_value'];
    }
    public withNotificationFrequency(notificationFrequency: string): Annotations {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: string  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): string | undefined {
        return this['notification_frequency'];
    }
    public withRecordId(recordId: string): Annotations {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withRecoveryPolicy(recoveryPolicy: boolean): Annotations {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: boolean  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): boolean | undefined {
        return this['recovery_policy'];
    }
    public withResults(results: Array<Results>): Annotations {
        this['results'] = results;
        return this;
    }
    public withFrequency(frequency: string): Annotations {
        this['frequency'] = frequency;
        return this;
    }
    public withType(type: string): Annotations {
        this['type'] = type;
        return this;
    }
}