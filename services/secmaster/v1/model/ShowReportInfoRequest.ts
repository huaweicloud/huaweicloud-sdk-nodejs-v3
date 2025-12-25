

export class ShowReportInfoRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'report_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, reportId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['report_id'] = reportId;
    }
    public withContentType(contentType: string): ShowReportInfoRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowReportInfoRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withReportId(reportId: string): ShowReportInfoRequest {
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