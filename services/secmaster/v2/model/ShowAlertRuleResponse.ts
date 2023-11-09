import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlertRuleResponse extends SdkResponse {
    private 'rule_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'delete_time'?: number;
    private 'rule_name'?: string;
    public query?: string;
    private 'query_type'?: ShowAlertRuleResponseQueryTypeEnum | string;
    public status?: ShowAlertRuleResponseStatusEnum | string;
    public severity?: ShowAlertRuleResponseSeverityEnum | string;
    private 'custom_properties'?: { [key: string]: string; };
    private 'event_grouping'?: boolean;
    public schedule?: Schedule;
    public triggers?: Array<AlertRuleTrigger>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ShowAlertRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withPipeId(pipeId: string): ShowAlertRuleResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): ShowAlertRuleResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withCreateBy(createBy: string): ShowAlertRuleResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): ShowAlertRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): ShowAlertRuleResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): ShowAlertRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): ShowAlertRuleResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withRuleName(ruleName: string): ShowAlertRuleResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withQuery(query: string): ShowAlertRuleResponse {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: ShowAlertRuleResponseQueryTypeEnum | string): ShowAlertRuleResponse {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ShowAlertRuleResponseQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ShowAlertRuleResponseQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withStatus(status: ShowAlertRuleResponseStatusEnum | string): ShowAlertRuleResponse {
        this['status'] = status;
        return this;
    }
    public withSeverity(severity: ShowAlertRuleResponseSeverityEnum | string): ShowAlertRuleResponse {
        this['severity'] = severity;
        return this;
    }
    public withCustomProperties(customProperties: { [key: string]: string; }): ShowAlertRuleResponse {
        this['custom_properties'] = customProperties;
        return this;
    }
    public set customProperties(customProperties: { [key: string]: string; }  | undefined) {
        this['custom_properties'] = customProperties;
    }
    public get customProperties(): { [key: string]: string; } | undefined {
        return this['custom_properties'];
    }
    public withEventGrouping(eventGrouping: boolean): ShowAlertRuleResponse {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withSchedule(schedule: Schedule): ShowAlertRuleResponse {
        this['schedule'] = schedule;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): ShowAlertRuleResponse {
        this['triggers'] = triggers;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowAlertRuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAlertRuleResponseQueryTypeEnum {
    SQL = 'SQL'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAlertRuleResponseStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAlertRuleResponseSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
