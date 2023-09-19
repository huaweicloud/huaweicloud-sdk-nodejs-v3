import { Frequency } from './Frequency';
import { SqlRequest } from './SqlRequest';
import { Topics } from './Topics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSqlAlarmRuleResponse extends SdkResponse {
    public id?: string;
    public indexId?: string;
    public language?: string;
    public projectId?: string;
    private 'sql_alarm_rule_name'?: string;
    private 'sql_alarm_rule_id'?: string;
    private 'sql_alarm_rule_description'?: string;
    private 'sql_requests'?: Array<SqlRequest>;
    public frequency?: Frequency;
    private 'condition_expression'?: string;
    private 'sql_alarm_level'?: UpdateSqlAlarmRuleResponseSqlAlarmLevelEnum | string;
    private 'sql_alarm_send'?: boolean;
    private 'domain_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public topics?: Array<Topics>;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateSqlAlarmRuleResponse {
        this['id'] = id;
        return this;
    }
    public withIndexId(indexId: string): UpdateSqlAlarmRuleResponse {
        this['indexId'] = indexId;
        return this;
    }
    public withLanguage(language: string): UpdateSqlAlarmRuleResponse {
        this['language'] = language;
        return this;
    }
    public withProjectId(projectId: string): UpdateSqlAlarmRuleResponse {
        this['projectId'] = projectId;
        return this;
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
    public withFrequency(frequency: Frequency): UpdateSqlAlarmRuleResponse {
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
