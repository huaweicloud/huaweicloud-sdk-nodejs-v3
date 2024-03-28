

export class ShowMessageDiagnosisReportRequest {
    private 'instance_id'?: string;
    private 'report_id'?: string;
    public constructor(instanceId?: string, reportId?: string) { 
        this['instance_id'] = instanceId;
        this['report_id'] = reportId;
    }
    public withInstanceId(instanceId: string): ShowMessageDiagnosisReportRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withReportId(reportId: string): ShowMessageDiagnosisReportRequest {
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