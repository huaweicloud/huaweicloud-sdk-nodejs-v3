

export class ExportTaskInfoRequestBodyOperationalReportData {
    private 'report_id'?: string;
    public constructor(reportId?: string) { 
        this['report_id'] = reportId;
    }
    public withReportId(reportId: string): ExportTaskInfoRequestBodyOperationalReportData {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
}