import { Frequency } from './Frequency';
import { KeywordsRequest } from './KeywordsRequest';
import { NotificationSaveRule } from './NotificationSaveRule';


export class CreateKeywordsAlarmRuleRequestBody {
    private 'keywords_alarm_rule_name': string | undefined;
    private 'keywords_alarm_rule_description'?: string | undefined;
    private 'keywords_requests': Array<KeywordsRequest> | undefined;
    public frequency: Frequency;
    private 'keywords_alarm_level': CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | undefined;
    private 'keywords_alarm_send': boolean | undefined;
    private 'domain_id': string | undefined;
    private 'notification_save_rule'?: NotificationSaveRule | undefined;
    private 'trigger_condition_count'?: number | undefined;
    private 'trigger_condition_frequency'?: number | undefined;
    private 'whether_recovery_policy'?: boolean | undefined;
    private 'recovery_policy'?: number | undefined;
    public constructor(keywordsAlarmRuleName?: any, keywordsRequests?: any, frequency?: any, keywordsAlarmLevel?: any, keywordsAlarmSend?: any, domainId?: any) { 
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        this['keywords_requests'] = keywordsRequests;
        this['frequency'] = frequency;
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        this['keywords_alarm_send'] = keywordsAlarmSend;
        this['domain_id'] = domainId;
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName() {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription() {
        return this['keywords_alarm_rule_description'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest> | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests() {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: Frequency): CreateKeywordsAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel() {
        return this['keywords_alarm_level'];
    }
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend() {
        return this['keywords_alarm_send'];
    }
    public withDomainId(domainId: string): CreateKeywordsAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withNotificationSaveRule(notificationSaveRule: NotificationSaveRule): CreateKeywordsAlarmRuleRequestBody {
        this['notification_save_rule'] = notificationSaveRule;
        return this;
    }
    public set notificationSaveRule(notificationSaveRule: NotificationSaveRule | undefined) {
        this['notification_save_rule'] = notificationSaveRule;
    }
    public get notificationSaveRule() {
        return this['notification_save_rule'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): CreateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount() {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): CreateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency() {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): CreateKeywordsAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy() {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): CreateKeywordsAlarmRuleRequestBody {
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
export enum CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'CRITICAL'
}
