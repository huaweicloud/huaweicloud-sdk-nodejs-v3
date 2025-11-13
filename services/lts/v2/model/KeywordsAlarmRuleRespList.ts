import { Frequency } from './Frequency';
import { KeywordsRequestResponse } from './KeywordsRequestResponse';
import { TagsResBody } from './TagsResBody';


export class KeywordsAlarmRuleRespList {
    public projectId?: string;
    private 'keywords_alarm_rule_id'?: string;
    private 'keywords_alarm_rule_name'?: string;
    private 'keywords_alarm_rule_description'?: string;
    private 'condition_expression'?: string;
    private 'keywords_requests'?: Array<KeywordsRequestResponse>;
    public frequency?: Frequency;
    private 'keywords_alarm_level'?: KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | string;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public status?: KeywordsAlarmRuleRespListStatusEnum | string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    private 'notification_frequency'?: KeywordsAlarmRuleRespListNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    public tags?: Array<TagsResBody>;
    public constructor(keywordsAlarmRuleId?: string, keywordsAlarmRuleName?: string, keywordsAlarmRuleDescription?: string, conditionExpression?: string, keywordsRequests?: Array<KeywordsRequestResponse>, frequency?: Frequency, keywordsAlarmLevel?: string, domainId?: string, createTime?: number, updateTime?: number, notificationFrequency?: number) { 
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        this['condition_expression'] = conditionExpression;
        this['keywords_requests'] = keywordsRequests;
        this['frequency'] = frequency;
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        this['domain_id'] = domainId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['notification_frequency'] = notificationFrequency;
    }
    public withProjectId(projectId: string): KeywordsAlarmRuleRespList {
        this['projectId'] = projectId;
        return this;
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string  | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId(): string | undefined {
        return this['keywords_alarm_rule_id'];
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string  | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName(): string | undefined {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string  | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription(): string | undefined {
        return this['keywords_alarm_rule_description'];
    }
    public withConditionExpression(conditionExpression: string): KeywordsAlarmRuleRespList {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequestResponse>): KeywordsAlarmRuleRespList {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequestResponse>  | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests(): Array<KeywordsRequestResponse> | undefined {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: Frequency): KeywordsAlarmRuleRespList {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | string  | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel(): KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | string | undefined {
        return this['keywords_alarm_level'];
    }
    public withDomainId(domainId: string): KeywordsAlarmRuleRespList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): KeywordsAlarmRuleRespList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): KeywordsAlarmRuleRespList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withStatus(status: KeywordsAlarmRuleRespListStatusEnum | string): KeywordsAlarmRuleRespList {
        this['status'] = status;
        return this;
    }
    public withTriggerConditionCount(triggerConditionCount: number): KeywordsAlarmRuleRespList {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): KeywordsAlarmRuleRespList {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): KeywordsAlarmRuleRespList {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): KeywordsAlarmRuleRespList {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
    public withNotificationFrequency(notificationFrequency: KeywordsAlarmRuleRespListNotificationFrequencyEnum | number): KeywordsAlarmRuleRespList {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: KeywordsAlarmRuleRespListNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): KeywordsAlarmRuleRespListNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): KeywordsAlarmRuleRespList {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withTags(tags: Array<TagsResBody>): KeywordsAlarmRuleRespList {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum KeywordsAlarmRuleRespListStatusEnum {
    RUNNING_ = 'RUNNING  启用',
    STOPPING_ = 'STOPPING  停止'
}
/**
    * @export
    * @enum {string}
    */
export enum KeywordsAlarmRuleRespListNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
