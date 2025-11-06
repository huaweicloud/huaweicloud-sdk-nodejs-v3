import { ListSecurityReportSendingRecordResponseStatPeriod } from './ListSecurityReportSendingRecordResponseStatPeriod';


export class ListSecurityReportSendingRecordResponseItems {
    private 'report_id'?: string;
    private 'subscription_id'?: string;
    private 'report_name'?: string;
    private 'stat_period'?: ListSecurityReportSendingRecordResponseStatPeriod;
    private 'report_category'?: string;
    private 'sending_time'?: number;
    public constructor(reportId?: string, subscriptionId?: string, reportName?: string, statPeriod?: ListSecurityReportSendingRecordResponseStatPeriod, reportCategory?: string, sendingTime?: number) { 
        this['report_id'] = reportId;
        this['subscription_id'] = subscriptionId;
        this['report_name'] = reportName;
        this['stat_period'] = statPeriod;
        this['report_category'] = reportCategory;
        this['sending_time'] = sendingTime;
    }
    public withReportId(reportId: string): ListSecurityReportSendingRecordResponseItems {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withSubscriptionId(subscriptionId: string): ListSecurityReportSendingRecordResponseItems {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withReportName(reportName: string): ListSecurityReportSendingRecordResponseItems {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withStatPeriod(statPeriod: ListSecurityReportSendingRecordResponseStatPeriod): ListSecurityReportSendingRecordResponseItems {
        this['stat_period'] = statPeriod;
        return this;
    }
    public set statPeriod(statPeriod: ListSecurityReportSendingRecordResponseStatPeriod  | undefined) {
        this['stat_period'] = statPeriod;
    }
    public get statPeriod(): ListSecurityReportSendingRecordResponseStatPeriod | undefined {
        return this['stat_period'];
    }
    public withReportCategory(reportCategory: string): ListSecurityReportSendingRecordResponseItems {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withSendingTime(sendingTime: number): ListSecurityReportSendingRecordResponseItems {
        this['sending_time'] = sendingTime;
        return this;
    }
    public set sendingTime(sendingTime: number  | undefined) {
        this['sending_time'] = sendingTime;
    }
    public get sendingTime(): number | undefined {
        return this['sending_time'];
    }
}