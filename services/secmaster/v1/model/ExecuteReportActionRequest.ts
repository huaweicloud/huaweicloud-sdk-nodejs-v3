import { ExecuteReportActionInfo } from './ExecuteReportActionInfo';


export class ExecuteReportActionRequest {
    private 'workspace_id'?: string;
    private 'report_id'?: string;
    public body?: ExecuteReportActionInfo;
    public constructor(workspaceId?: string, reportId?: string) { 
        this['workspace_id'] = workspaceId;
        this['report_id'] = reportId;
    }
    public withWorkspaceId(workspaceId: string): ExecuteReportActionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withReportId(reportId: string): ExecuteReportActionRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withBody(body: ExecuteReportActionInfo): ExecuteReportActionRequest {
        this['body'] = body;
        return this;
    }
}