import { CreateReportRequestBodyReportRange } from './CreateReportRequestBodyReportRange';
import { ReportRuleRequest } from './ReportRuleRequest';


export class CreateReportRequestBody {
    private 'report_name'?: string;
    private 'report_period'?: CreateReportRequestBodyReportPeriodEnum | string;
    private 'report_range'?: CreateReportRequestBodyReportRange;
    public language?: string;
    private 'notification_task'?: string;
    private 'layout_id'?: string;
    public title?: string;
    public to?: string;
    public cc?: string;
    public content?: string;
    private 'report_file_type'?: string;
    public frequency?: string;
    private 'binding_wizard'?: string;
    public timezone?: string;
    private 'report_rule_infos'?: Array<ReportRuleRequest>;
    public constructor(reportName?: string, reportPeriod?: string, reportRange?: CreateReportRequestBodyReportRange, language?: string, layoutId?: string, bindingWizard?: string) { 
        this['report_name'] = reportName;
        this['report_period'] = reportPeriod;
        this['report_range'] = reportRange;
        this['language'] = language;
        this['layout_id'] = layoutId;
        this['binding_wizard'] = bindingWizard;
    }
    public withReportName(reportName: string): CreateReportRequestBody {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportPeriod(reportPeriod: CreateReportRequestBodyReportPeriodEnum | string): CreateReportRequestBody {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: CreateReportRequestBodyReportPeriodEnum | string  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): CreateReportRequestBodyReportPeriodEnum | string | undefined {
        return this['report_period'];
    }
    public withReportRange(reportRange: CreateReportRequestBodyReportRange): CreateReportRequestBody {
        this['report_range'] = reportRange;
        return this;
    }
    public set reportRange(reportRange: CreateReportRequestBodyReportRange  | undefined) {
        this['report_range'] = reportRange;
    }
    public get reportRange(): CreateReportRequestBodyReportRange | undefined {
        return this['report_range'];
    }
    public withLanguage(language: string): CreateReportRequestBody {
        this['language'] = language;
        return this;
    }
    public withNotificationTask(notificationTask: string): CreateReportRequestBody {
        this['notification_task'] = notificationTask;
        return this;
    }
    public set notificationTask(notificationTask: string  | undefined) {
        this['notification_task'] = notificationTask;
    }
    public get notificationTask(): string | undefined {
        return this['notification_task'];
    }
    public withLayoutId(layoutId: string): CreateReportRequestBody {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withTitle(title: string): CreateReportRequestBody {
        this['title'] = title;
        return this;
    }
    public withTo(to: string): CreateReportRequestBody {
        this['to'] = to;
        return this;
    }
    public withCc(cc: string): CreateReportRequestBody {
        this['cc'] = cc;
        return this;
    }
    public withContent(content: string): CreateReportRequestBody {
        this['content'] = content;
        return this;
    }
    public withReportFileType(reportFileType: string): CreateReportRequestBody {
        this['report_file_type'] = reportFileType;
        return this;
    }
    public set reportFileType(reportFileType: string  | undefined) {
        this['report_file_type'] = reportFileType;
    }
    public get reportFileType(): string | undefined {
        return this['report_file_type'];
    }
    public withFrequency(frequency: string): CreateReportRequestBody {
        this['frequency'] = frequency;
        return this;
    }
    public withBindingWizard(bindingWizard: string): CreateReportRequestBody {
        this['binding_wizard'] = bindingWizard;
        return this;
    }
    public set bindingWizard(bindingWizard: string  | undefined) {
        this['binding_wizard'] = bindingWizard;
    }
    public get bindingWizard(): string | undefined {
        return this['binding_wizard'];
    }
    public withTimezone(timezone: string): CreateReportRequestBody {
        this['timezone'] = timezone;
        return this;
    }
    public withReportRuleInfos(reportRuleInfos: Array<ReportRuleRequest>): CreateReportRequestBody {
        this['report_rule_infos'] = reportRuleInfos;
        return this;
    }
    public set reportRuleInfos(reportRuleInfos: Array<ReportRuleRequest>  | undefined) {
        this['report_rule_infos'] = reportRuleInfos;
    }
    public get reportRuleInfos(): Array<ReportRuleRequest> | undefined {
        return this['report_rule_infos'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateReportRequestBodyReportPeriodEnum {
    WEEKLY = 'weekly',
    DAILY = 'daily',
    ANNUAL = 'annual',
    MONTHLY = 'monthly'
}
