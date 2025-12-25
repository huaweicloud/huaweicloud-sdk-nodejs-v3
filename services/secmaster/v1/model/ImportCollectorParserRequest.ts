import { ImportCollectorParserRequestBody } from './ImportCollectorParserRequestBody';


export class ImportCollectorParserRequest {
    private 'workspace_id'?: string;
    public body?: ImportCollectorParserRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ImportCollectorParserRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ImportCollectorParserRequestBody): ImportCollectorParserRequest {
        this['body'] = body;
        return this;
    }
}