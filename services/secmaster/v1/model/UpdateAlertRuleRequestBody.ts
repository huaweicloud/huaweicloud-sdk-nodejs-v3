import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class UpdateAlertRuleRequestBody {
    private 'alert_type'?: { [key: string]: string; };
    private 'custom_properties'?: { [key: string]: string; };
    public description?: string;
    private 'event_grouping'?: boolean;
    public query?: string;
    private 'query_type'?: UpdateAlertRuleRequestBodyQueryTypeEnum | string;
    private 'rule_name'?: string;
    public schedule?: Schedule;
    public severity?: UpdateAlertRuleRequestBodySeverityEnum | string;
    public simulation?: boolean;
    public status?: UpdateAlertRuleRequestBodyStatusEnum | string;
    public suppression?: boolean;
    public triggers?: Array<AlertRuleTrigger>;
    public constructor() { 
    }
    public withAlertType(alertType: { [key: string]: string; }): UpdateAlertRuleRequestBody {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: { [key: string]: string; }  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): { [key: string]: string; } | undefined {
        return this['alert_type'];
    }
    public withCustomProperties(customProperties: { [key: string]: string; }): UpdateAlertRuleRequestBody {
        this['custom_properties'] = customProperties;
        return this;
    }
    public set customProperties(customProperties: { [key: string]: string; }  | undefined) {
        this['custom_properties'] = customProperties;
    }
    public get customProperties(): { [key: string]: string; } | undefined {
        return this['custom_properties'];
    }
    public withDescription(description: string): UpdateAlertRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withEventGrouping(eventGrouping: boolean): UpdateAlertRuleRequestBody {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withQuery(query: string): UpdateAlertRuleRequestBody {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: UpdateAlertRuleRequestBodyQueryTypeEnum | string): UpdateAlertRuleRequestBody {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: UpdateAlertRuleRequestBodyQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): UpdateAlertRuleRequestBodyQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withRuleName(ruleName: string): UpdateAlertRuleRequestBody {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSchedule(schedule: Schedule): UpdateAlertRuleRequestBody {
        this['schedule'] = schedule;
        return this;
    }
    public withSeverity(severity: UpdateAlertRuleRequestBodySeverityEnum | string): UpdateAlertRuleRequestBody {
        this['severity'] = severity;
        return this;
    }
    public withSimulation(simulation: boolean): UpdateAlertRuleRequestBody {
        this['simulation'] = simulation;
        return this;
    }
    public withStatus(status: UpdateAlertRuleRequestBodyStatusEnum | string): UpdateAlertRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withSuppression(suppression: boolean): UpdateAlertRuleRequestBody {
        this['suppression'] = suppression;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): UpdateAlertRuleRequestBody {
        this['triggers'] = triggers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAlertRuleRequestBodyQueryTypeEnum {
    SQL = 'SQL'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateAlertRuleRequestBodySeverityEnum {
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
export enum UpdateAlertRuleRequestBodyStatusEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
