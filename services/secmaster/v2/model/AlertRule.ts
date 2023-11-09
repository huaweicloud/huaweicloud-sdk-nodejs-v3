import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class AlertRule {
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
    private 'query_type'?: AlertRuleQueryTypeEnum | string;
    public status?: AlertRuleStatusEnum | string;
    public severity?: AlertRuleSeverityEnum | string;
    private 'custom_properties'?: { [key: string]: string; };
    private 'event_grouping'?: boolean;
    public schedule?: Schedule;
    public triggers?: Array<AlertRuleTrigger>;
    public constructor(ruleId?: string, pipeId?: string, pipeName?: string, createBy?: string, createTime?: number, updateBy?: string, updateTime?: number, ruleName?: string, status?: string, severity?: string) { 
        this['rule_id'] = ruleId;
        this['pipe_id'] = pipeId;
        this['pipe_name'] = pipeName;
        this['create_by'] = createBy;
        this['create_time'] = createTime;
        this['update_by'] = updateBy;
        this['update_time'] = updateTime;
        this['rule_name'] = ruleName;
        this['status'] = status;
        this['severity'] = severity;
    }
    public withRuleId(ruleId: string): AlertRule {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withPipeId(pipeId: string): AlertRule {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): AlertRule {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withCreateBy(createBy: string): AlertRule {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): AlertRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): AlertRule {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): AlertRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withDeleteTime(deleteTime: number): AlertRule {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
    public withRuleName(ruleName: string): AlertRule {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withQuery(query: string): AlertRule {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: AlertRuleQueryTypeEnum | string): AlertRule {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: AlertRuleQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): AlertRuleQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withStatus(status: AlertRuleStatusEnum | string): AlertRule {
        this['status'] = status;
        return this;
    }
    public withSeverity(severity: AlertRuleSeverityEnum | string): AlertRule {
        this['severity'] = severity;
        return this;
    }
    public withCustomProperties(customProperties: { [key: string]: string; }): AlertRule {
        this['custom_properties'] = customProperties;
        return this;
    }
    public set customProperties(customProperties: { [key: string]: string; }  | undefined) {
        this['custom_properties'] = customProperties;
    }
    public get customProperties(): { [key: string]: string; } | undefined {
        return this['custom_properties'];
    }
    public withEventGrouping(eventGrouping: boolean): AlertRule {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withSchedule(schedule: Schedule): AlertRule {
        this['schedule'] = schedule;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): AlertRule {
        this['triggers'] = triggers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlertRuleQueryTypeEnum {
    SQL = 'SQL'
}
/**
    * @export
    * @enum {string}
    */
export enum AlertRuleStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
/**
    * @export
    * @enum {string}
    */
export enum AlertRuleSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
