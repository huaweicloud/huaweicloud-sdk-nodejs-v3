import { AlertRuleTrigger } from './AlertRuleTrigger';
import { Schedule } from './Schedule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlertRuleTemplateResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'update_time'?: number;
    private 'template_name'?: string;
    private 'data_source'?: string;
    public version?: string;
    public query?: string;
    private 'query_type'?: ShowAlertRuleTemplateResponseQueryTypeEnum | string;
    public severity?: ShowAlertRuleTemplateResponseSeverityEnum | string;
    private 'custom_properties'?: { [key: string]: string; };
    private 'event_grouping'?: boolean;
    public schedule?: Schedule;
    public triggers?: Array<AlertRuleTrigger>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowAlertRuleTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withUpdateTime(updateTime: number): ShowAlertRuleTemplateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTemplateName(templateName: string): ShowAlertRuleTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDataSource(dataSource: string): ShowAlertRuleTemplateResponse {
        this['data_source'] = dataSource;
        return this;
    }
    public set dataSource(dataSource: string  | undefined) {
        this['data_source'] = dataSource;
    }
    public get dataSource(): string | undefined {
        return this['data_source'];
    }
    public withVersion(version: string): ShowAlertRuleTemplateResponse {
        this['version'] = version;
        return this;
    }
    public withQuery(query: string): ShowAlertRuleTemplateResponse {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: ShowAlertRuleTemplateResponseQueryTypeEnum | string): ShowAlertRuleTemplateResponse {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ShowAlertRuleTemplateResponseQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ShowAlertRuleTemplateResponseQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withSeverity(severity: ShowAlertRuleTemplateResponseSeverityEnum | string): ShowAlertRuleTemplateResponse {
        this['severity'] = severity;
        return this;
    }
    public withCustomProperties(customProperties: { [key: string]: string; }): ShowAlertRuleTemplateResponse {
        this['custom_properties'] = customProperties;
        return this;
    }
    public set customProperties(customProperties: { [key: string]: string; }  | undefined) {
        this['custom_properties'] = customProperties;
    }
    public get customProperties(): { [key: string]: string; } | undefined {
        return this['custom_properties'];
    }
    public withEventGrouping(eventGrouping: boolean): ShowAlertRuleTemplateResponse {
        this['event_grouping'] = eventGrouping;
        return this;
    }
    public set eventGrouping(eventGrouping: boolean  | undefined) {
        this['event_grouping'] = eventGrouping;
    }
    public get eventGrouping(): boolean | undefined {
        return this['event_grouping'];
    }
    public withSchedule(schedule: Schedule): ShowAlertRuleTemplateResponse {
        this['schedule'] = schedule;
        return this;
    }
    public withTriggers(triggers: Array<AlertRuleTrigger>): ShowAlertRuleTemplateResponse {
        this['triggers'] = triggers;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowAlertRuleTemplateResponse {
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
export enum ShowAlertRuleTemplateResponseQueryTypeEnum {
    SQL = 'SQL'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAlertRuleTemplateResponseSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
