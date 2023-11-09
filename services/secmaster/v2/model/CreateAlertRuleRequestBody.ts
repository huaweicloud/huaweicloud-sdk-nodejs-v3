import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class CreateAlertRuleRequestBody {
    private 'pipe_id'?: string;
    private 'rule_name'?: string;
    public description?: string;
    public query?: string;
    private 'query_type'?: CreateAlertRuleRequestBodyQueryTypeEnum | string;
    public status?: CreateAlertRuleRequestBodyStatusEnum | string;
    public severity?: CreateAlertRuleRequestBodySeverityEnum | string;
    private 'custom_properties'?: { [key: string]: string; };
    private 'alert_type'?: { [key: string]: string; };
    private 'event_grouping'?: boolean;
    public suspression?: boolean;
    public simulation?: boolean;
    public schedule?: Schedule;
    public triggers?: Array<AlertRuleTrigger>;
    public constructor(pipeId?: string, ruleName?: string, query?: string, schedule?: Schedule, triggers?: Array<AlertRuleTrigger>) { 
        this['pipe_id'] = pipeId;
        this['rule_name'] = ruleName;
        this['query'] = query;
        this['schedule'] = schedule;
        this['triggers'] = triggers;
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
    public withDescription(description: string): CreateAlertRuleRequestBody {
        this['description'] = description;
        return this;
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
    public withStatus(status: CreateAlertRuleRequestBodyStatusEnum | string): CreateAlertRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withSeverity(severity: CreateAlertRuleRequestBodySeverityEnum | string): CreateAlertRuleRequestBody {
        this['severity'] = severity;
        return this;
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
    public withSuspression(suspression: boolean): CreateAlertRuleRequestBody {
        this['suspression'] = suspression;
        return this;
    }
    public withSimulation(simulation: boolean): CreateAlertRuleRequestBody {
        this['simulation'] = simulation;
        return this;
    }
    public withSchedule(schedule: Schedule): CreateAlertRuleRequestBody {
        this['schedule'] = schedule;
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
export enum CreateAlertRuleRequestBodyStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
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
