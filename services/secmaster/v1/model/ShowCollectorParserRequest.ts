

export class ShowCollectorParserRequest {
    private 'workspace_id'?: string;
    private 'parser_id'?: string;
    public constructor(workspaceId?: string, parserId?: string) { 
        this['workspace_id'] = workspaceId;
        this['parser_id'] = parserId;
    }
    public withWorkspaceId(workspaceId: string): ShowCollectorParserRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withParserId(parserId: string): ShowCollectorParserRequest {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
}