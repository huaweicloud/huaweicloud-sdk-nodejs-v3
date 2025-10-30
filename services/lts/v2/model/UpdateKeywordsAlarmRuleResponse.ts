import { FrequencyRespBody } from './FrequencyRespBody';
import { KeywordsResBody } from './KeywordsResBody';
import { TagsResBody } from './TagsResBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeywordsAlarmRuleResponse extends SdkResponse {
    private 'keywords_alarm_rule_id'?: string;
    private 'keywords_alarm_rule_name'?: string;
    private 'alarm_rule_alias'?: string;
    private 'keywords_alarm_rule_description'?: string;
    private 'keywords_requests'?: Array<KeywordsResBody>;
    public frequency?: FrequencyRespBody;
    private 'keywords_alarm_level'?: UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum | string;
    private 'keywords_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public projectId?: string;
    private 'condition_expression'?: string;
    private 'notification_frequency'?: UpdateKeywordsAlarmRuleResponseNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    private 'recovery_policy'?: number;
    public tags?: Array<TagsResBody>;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    public constructor() { 
        super();
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string  | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId(): string | undefined {
        return this['keywords_alarm_rule_id'];
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string  | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName(): string | undefined {
        return this['keywords_alarm_rule_name'];
    }
    public withAlarmRuleAlias(alarmRuleAlias: string): UpdateKeywordsAlarmRuleResponse {
        this['alarm_rule_alias'] = alarmRuleAlias;
        return this;
    }
    public set alarmRuleAlias(alarmRuleAlias: string  | undefined) {
        this['alarm_rule_alias'] = alarmRuleAlias;
    }
    public get alarmRuleAlias(): string | undefined {
        return this['alarm_rule_alias'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string  | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription(): string | undefined {
        return this['keywords_alarm_rule_description'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsResBody>): UpdateKeywordsAlarmRuleResponse {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsResBody>  | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests(): Array<KeywordsResBody> | undefined {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: FrequencyRespBody): UpdateKeywordsAlarmRuleResponse {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum | string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum | string  | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel(): UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum | string | undefined {
        return this['keywords_alarm_level'];
    }
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean  | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend(): boolean | undefined {
        return this['keywords_alarm_send'];
    }
    public withDomainId(domainId: string): UpdateKeywordsAlarmRuleResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): UpdateKeywordsAlarmRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UpdateKeywordsAlarmRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): UpdateKeywordsAlarmRuleResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withConditionExpression(conditionExpression: string): UpdateKeywordsAlarmRuleResponse {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withNotificationFrequency(notificationFrequency: UpdateKeywordsAlarmRuleResponseNotificationFrequencyEnum | number): UpdateKeywordsAlarmRuleResponse {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: UpdateKeywordsAlarmRuleResponseNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): UpdateKeywordsAlarmRuleResponseNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): UpdateKeywordsAlarmRuleResponse {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): UpdateKeywordsAlarmRuleResponse {
        this['recovery_policy'] = recoveryPolicy;
        return this;
    }
    public set recoveryPolicy(recoveryPolicy: number  | undefined) {
        this['recovery_policy'] = recoveryPolicy;
    }
    public get recoveryPolicy(): number | undefined {
        return this['recovery_policy'];
    }
    public withTags(tags: Array<TagsResBody>): UpdateKeywordsAlarmRuleResponse {
        this['tags'] = tags;
        return this;
    }
    public withTriggerConditionCount(triggerConditionCount: number): UpdateKeywordsAlarmRuleResponse {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number  | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount(): number | undefined {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): UpdateKeywordsAlarmRuleResponse {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number  | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency(): number | undefined {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): UpdateKeywordsAlarmRuleResponse {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean  | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy(): boolean | undefined {
        return this['whether_recovery_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'Critical'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateKeywordsAlarmRuleResponseNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
