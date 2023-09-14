import { KeywordsRequest } from './KeywordsRequest';


export class UpdateKeywordsAlarmRuleRequestBody {
    private 'keywords_alarm_rule_id'?: string;
    private 'keywords_alarm_rule_name'?: string;
    private 'keywords_alarm_rule_description'?: string;
    private 'keywords_requests'?: Array<KeywordsRequest>;
    public frequency?: object;
    private 'keywords_alarm_level'?: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string;
    private 'keywords_alarm_send'?: boolean;
    private 'keywords_alarm_send_code'?: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum | number;
    private 'domain_id'?: string;
    private 'notification_save_rule'?: object;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    public constructor(keywordsAlarmRuleId?: string, keywordsAlarmRuleName?: string, keywordsRequests?: Array<KeywordsRequest>, frequency?: object, keywordsAlarmLevel?: string, keywordsAlarmSend?: boolean, keywordsAlarmSendCode?: number, domainId?: string) { 
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
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string  | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId(): string | undefined {
        return this['keywords_alarm_rule_id'];
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string  | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName(): string | undefined {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string  | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription(): string | undefined {
        return this['keywords_alarm_rule_description'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest>  | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests(): Array<KeywordsRequest> | undefined {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: object): UpdateKeywordsAlarmRuleRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string  | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel(): UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmLevelEnum | string | undefined {
        return this['keywords_alarm_level'];
    }
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean  | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend(): boolean | undefined {
        return this['keywords_alarm_send'];
    }
    public withKeywordsAlarmSendCode(keywordsAlarmSendCode: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum | number): UpdateKeywordsAlarmRuleRequestBody {
        this['keywords_alarm_send_code'] = keywordsAlarmSendCode;
        return this;
    }
    public set keywordsAlarmSendCode(keywordsAlarmSendCode: UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum | number  | undefined) {
        this['keywords_alarm_send_code'] = keywordsAlarmSendCode;
    }
    public get keywordsAlarmSendCode(): UpdateKeywordsAlarmRuleRequestBodyKeywordsAlarmSendCodeEnum | number | undefined {
        return this['keywords_alarm_send_code'];
    }
    public withDomainId(domainId: string): UpdateKeywordsAlarmRuleRequestBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNotificationSaveRule(notificationSaveRule: object): UpdateKeywordsAlarmRuleRequestBody {
        this['notification_save_rule'] = notificationSaveRule;
        return this;
    }
    public set notificationSaveRule(notificationSaveRule: object  | undefined) {
        this['notification_save_rule'] = notificationSaveRule;
    }
    public get notificationSaveRule(): object | undefined {
        return this['notification_save_rule'];
    }
    public withTriggerConditionCount(triggerConditionCount: number): UpdateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): UpdateKeywordsAlarmRuleRequestBody {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): UpdateKeywordsAlarmRuleRequestBody {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): UpdateKeywordsAlarmRuleRequestBody {
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
