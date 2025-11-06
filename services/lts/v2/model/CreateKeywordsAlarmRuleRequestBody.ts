import { Frequency } from './Frequency';
import { KeywordsRequest } from './KeywordsRequest';
import { TagsRequestBody } from './TagsRequestBody';


export class CreateKeywordsAlarmRuleRequestBody {
    private 'keywords_alarm_rule_name'?: string;
    private 'keywords_alarm_rule_description'?: string;
    private 'keywords_requests'?: Array<KeywordsRequest>;
    public frequency?: Frequency;
    private 'keywords_alarm_level'?: CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string;
    private 'domain_id'?: string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    private 'notification_frequency'?: CreateKeywordsAlarmRuleRequestBodyNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    public tags?: Array<TagsRequestBody>;
    public constructor(keywordsAlarmRuleName?: string, keywordsRequests?: Array<KeywordsRequest>, frequency?: Frequency, keywordsAlarmLevel?: string, domainId?: string, notificationFrequency?: number) { 
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        this['keywords_requests'] = keywordsRequests;
        this['frequency'] = frequency;
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        this['domain_id'] = domainId;
        this['notification_frequency'] = notificationFrequency;
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string  | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName(): string | undefined {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string  | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription(): string | undefined {
        return this['keywords_alarm_rule_description'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest>  | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests(): Array<KeywordsRequest> | undefined {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: Frequency): CreateKeywordsAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string): CreateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string  | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel(): CreateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string | undefined {
        return this['keywords_alarm_level'];
    }
    public withDomainId(domainId: string): CreateKeywordsAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): CreateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): CreateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): CreateKeywordsAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): CreateKeywordsAlarmRuleRequestBody {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
    public withNotificationFrequency(notificationFrequency: CreateKeywordsAlarmRuleRequestBodyNotificationFrequencyEnum | number): CreateKeywordsAlarmRuleRequestBody {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: CreateKeywordsAlarmRuleRequestBodyNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): CreateKeywordsAlarmRuleRequestBodyNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): CreateKeywordsAlarmRuleRequestBody {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withTags(tags: Array<TagsRequestBody>): CreateKeywordsAlarmRuleRequestBody {
        this['tags'] = tags;
        return this;
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
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateKeywordsAlarmRuleRequestBodyNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
