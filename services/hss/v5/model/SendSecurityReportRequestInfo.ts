

export class SendSecurityReportRequestInfo {
    private 'report_id'?: number;
    private 'report_sub_id'?: number;
    public constructor(reportId?: number, reportSubId?: number) { 
        this['report_id'] = reportId;
        this['report_sub_id'] = reportSubId;
    }
    public withReportId(reportId: number): SendSecurityReportRequestInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
    public withReportSubId(reportSubId: number): SendSecurityReportRequestInfo {
        this['report_sub_id'] = reportSubId;
        return this;
    }
    public set reportSubId(reportSubId: number  | undefined) {
        this['report_sub_id'] = reportSubId;
    }
    public get reportSubId(): number | undefined {
        return this['report_sub_id'];
    }
}