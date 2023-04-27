import { Frequency } from './Frequency';
import { KeywordsRequest } from './KeywordsRequest';
import { NotificationSaveRule } from './NotificationSaveRule';


export class UpdateKeywordsAlarmRuleRequestBody {
    private 'keywords_alarm_rule_id': string | undefined;
    private 'keywords_alarm_rule_name': string | undefined;
    private 'keywords_alarm_rule_description'?: string | undefined;
    private 'keywords_requests': Array<KeywordsRequest> | undefined;
    public frequency: Frequency;
    private 'keywords_alarm_level': UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | undefined;
    private 'keywords_alarm_send': boolean | undefined;
    private 'keywords_alarm_send_code': UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum | undefined;
    private 'domain_id': string | undefined;
    private 'notification_save_rule'?: NotificationSaveRule | undefined;
    private 'trigger_condition_count'?: number | undefined;
    private 'trigger_condition_frequency'?: number | undefined;
    private 'whether_recovery_policy'?: boolean | undefined;
    private 'recovery_policy'?: number | undefined;
    public constructor(keywordsAlarmRuleId?: any, keywordsAlarmRuleName?: any, keywordsRequests?: any, frequency?: any, keywordsAlarmLevel?: any, keywordsAlarmSend?: any, keywordsAlarmSendCode?: any, domainId?: any) { 
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        this['keywords_requests'] = keywordsRequests;
        this['frequency'] = frequency;
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        this['keywords_alarm_send'] = keywordsAlarmSend;
        this['keywords_alarm_send_code'] = keywordsAlarmSendCode;
        this['domain_id'] = domainId;
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId() {
        return this['keywords_alarm_rule_id'];
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName() {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription() {
        return this['keywords_alarm_rule_description'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest> | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests() {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: Frequency): UpdateKeywordsAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel() {
        return this['keywords_alarm_level'];
    }
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend() {
        return this['keywords_alarm_send'];
    }
    public withKeywordsAlarmSendCode(keywordsAlarmSendCode: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_send_code'] = keywordsAlarmSendCode;
        return this;
    }
    public set keywordsAlarmSendCode(keywordsAlarmSendCode: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum | undefined) {
        this['keywords_alarm_send_code'] = keywordsAlarmSendCode;
    }
    public get keywordsAlarmSendCode() {
        return this['keywords_alarm_send_code'];
    }
    public withDomainId(domainId: string): UpdateKeywordsAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withNotificationSaveRule(notificationSaveRule: NotificationSaveRule): UpdateKeywordsAlarmRuleRequestBody {
        this['notification_save_rule'] = notificationSaveRule;
        return this;
    }
    public set notificationSaveRule(notificationSaveRule: NotificationSaveRule | undefined) {
        this['notification_save_rule'] = notificationSaveRule;
    }
    public get notificationSaveRule() {
        return this['notification_save_rule'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): UpdateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount() {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): UpdateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency() {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): UpdateKeywordsAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy() {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): UpdateKeywordsAlarmRuleRequestBody {
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
export enum UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
