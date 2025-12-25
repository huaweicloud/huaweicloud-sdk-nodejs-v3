import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class AlertRule {
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'custom_properties'?: { [key: string]: string; };
    private 'delete_time'?: number;
    private 'event_grouping'?: boolean;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    public query?: string;
    private 'query_type'?: AlertRuleQueryTypeEnum | string;
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    public schedule?: Schedule;
    public severity?: AlertRuleSeverityEnum | string;
    public status?: AlertRuleStatusEnum | string;
    public triggers?: Array<AlertRuleTrigger>;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor(createBy?: string, createTime?: number, pipeId?: string, pipeName?: string, ruleId?: string, ruleName?: string, severity?: string, status?: string, updateBy?: string, updateTime?: number) { 
        this['create_by'] = createBy;
        this['create_time'] = createTime;
        this['pipe_id'] = pipeId;
        this['pipe_name'] = pipeName;
        this['rule_id'] = ruleId;
        this['rule_name'] = ruleName;
        this['severity'] = severity;
        this['status'] = status;
        this['update_by'] = updateBy;
        this['update_time'] = updateTime;
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
    public withSchedule(schedule: Schedule): AlertRule {
        this['schedule'] = schedule;
        return this;
    }
    public withSeverity(severity: AlertRuleSeverityEnum | string): AlertRule {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: AlertRuleStatusEnum | string): AlertRule {
        this['status'] = status;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): AlertRule {
        this['triggers'] = triggers;
        return this;
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
export enum AlertRuleSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
/**
    * @export
    * @enum {string}
    */
export enum AlertRuleStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
