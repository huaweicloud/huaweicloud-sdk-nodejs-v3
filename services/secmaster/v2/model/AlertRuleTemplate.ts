import { AlertRuleSchedule } from './AlertRuleSchedule';
import { JobMode } from './JobMode';
import { ProcessStatus } from './ProcessStatus';
import { QueryType } from './QueryType';
import { Serverity } from './Serverity';
import { Status } from './Status';
import { Trigger } from './Trigger';


export class AlertRuleTemplate {
    private 'accumulated_times'?: number;
    private 'alert_description'?: string;
    private 'alert_name'?: string;
    private 'alert_remediation'?: string;
    private 'alert_type'?: { [key: string]: string; };
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'custom_properties'?: { [key: string]: string; };
    public description?: string;
    private 'event_grouping'?: boolean;
    private 'job_mode'?: JobMode;
    private 'process_status'?: ProcessStatus;
    public query?: string;
    private 'query_type'?: QueryType;
    public schedule?: AlertRuleSchedule;
    public severity?: Serverity;
    public simulation?: boolean;
    public status?: Status;
    public suppresion?: boolean;
    private 'table_name'?: string;
    private 'template_id'?: string;
    private 'template_name'?: string;
    public triggers?: Array<Trigger>;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'update_time_by_user'?: number;
    public constructor() { 
    }
    public withAccumulatedTimes(accumulatedTimes: number): AlertRuleTemplate {
        this['accumulated_times'] = accumulatedTimes;
        return this;
    }
    public set accumulatedTimes(accumulatedTimes: number  | undefined) {
        this['accumulated_times'] = accumulatedTimes;
    }
    public get accumulatedTimes(): number | undefined {
        return this['accumulated_times'];
    }
    public withAlertDescription(alertDescription: string): AlertRuleTemplate {
        this['alert_description'] = alertDescription;
        return this;
    }
    public set alertDescription(alertDescription: string  | undefined) {
        this['alert_description'] = alertDescription;
    }
    public get alertDescription(): string | undefined {
        return this['alert_description'];
    }
    public withAlertName(alertName: string): AlertRuleTemplate {
        this['alert_name'] = alertName;
        return this;
    }
    public set alertName(alertName: string  | undefined) {
        this['alert_name'] = alertName;
    }
    public get alertName(): string | undefined {
        return this['alert_name'];
    }
    public withAlertRemediation(alertRemediation: string): AlertRuleTemplate {
        this['alert_remediation'] = alertRemediation;
        return this;
    }
    public set alertRemediation(alertRemediation: string  | undefined) {
        this['alert_remediation'] = alertRemediation;
    }
    public get alertRemediation(): string | undefined {
        return this['alert_remediation'];
    }
    public withAlertType(alertType: { [key: string]: string; }): AlertRuleTemplate {
        this['alert_type'] = alertType;
        return this;
    }
    public set alertType(alertType: { [key: string]: string; }  | undefined) {
        this['alert_type'] = alertType;
    }
    public get alertType(): { [key: string]: string; } | undefined {
        return this['alert_type'];
    }
    public withCreateBy(createBy: string): AlertRuleTemplate {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): AlertRuleTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
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
    public withDescription(description: string): AlertRuleTemplate {
        this['description'] = description;
        return this;
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
    public withJobMode(jobMode: JobMode): AlertRuleTemplate {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: JobMode  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): JobMode | undefined {
        return this['job_mode'];
    }
    public withProcessStatus(processStatus: ProcessStatus): AlertRuleTemplate {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: ProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): ProcessStatus | undefined {
        return this['process_status'];
    }
    public withQuery(query: string): AlertRuleTemplate {
        this['query'] = query;
        return this;
    }
    public withQueryType(queryType: QueryType): AlertRuleTemplate {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: QueryType  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): QueryType | undefined {
        return this['query_type'];
    }
    public withSchedule(schedule: AlertRuleSchedule): AlertRuleTemplate {
        this['schedule'] = schedule;
        return this;
    }
    public withSeverity(severity: Serverity): AlertRuleTemplate {
        this['severity'] = severity;
        return this;
    }
    public withSimulation(simulation: boolean): AlertRuleTemplate {
        this['simulation'] = simulation;
        return this;
    }
    public withStatus(status: Status): AlertRuleTemplate {
        this['status'] = status;
        return this;
    }
    public withSuppresion(suppresion: boolean): AlertRuleTemplate {
        this['suppresion'] = suppresion;
        return this;
    }
    public withTableName(tableName: string): AlertRuleTemplate {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
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
    public withTriggers(triggers: Array<Trigger>): AlertRuleTemplate {
        this['triggers'] = triggers;
        return this;
    }
    public withUpdateBy(updateBy: string): AlertRuleTemplate {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
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
    public withUpdateTimeByUser(updateTimeByUser: number): AlertRuleTemplate {
        this['update_time_by_user'] = updateTimeByUser;
        return this;
    }
    public set updateTimeByUser(updateTimeByUser: number  | undefined) {
        this['update_time_by_user'] = updateTimeByUser;
    }
    public get updateTimeByUser(): number | undefined {
        return this['update_time_by_user'];
    }
}