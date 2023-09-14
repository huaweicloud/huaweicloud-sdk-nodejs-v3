import { KeywordsRequest } from './KeywordsRequest';
import { Topics } from './Topics';


export class KeywordsAlarmRuleRespList {
    public projectId?: string;
    private 'keywords_alarm_rule_id'?: string;
    private 'keywords_alarm_rule_name'?: string;
    private 'keywords_alarm_rule_description'?: string;
    private 'condition_expression'?: string;
    private 'keywords_requests'?: Array<KeywordsRequest>;
    public frequency?: object;
    private 'keywords_alarm_level'?: KeywordsAlarmRuleRespListKeywordsAlarmLevelEnum | string;
    private 'keywords_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public topics?: Array<Topics>;
    private 'template_name'?: string;
    public status?: KeywordsAlarmRuleRespListStatusEnum | string;
    private 'trigger_condition_count'?: number;
    private 'trigger_condition_frequency'?: number;
    private 'whether_recovery_policy'?: boolean;
    private 'recovery_policy'?: number;
    public constructor(projectId?: string, keywordsAlarmRuleId?: string, keywordsAlarmRuleName?: string, keywordsAlarmRuleDescription?: string, conditionExpression?: string, keywordsRequests?: Array<KeywordsRequest>, frequency?: object, keywordsAlarmLevel?: string, keywordsAlarmSend?: boolean, domainId?: string, createTime?: number, updateTime?: number, topics?: Array<Topics>) { 
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
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): KeywordsAlarmRuleRespList {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest>  | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests(): Array<KeywordsRequest> | undefined {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: object): KeywordsAlarmRuleRespList {
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
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): KeywordsAlarmRuleRespList {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean  | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend(): boolean | undefined {
        return this['keywords_alarm_send'];
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
    public withTopics(topics: Array<Topics>): KeywordsAlarmRuleRespList {
        this['topics'] = topics;
        return this;
    }
    public withTemplateName(templateName: string): KeywordsAlarmRuleRespList {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
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
