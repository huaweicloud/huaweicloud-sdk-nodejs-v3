import { FrequencyRespBody } from './FrequencyRespBody';
import { SqlRequest } from './SqlRequest';
import { Topics } from './Topics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSqlAlarmRuleResponse extends SdkResponse {
    private 'sql_alarm_rule_name'?: string;
    private 'alarm_rule_alias'?: string;
    private 'is_css_sql'?: boolean;
    public indexId?: string;
    public projectId?: string;
    private 'sql_alarm_rule_id'?: string;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequest>;
    public frequency?: FrequencyRespBody;
    private 'condition_expression'?: string;
    private 'sql_alarm_level'?: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string;
    private 'sql_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public topics?: Array<Topics>;
    public language?: UpdateSqlAlarmRuleResponseLanguageEnum | string;
    public id?: string;
    private 'notification_frequency'?: UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number;
    private 'alarm_action_rule_name'?: string;
    public constructor() { 
        super();
    }
    public withSqlAlarmRuleName(sqlAlarmRuleName: string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
        return this;
    }
    public set sqlAlarmRuleName(sqlAlarmRuleName: string  | undefined) {
        this['sql_alarm_rule_name'] = sqlAlarmRuleName;
    }
    public get sqlAlarmRuleName(): string | undefined {
        return this['sql_alarm_rule_name'];
    }
    public withAlarmRuleAlias(alarmRuleAlias: string): UpdateSqlAlarmRuleResponse {
        this['alarm_rule_alias'] = alarmRuleAlias;
        return this;
    }
    public set alarmRuleAlias(alarmRuleAlias: string  | undefined) {
        this['alarm_rule_alias'] = alarmRuleAlias;
    }
    public get alarmRuleAlias(): string | undefined {
        return this['alarm_rule_alias'];
    }
    public withIsCssSql(isCssSql: boolean): UpdateSqlAlarmRuleResponse {
        this['is_css_sql'] = isCssSql;
        return this;
    }
    public set isCssSql(isCssSql: boolean  | undefined) {
        this['is_css_sql'] = isCssSql;
    }
    public get isCssSql(): boolean | undefined {
        return this['is_css_sql'];
    }
    public withIndexId(indexId: string): UpdateSqlAlarmRuleResponse {
        this['indexId'] = indexId;
        return this;
    }
    public withProjectId(projectId: string): UpdateSqlAlarmRuleResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string  | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId(): string | undefined {
        return this['sql_alarm_rule_id'];
    }
    public withSqlAlarmRuleDescription(sqlAlarmRuleDescription: string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
        return this;
    }
    public set sqlAlarmRuleDescription(sqlAlarmRuleDescription: string  | undefined) {
        this['sql_alarm_rule_description'] = sqlAlarmRuleDescription;
    }
    public get sqlAlarmRuleDescription(): string | undefined {
        return this['sql_alarm_rule_description'];
    }
    public withSqlRequests(sqlRequests: Array<SqlRequest>): UpdateSqlAlarmRuleResponse {
        this['sql_requests'] = sqlRequests;
        return this;
    }
    public set sqlRequests(sqlRequests: Array<SqlRequest>  | undefined) {
        this['sql_requests'] = sqlRequests;
    }
    public get sqlRequests(): Array<SqlRequest> | undefined {
        return this['sql_requests'];
    }
    public withFrequency(frequency: FrequencyRespBody): UpdateSqlAlarmRuleResponse {
        this['frequency'] = frequency;
        return this;
    }
    public withConditionExpression(conditionExpression: string): UpdateSqlAlarmRuleResponse {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withSqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_level'] = sqlAlarmLevel;
        return this;
    }
    public set sqlAlarmLevel(sqlAlarmLevel: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string  | undefined) {
        this['sql_alarm_level'] = sqlAlarmLevel;
    }
    public get sqlAlarmLevel(): UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string | undefined {
        return this['sql_alarm_level'];
    }
    public withSqlAlarmSend(sqlAlarmSend: boolean): UpdateSqlAlarmRuleResponse {
        this['sql_alarm_send'] = sqlAlarmSend;
        return this;
    }
    public set sqlAlarmSend(sqlAlarmSend: boolean  | undefined) {
        this['sql_alarm_send'] = sqlAlarmSend;
    }
    public get sqlAlarmSend(): boolean | undefined {
        return this['sql_alarm_send'];
    }
    public withDomainId(domainId: string): UpdateSqlAlarmRuleResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreateTime(createTime: number): UpdateSqlAlarmRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UpdateSqlAlarmRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTopics(topics: Array<Topics>): UpdateSqlAlarmRuleResponse {
        this['topics'] = topics;
        return this;
    }
    public withLanguage(language: UpdateSqlAlarmRuleResponseLanguageEnum | string): UpdateSqlAlarmRuleResponse {
        this['language'] = language;
        return this;
    }
    public withId(id: string): UpdateSqlAlarmRuleResponse {
        this['id'] = id;
        return this;
    }
    public withNotificationFrequency(notificationFrequency: UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number): UpdateSqlAlarmRuleResponse {
        this['notification_frequency'] = notificationFrequency;
        return this;
    }
    public set notificationFrequency(notificationFrequency: UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number  | undefined) {
        this['notification_frequency'] = notificationFrequency;
    }
    public get notificationFrequency(): UpdateSqlAlarmRuleResponseNotificationFrequencyEnum | number | undefined {
        return this['notification_frequency'];
    }
    public withAlarmActionRuleName(alarmActionRuleName: string): UpdateSqlAlarmRuleResponse {
        this['alarm_action_rule_name'] = alarmActionRuleName;
        return this;
    }
    public set alarmActionRuleName(alarmActionRuleName: string  | undefined) {
        this['alarm_action_rule_name'] = alarmActionRuleName;
    }
    public get alarmActionRuleName(): string | undefined {
        return this['alarm_action_rule_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum {
    INFO = 'Info',
    MINOR = 'Minor',
    MAJOR = 'Major',
    CRITICAL = 'CRITICAL'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleResponseLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSqlAlarmRuleResponseNotificationFrequencyEnum {
    NUMBER_0 = 0,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_180 = 180,
    NUMBER_360 = 360
}
