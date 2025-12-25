import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class CreateAlertRuleRequestBody {
    private 'accumulated_times'?: number;
    private 'alert_description'?: string;
    private 'alert_name'?: string;
    private 'alert_remediation'?: string;
    private 'alert_type'?: { [key: string]: string; };
    private 'custom_properties'?: { [key: string]: string; };
    public description?: string;
    private 'event_grouping'?: boolean;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    public query?: string;
    private 'query_type'?: CreateAlertRuleRequestBodyQueryTypeEnum | string;
    private 'rule_name'?: string;
    public schedule?: Schedule;
    public severity?: CreateAlertRuleRequestBodySeverityEnum | string;
    public simulation?: boolean;
    public status?: CreateAlertRuleRequestBodyStatusEnum | string;
    public suppression?: boolean;
    public triggers?: Array<AlertRuleTrigger>;
    public constructor(alertName?: string, pipeId?: string, pipeName?: string, query?: string, ruleName?: string, schedule?: Schedule, triggers?: Array<AlertRuleTrigger>) { 
        this['alert_name'] = alertName;
        this['pipe_id'] = pipeId;
        this['pipe_name'] = pipeName;
        this['query'] = query;
        this['rule_name'] = ruleName;
        this['schedule'] = schedule;
        this['triggers'] = triggers;
    }
    public withAccumulatedTimes(accumulatedTimes: number): CreateAlertRuleRequestBody {
        this['accumulated_times'] = accumulatedTimes;
        return this;
    }
    public set accumulatedTimes(accumulatedTimes: number  | undefined) {
        this['accumulated_times'] = accumulatedTimes;
    }
    public get accumulatedTimes(): number | undefined {
        return this['accumulated_times'];
    }
    public withAlertDescription(alertDescription: string): CreateAlertRuleRequestBody {
        this['alert_description'] = alertDescription;
        return this;
    }
    public set alertDescription(alertDescription: string  | undefined) {
        this['alert_description'] = alertDescription;
    }
    public get alertDescription(): string | undefined {
        return this['alert_description'];
    }
    public withAlertName(alertName: string): CreateAlertRuleRequestBody {
        this['alert_name'] = alertName;
        return this;
    }
    public set alertName(alertName: string  | undefined) {
        this['alert_name'] = alertName;
    }
    public get alertName(): string | undefined {
        return this['alert_name'];
    }
    public withAlertRemediation(alertRemediation: string): CreateAlertRuleRequestBody {
        this['alert_remediation'] = alertRemediation;
        return this;
    }
    public set alertRemediation(alertRemediation: string  | undefined) {
        this['alert_remediation'] = alertRemediation;
    }
    public get alertRemediation(): string | undefined {
        return this['alert_remediation'];
    }
    public withAlertType(alertType: { [key: string]: string; }): CreateAlertRuleRequestBody {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: { [key: string]: string; }  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): { [key: string]: string; } | undefined {
        return this['alert_type'];
    }
    public withCustomProperties(customProperties: { [key: string]: string; }): CreateAlertRuleRequestBody {
        this['custom_properties'] = customProperties;
        return this;
    }
    public set customProperties(customProperties: { [key: string]: string; }  | undefined) {
        this['custom_properties'] = customProperties;
    }
    public get customProperties(): { [key: string]: string; } | undefined {
        return this['custom_properties'];
    }
    public withDescription(description: string): CreateAlertRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withEventGrouping(eventGrouping: boolean): CreateAlertRuleRequestBody {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withPipeId(pipeId: string): CreateAlertRuleRequestBody {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): CreateAlertRuleRequestBody {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withQuery(query: string): CreateAlertRuleRequestBody {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: CreateAlertRuleRequestBodyQueryTypeEnum | string): CreateAlertRuleRequestBody {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: CreateAlertRuleRequestBodyQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): CreateAlertRuleRequestBodyQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withRuleName(ruleName: string): CreateAlertRuleRequestBody {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSchedule(schedule: Schedule): CreateAlertRuleRequestBody {
        this['schedule'] = schedule;
        return this;
    }
    public withSeverity(severity: CreateAlertRuleRequestBodySeverityEnum | string): CreateAlertRuleRequestBody {
        this['severity'] = severity;
        return this;
    }
    public withSimulation(simulation: boolean): CreateAlertRuleRequestBody {
        this['simulation'] = simulation;
        return this;
    }
    public withStatus(status: CreateAlertRuleRequestBodyStatusEnum | string): CreateAlertRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withSuppression(suppression: boolean): CreateAlertRuleRequestBody {
        this['suppression'] = suppression;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): CreateAlertRuleRequestBody {
        this['triggers'] = triggers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAlertRuleRequestBodyQueryTypeEnum {
    SQL = 'SQL'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAlertRuleRequestBodySeverityEnum {
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
export enum CreateAlertRuleRequestBodyStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
