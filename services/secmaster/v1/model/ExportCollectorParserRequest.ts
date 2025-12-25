import { ExportParserDto } from './ExportParserDto';


export class ExportCollectorParserRequest {
    private 'workspace_id'?: string;
    public body?: ExportParserDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ExportCollectorParserRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ExportParserDto): ExportCollectorParserRequest {
        this['body'] = body;
        return this;
    }
}