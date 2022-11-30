

export class ShowDiagnosisTaskDetailsRequest {
    private 'report_id': string | undefined;
    public constructor(reportId?: any) { 
        this['report_id'] = reportId;
    }
    public withReportId(reportId: string): ShowDiagnosisTaskDetailsRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId() {
        return this['report_id'];
    }
}