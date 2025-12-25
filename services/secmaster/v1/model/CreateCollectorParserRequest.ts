import { CreateParserDto } from './CreateParserDto';


export class CreateCollectorParserRequest {
    private 'workspace_id'?: string;
    public body?: CreateParserDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateCollectorParserRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateParserDto): CreateCollectorParserRequest {
        this['body'] = body;
        return this;
    }
}