import { ReportRuleRequest } from './ReportRuleRequest';
import { UpdateReportRequestBodyReportRange } from './UpdateReportRequestBodyReportRange';


export class UpdateReportRequestBody {
    public status?: UpdateReportRequestBodyStatusEnum | string;
    private 'report_name'?: string;
    private 'report_period'?: UpdateReportRequestBodyReportPeriodEnum | string;
    private 'report_range'?: UpdateReportRequestBodyReportRange;
    public language?: string;
    private 'notification_task'?: string;
    private 'layout_id'?: string;
    private 'report_id'?: string;
    private 'report_rule_infos'?: Array<ReportRuleRequest>;
    public title?: string;
    public to?: string;
    public cc?: string;
    public subject?: string;
    public content?: string;
    private 'report_file_type'?: string;
    public frequency?: string;
    private 'binding_wizard'?: string;
    public timezone?: string;
    public constructor(reportName?: string, bindingWizard?: string) { 
        this['report_name'] = reportName;
        this['binding_wizard'] = bindingWizard;
    }
    public withStatus(status: UpdateReportRequestBodyStatusEnum | string): UpdateReportRequestBody {
        this['status'] = status;
        return this;
    }
    public withReportName(reportName: string): UpdateReportRequestBody {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportPeriod(reportPeriod: UpdateReportRequestBodyReportPeriodEnum | string): UpdateReportRequestBody {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: UpdateReportRequestBodyReportPeriodEnum | string  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): UpdateReportRequestBodyReportPeriodEnum | string | undefined {
        return this['report_period'];
    }
    public withReportRange(reportRange: UpdateReportRequestBodyReportRange): UpdateReportRequestBody {
        this['report_range'] = reportRange;
        return this;
    }
    public set reportRange(reportRange: UpdateReportRequestBodyReportRange  | undefined) {
        this['report_range'] = reportRange;
    }
    public get reportRange(): UpdateReportRequestBodyReportRange | undefined {
        return this['report_range'];
    }
    public withLanguage(language: string): UpdateReportRequestBody {
        this['language'] = language;
        return this;
    }
    public withNotificationTask(notificationTask: string): UpdateReportRequestBody {
        this['notification_task'] = notificationTask;
        return this;
    }
    public set notificationTask(notificationTask: string  | undefined) {
        this['notification_task'] = notificationTask;
    }
    public get notificationTask(): string | undefined {
        return this['notification_task'];
    }
    public withLayoutId(layoutId: string): UpdateReportRequestBody {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withReportId(reportId: string): UpdateReportRequestBody {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withReportRuleInfos(reportRuleInfos: Array<ReportRuleRequest>): UpdateReportRequestBody {
        this['report_rule_infos'] = reportRuleInfos;
        return this;
    }
    public set reportRuleInfos(reportRuleInfos: Array<ReportRuleRequest>  | undefined) {
        this['report_rule_infos'] = reportRuleInfos;
    }
    public get reportRuleInfos(): Array<ReportRuleRequest> | undefined {
        return this['report_rule_infos'];
    }
    public withTitle(title: string): UpdateReportRequestBody {
        this['title'] = title;
        return this;
    }
    public withTo(to: string): UpdateReportRequestBody {
        this['to'] = to;
        return this;
    }
    public withCc(cc: string): UpdateReportRequestBody {
        this['cc'] = cc;
        return this;
    }
    public withSubject(subject: string): UpdateReportRequestBody {
        this['subject'] = subject;
        return this;
    }
    public withContent(content: string): UpdateReportRequestBody {
        this['content'] = content;
        return this;
    }
    public withReportFileType(reportFileType: string): UpdateReportRequestBody {
        this['report_file_type'] = reportFileType;
        return this;
    }
    public set reportFileType(reportFileType: string  | undefined) {
        this['report_file_type'] = reportFileType;
    }
    public get reportFileType(): string | undefined {
        return this['report_file_type'];
    }
    public withFrequency(frequency: string): UpdateReportRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withBindingWizard(bindingWizard: string): UpdateReportRequestBody {
        this['binding_wizard'] = bindingWizard;
        return this;
    }
    public set bindingWizard(bindingWizard: string  | undefined) {
        this['binding_wizard'] = bindingWizard;
    }
    public get bindingWizard(): string | undefined {
        return this['binding_wizard'];
    }
    public withTimezone(timezone: string): UpdateReportRequestBody {
        this['timezone'] = timezone;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateReportRequestBodyStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateReportRequestBodyReportPeriodEnum {
    WEEKLY = 'weekly',
    DAILY = 'daily',
    ANNUAL = 'annual',
    MONTHLY = 'monthly'
}
