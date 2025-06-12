

export class ShowDiagnosisReportRequest {
    public engine?: string;
    private 'report_id'?: string;
    public constructor(engine?: string, reportId?: string) { 
        this['engine'] = engine;
        this['report_id'] = reportId;
    }
    public withEngine(engine: string): ShowDiagnosisReportRequest {
        this['engine'] = engine;
        return this;
    }
    public withReportId(reportId: string): ShowDiagnosisReportRequest {
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