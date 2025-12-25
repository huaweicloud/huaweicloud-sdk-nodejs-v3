import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class AlertRuleTemplate {
    private 'custom_properties'?: { [key: string]: string; };
    private 'data_source'?: string;
    private 'event_grouping'?: boolean;
    public query?: string;
    private 'query_type'?: AlertRuleTemplateQueryTypeEnum | string;
    public schedule?: Schedule;
    public severity?: AlertRuleTemplateSeverityEnum | string;
    private 'template_id'?: string;
    private 'template_name'?: string;
    public triggers?: Array<AlertRuleTrigger>;
    private 'update_time'?: number;
    public version?: string;
    public constructor(dataSource?: string, severity?: string, templateId?: string, templateName?: string, updateTime?: number, version?: string) { 
        this['data_source'] = dataSource;
        this['severity'] = severity;
        this['template_id'] = templateId;
        this['template_name'] = templateName;
        this['update_time'] = updateTime;
        this['version'] = version;
    }
    public withCustomProperties(customProperties: { [key: string]: string; }): AlertRuleTemplate {
        this['custom_properties'] = customProperties;
        return this;
    }
    public set customProperties(customProperties: { [key: string]: string; }  | undefined) {
        this['custom_properties'] = customProperties;
    }
    public get customProperties(): { [key: string]: string; } | undefined {
        return this['custom_properties'];
    }
    public withDataSource(dataSource: string): AlertRuleTemplate {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: string  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): string | undefined {
        return this['data_source'];
    }
    public withEventGrouping(eventGrouping: boolean): AlertRuleTemplate {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withQuery(query: string): AlertRuleTemplate {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: AlertRuleTemplateQueryTypeEnum | string): AlertRuleTemplate {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: AlertRuleTemplateQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): AlertRuleTemplateQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withSchedule(schedule: Schedule): AlertRuleTemplate {
        this['schedule'] = schedule;
        return this;
    }
    public withSeverity(severity: AlertRuleTemplateSeverityEnum | string): AlertRuleTemplate {
        this['severity'] = severity;
        return this;
    }
    public withTemplateId(templateId: string): AlertRuleTemplate {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateName(templateName: string): AlertRuleTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): AlertRuleTemplate {
        this['triggers'] = triggers;
        return this;
    }
    public withUpdateTime(updateTime: number): AlertRuleTemplate {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVersion(version: string): AlertRuleTemplate {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlertRuleTemplateQueryTypeEnum {
    SQL = 'SQL'
}
/**
    * @export
    * @enum {string}
    */
export enum AlertRuleTemplateSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
