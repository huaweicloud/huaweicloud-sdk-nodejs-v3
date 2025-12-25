import { CreateReportRequestBodyReportRange } from './CreateReportRequestBodyReportRange';
import { ReportRuleInfo } from './ReportRuleInfo';


export class ReportInfo {
    public id?: string;
    private 'report_name'?: string;
    private 'report_period'?: ReportInfoReportPeriodEnum | string;
    private 'report_range'?: CreateReportRequestBodyReportRange;
    public language?: string;
    private 'notification_task'?: string;
    private 'layout_id'?: string;
    public status?: ReportInfoStatusEnum | string;
    private 'is_generated'?: boolean;
    private 'report_rule_infos'?: Array<ReportRuleInfo>;
    public constructor(id?: string, reportName?: string, reportPeriod?: string, reportRange?: CreateReportRequestBodyReportRange, language?: string, notificationTask?: string, layoutId?: string, status?: string, isGenerated?: boolean) { 
        this['id'] = id;
        this['report_name'] = reportName;
        this['report_period'] = reportPeriod;
        this['report_range'] = reportRange;
        this['language'] = language;
        this['notification_task'] = notificationTask;
        this['layout_id'] = layoutId;
        this['status'] = status;
        this['is_generated'] = isGenerated;
    }
    public withId(id: string): ReportInfo {
        this['id'] = id;
        return this;
    }
    public withReportName(reportName: string): ReportInfo {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportPeriod(reportPeriod: ReportInfoReportPeriodEnum | string): ReportInfo {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: ReportInfoReportPeriodEnum | string  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): ReportInfoReportPeriodEnum | string | undefined {
        return this['report_period'];
    }
    public withReportRange(reportRange: CreateReportRequestBodyReportRange): ReportInfo {
        this['report_range'] = reportRange;
        return this;
    }
    public set reportRange(reportRange: CreateReportRequestBodyReportRange  | undefined) {
        this['report_range'] = reportRange;
    }
    public get reportRange(): CreateReportRequestBodyReportRange | undefined {
        return this['report_range'];
    }
    public withLanguage(language: string): ReportInfo {
        this['language'] = language;
        return this;
    }
    public withNotificationTask(notificationTask: string): ReportInfo {
        this['notification_task'] = notificationTask;
        return this;
    }
    public set notificationTask(notificationTask: string  | undefined) {
        this['notification_task'] = notificationTask;
    }
    public get notificationTask(): string | undefined {
        return this['notification_task'];
    }
    public withLayoutId(layoutId: string): ReportInfo {
        this['layout_id'] = layoutId;
        return this;
    }
    public set layoutId(layoutId: string  | undefined) {
        this['layout_id'] = layoutId;
    }
    public get layoutId(): string | undefined {
        return this['layout_id'];
    }
    public withStatus(status: ReportInfoStatusEnum | string): ReportInfo {
        this['status'] = status;
        return this;
    }
    public withIsGenerated(isGenerated: boolean): ReportInfo {
        this['is_generated'] = isGenerated;
        return this;
    }
    public set isGenerated(isGenerated: boolean  | undefined) {
        this['is_generated'] = isGenerated;
    }
    public get isGenerated(): boolean | undefined {
        return this['is_generated'];
    }
    public withReportRuleInfos(reportRuleInfos: Array<ReportRuleInfo>): ReportInfo {
        this['report_rule_infos'] = reportRuleInfos;
        return this;
    }
    public set reportRuleInfos(reportRuleInfos: Array<ReportRuleInfo>  | undefined) {
        this['report_rule_infos'] = reportRuleInfos;
    }
    public get reportRuleInfos(): Array<ReportRuleInfo> | undefined {
        return this['report_rule_infos'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReportInfoReportPeriodEnum {
    WEEKLY = 'weekly',
    DAILY = 'daily',
    ANNUAL = 'annual',
    MONTHLY = 'monthly'
}
/**
    * @export
    * @enum {string}
    */
export enum ReportInfoStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
