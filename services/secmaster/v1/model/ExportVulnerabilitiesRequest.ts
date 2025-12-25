import { ExportVulnerabilitiesRequestBody } from './ExportVulnerabilitiesRequestBody';


export class ExportVulnerabilitiesRequest {
    private 'workspace_id'?: string;
    public body?: ExportVulnerabilitiesRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ExportVulnerabilitiesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ExportVulnerabilitiesRequestBody): ExportVulnerabilitiesRequest {
        this['body'] = body;
        return this;
    }
}