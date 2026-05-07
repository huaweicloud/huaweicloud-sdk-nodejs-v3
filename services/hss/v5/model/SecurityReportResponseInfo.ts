

export class SecurityReportResponseInfo {
    private 'report_id'?: number;
    private 'report_sub_id'?: number;
    private 'default_report'?: boolean;
    private 'latest_create_time'?: number;
    private 'report_name'?: string;
    private 'report_category'?: string;
    private 'report_status'?: string;
    private 'report_create_time'?: number;
    private 'sending_period'?: string;
    public constructor() { 
    }
    public withReportId(reportId: number): SecurityReportResponseInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withReportSubId(reportSubId: number): SecurityReportResponseInfo {
        this['report_sub_id'] = reportSubId;
        return this;
    }
    public set reportSubId(reportSubId: number  | undefined) {
        this['report_sub_id'] = reportSubId;
    }
    public get reportSubId(): number | undefined {
        return this['report_sub_id'];
    }
    public withDefaultReport(defaultReport: boolean): SecurityReportResponseInfo {
        this['default_report'] = defaultReport;
        return this;
    }
    public set defaultReport(defaultReport: boolean  | undefined) {
        this['default_report'] = defaultReport;
    }
    public get defaultReport(): boolean | undefined {
        return this['default_report'];
    }
    public withLatestCreateTime(latestCreateTime: number): SecurityReportResponseInfo {
        this['latest_create_time'] = latestCreateTime;
        return this;
    }
    public set latestCreateTime(latestCreateTime: number  | undefined) {
        this['latest_create_time'] = latestCreateTime;
    }
    public get latestCreateTime(): number | undefined {
        return this['latest_create_time'];
    }
    public withReportName(reportName: string): SecurityReportResponseInfo {
        this['report_name'] = reportName;
        return this;
    }
    public set reportName(reportName: string  | undefined) {
        this['report_name'] = reportName;
    }
    public get reportName(): string | undefined {
        return this['report_name'];
    }
    public withReportCategory(reportCategory: string): SecurityReportResponseInfo {
        this['report_category'] = reportCategory;
        return this;
    }
    public set reportCategory(reportCategory: string  | undefined) {
        this['report_category'] = reportCategory;
    }
    public get reportCategory(): string | undefined {
        return this['report_category'];
    }
    public withReportStatus(reportStatus: string): SecurityReportResponseInfo {
        this['report_status'] = reportStatus;
        return this;
    }
    public set reportStatus(reportStatus: string  | undefined) {
        this['report_status'] = reportStatus;
    }
    public get reportStatus(): string | undefined {
        return this['report_status'];
    }
    public withReportCreateTime(reportCreateTime: number): SecurityReportResponseInfo {
        this['report_create_time'] = reportCreateTime;
        return this;
    }
    public set reportCreateTime(reportCreateTime: number  | undefined) {
        this['report_create_time'] = reportCreateTime;
    }
    public get reportCreateTime(): number | undefined {
        return this['report_create_time'];
    }
    public withSendingPeriod(sendingPeriod: string): SecurityReportResponseInfo {
        this['sending_period'] = sendingPeriod;
        return this;
    }
    public set sendingPeriod(sendingPeriod: string  | undefined) {
        this['sending_period'] = sendingPeriod;
    }
    public get sendingPeriod(): string | undefined {
        return this['sending_period'];
    }
}