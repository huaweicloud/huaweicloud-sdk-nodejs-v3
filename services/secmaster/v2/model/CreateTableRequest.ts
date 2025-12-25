import { CreateTableRequestBody } from './CreateTableRequestBody';


export class CreateTableRequest {
    private 'workspace_id'?: string;
    public body?: CreateTableRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateTableRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateTableRequestBody): CreateTableRequest {
        this['body'] = body;
        return this;
    }
}