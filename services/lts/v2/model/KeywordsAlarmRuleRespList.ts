import { Frequency } from './Frequency';
import { KeywordsRequest } from './KeywordsRequest';
import { Topics } from './Topics';


export class KeywordsAlarmRuleRespList {
    public projectId: string;
    private 'keywords_alarm_rule_id': string | undefined;
    private 'keywords_alarm_rule_name': string | undefined;
    private 'keywords_alarm_rule_description': string | undefined;
    private 'condition_expression': string | undefined;
    private 'keywords_requests': Array<KeywordsRequest> | undefined;
    public frequency: Frequency;
    private 'keywords_alarm_level': KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | undefined;
    private 'keywords_alarm_send': boolean | undefined;
    private 'domain_id': string | undefined;
    private 'create_time': number | undefined;
    private 'update_time': number | undefined;
    public topics: Array<Topics>;
    private 'template_name'?: string | undefined;
    public status?: KeywordsAlarmRuleRespListStatusEnum;
    private 'trigger_condition_count'?: number | undefined;
    private 'trigger_condition_frequency'?: number | undefined;
    private 'whether_recovery_policy'?: boolean | undefined;
    private 'recovery_policy'?: number | undefined;
    public constructor(projectId?: any, keywordsAlarmRuleId?: any, keywordsAlarmRuleName?: any, keywordsAlarmRuleDescription?: any, conditionExpression?: any, keywordsRequests?: any, frequency?: any, keywordsAlarmLevel?: any, keywordsAlarmSend?: any, domainId?: any, createTime?: any, updateTime?: any, topics?: any) { 
        this['projectId'] = projectId;
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        this['condition_expression'] = conditionExpression;
        this['keywords_requests'] = keywordsRequests;
        this['frequency'] = frequency;
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        this['keywords_alarm_send'] = keywordsAlarmSend;
        this['domain_id'] = domainId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['topics'] = topics;
    }
    public withProjectId(projectId: string): KeywordsAlarmRuleRespList {
        this['projectId'] = projectId;
        return this;
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId() {
        return this['keywords_alarm_rule_id'];
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName() {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): KeywordsAlarmRuleRespList {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription() {
        return this['keywords_alarm_rule_description'];
    }
    public withConditionExpression(conditionExpression: string): KeywordsAlarmRuleRespList {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression() {
        return this['condition_expression'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): KeywordsAlarmRuleRespList {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest> | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests() {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: Frequency): KeywordsAlarmRuleRespList {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum): KeywordsAlarmRuleRespList {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel() {
        return this['keywords_alarm_level'];
    }
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): KeywordsAlarmRuleRespList {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend() {
        return this['keywords_alarm_send'];
    }
    public withDomainId(domainId: string): KeywordsAlarmRuleRespList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): KeywordsAlarmRuleRespList {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): KeywordsAlarmRuleRespList {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withTopics(topics: Array<Topics>): KeywordsAlarmRuleRespList {
        this['topics'] = topics;
        return this;
    }
    public withTemplateName(templateName: string): KeywordsAlarmRuleRespList {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withStatus(status: KeywordsAlarmRuleRespListStatusEnum): KeywordsAlarmRuleRespList {
        this['status'] = status;
        return this;
    }
    public withTriggerConditionCount(triggerConditionCount: number): KeywordsAlarmRuleRespList {
        this['trigger_condition_count'] = triggerConditionCount;
        return this;
    }
    public set triggerConditionCount(triggerConditionCount: number | undefined) {
        this['trigger_condition_count'] = triggerConditionCount;
    }
    public get triggerConditionCount() {
        return this['trigger_condition_count'];
    }
    public withTriggerConditionFrequency(triggerConditionFrequency: number): KeywordsAlarmRuleRespList {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
        return this;
    }
    public set triggerConditionFrequency(triggerConditionFrequency: number | undefined) {
        this['trigger_condition_frequency'] = triggerConditionFrequency;
    }
    public get triggerConditionFrequency() {
        return this['trigger_condition_frequency'];
    }
    public withWhetherRecoveryPolicy(whetherRecoveryPolicy: boolean): KeywordsAlarmRuleRespList {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
        return this;
    }
    public set whetherRecoveryPolicy(whetherRecoveryPolicy: boolean | undefined) {
        this['whether_recovery_policy'] = whetherRecoveryPolicy;
    }
    public get whetherRecoveryPolicy() {
        return this['whether_recovery_policy'];
    }
    public withRecoveryPolicy(recoveryPolicy: number): KeywordsAlarmRuleRespList {
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
    RUNNING = 'RUNNING',
    STOPPING = 'STOPPING'
}
