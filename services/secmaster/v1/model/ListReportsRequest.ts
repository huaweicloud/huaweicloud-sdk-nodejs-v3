

export class ListReportsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'report_period'?: string;
    public status?: string;
    public constructor(contentType?: string, workspaceId?: string, reportPeriod?: string, status?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['report_period'] = reportPeriod;
        this['status'] = status;
    }
    public withContentType(contentType: string): ListReportsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListReportsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withReportPeriod(reportPeriod: string): ListReportsRequest {
        this['report_period'] = reportPeriod;
        return this;
    }
    public set reportPeriod(reportPeriod: string  | undefined) {
        this['report_period'] = reportPeriod;
    }
    public get reportPeriod(): string | undefined {
        return this['report_period'];
    }
    public withStatus(status: string): ListReportsRequest {
        this['status'] = status;
        return this;
    }
}