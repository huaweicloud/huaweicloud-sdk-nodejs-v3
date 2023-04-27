import { Frequency } from './Frequency';
import { KeywordsRequest } from './KeywordsRequest';
import { Topics } from './Topics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeywordsAlarmRuleResponse extends SdkResponse {
    private 'keywords_alarm_rule_id'?: string | undefined;
    private 'keywords_alarm_rule_name'?: string | undefined;
    private 'keywords_alarm_rule_description'?: string | undefined;
    private 'keywords_requests'?: Array<KeywordsRequest> | undefined;
    public frequency?: Frequency;
    private 'keywords_alarm_level'?: UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum | undefined;
    private 'keywords_alarm_send'?: boolean | undefined;
    private 'domain_id'?: string | undefined;
    private 'create_time'?: number | undefined;
    private 'update_time'?: number | undefined;
    public language?: string;
    public projectId?: string;
    public topics?: Array<Topics>;
    private 'condition_expression'?: string | undefined;
    public indexId?: string;
    public constructor() { 
        super();
    }
    public withKeywordsAlarmRuleId(keywordsAlarmRuleId: string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
        return this;
    }
    public set keywordsAlarmRuleId(keywordsAlarmRuleId: string | undefined) {
        this['keywords_alarm_rule_id'] = keywordsAlarmRuleId;
    }
    public get keywordsAlarmRuleId() {
        return this['keywords_alarm_rule_id'];
    }
    public withKeywordsAlarmRuleName(keywordsAlarmRuleName: string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
        return this;
    }
    public set keywordsAlarmRuleName(keywordsAlarmRuleName: string | undefined) {
        this['keywords_alarm_rule_name'] = keywordsAlarmRuleName;
    }
    public get keywordsAlarmRuleName() {
        return this['keywords_alarm_rule_name'];
    }
    public withKeywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
        return this;
    }
    public set keywordsAlarmRuleDescription(keywordsAlarmRuleDescription: string | undefined) {
        this['keywords_alarm_rule_description'] = keywordsAlarmRuleDescription;
    }
    public get keywordsAlarmRuleDescription() {
        return this['keywords_alarm_rule_description'];
    }
    public withKeywordsRequests(keywordsRequests: Array<KeywordsRequest>): UpdateKeywordsAlarmRuleResponse {
        this['keywords_requests'] = keywordsRequests;
        return this;
    }
    public set keywordsRequests(keywordsRequests: Array<KeywordsRequest> | undefined) {
        this['keywords_requests'] = keywordsRequests;
    }
    public get keywordsRequests() {
        return this['keywords_requests'];
    }
    public withFrequency(frequency: Frequency): UpdateKeywordsAlarmRuleResponse {
        this['frequency'] = frequency;
        return this;
    }
    public withKeywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
        return this;
    }
    public set keywordsAlarmLevel(keywordsAlarmLevel: UpdateKeywordsAlarmRuleResponseKeywordsAlarmLevelEnum | undefined) {
        this['keywords_alarm_level'] = keywordsAlarmLevel;
    }
    public get keywordsAlarmLevel() {
        return this['keywords_alarm_level'];
    }
    public withKeywordsAlarmSend(keywordsAlarmSend: boolean): UpdateKeywordsAlarmRuleResponse {
        this['keywords_alarm_send'] = keywordsAlarmSend;
        return this;
    }
    public set keywordsAlarmSend(keywordsAlarmSend: boolean | undefined) {
        this['keywords_alarm_send'] = keywordsAlarmSend;
    }
    public get keywordsAlarmSend() {
        return this['keywords_alarm_send'];
    }
    public withDomainId(domainId: string): UpdateKeywordsAlarmRuleResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): UpdateKeywordsAlarmRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UpdateKeywordsAlarmRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withLanguage(language: string): UpdateKeywordsAlarmRuleResponse {
        this['language'] = language;
        return this;
    }
    public withProjectId(projectId: string): UpdateKeywordsAlarmRuleResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withTopics(topics: Array<Topics>): UpdateKeywordsAlarmRuleResponse {
        this['topics'] = topics;
        return this;
    }
    public withConditionExpression(conditionExpression: string): UpdateKeywordsAlarmRuleResponse {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression() {
        return this['condition_expression'];
    }
    public withIndexId(indexId: string): UpdateKeywordsAlarmRuleResponse {
        this['indexId'] = indexId;
        return this;
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
