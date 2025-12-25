import { ExportIncidentsRequestBody } from './ExportIncidentsRequestBody';


export class ExportIncidentsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public body?: ExportIncidentsRequestBody;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ExportIncidentsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ExportIncidentsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ExportIncidentsRequestBody): ExportIncidentsRequest {
        this['body'] = body;
        return this;
    }
}