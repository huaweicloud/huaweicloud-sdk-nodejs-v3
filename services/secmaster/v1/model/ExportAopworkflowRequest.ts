import { ExportAopworkflowInfo } from './ExportAopworkflowInfo';


export class ExportAopworkflowRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    public body?: ExportAopworkflowInfo;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ExportAopworkflowRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): ExportAopworkflowRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ExportAopworkflowInfo): ExportAopworkflowRequest {
        this['body'] = body;
        return this;
    }
}