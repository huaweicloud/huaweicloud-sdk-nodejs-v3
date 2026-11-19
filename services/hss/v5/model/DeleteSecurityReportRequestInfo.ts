

export class DeleteSecurityReportRequestInfo {
    private 'report_id'?: number;
    public constructor(reportId?: number) { 
        this['report_id'] = reportId;
    }
    public withReportId(reportId: number): DeleteSecurityReportRequestInfo {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: number  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): number | undefined {
        return this['report_id'];
    }
}