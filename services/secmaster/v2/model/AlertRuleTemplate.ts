import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';


export class AlertRuleTemplate {
    private 'template_id'?: string;
    private 'update_time'?: number;
    private 'template_name'?: string;
    private 'data_source'?: string;
    public version?: string;
    public query?: string;
    private 'query_type'?: AlertRuleTemplateQueryTypeEnum | string;
    public severity?: AlertRuleTemplateSeverityEnum | string;
    private 'custom_properties'?: { [key: string]: string; };
    private 'event_grouping'?: boolean;
    public schedule?: Schedule;
    public triggers?: Array<AlertRuleTrigger>;
    public constructor(templateId?: string, updateTime?: number, templateName?: string, dataSource?: string, version?: string, severity?: string) { 
        this['template_id'] = templateId;
        this['update_time'] = updateTime;
        this['template_name'] = templateName;
        this['data_source'] = dataSource;
        this['version'] = version;
        this['severity'] = severity;
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
    public withVersion(version: string): AlertRuleTemplate {
        this['version'] = version;
        return this;
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
    public withSeverity(severity: AlertRuleTemplateSeverityEnum | string): AlertRuleTemplate {
        this['severity'] = severity;
        return this;
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
    public withSchedule(schedule: Schedule): AlertRuleTemplate {
        this['schedule'] = schedule;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): AlertRuleTemplate {
        this['triggers'] = triggers;
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
