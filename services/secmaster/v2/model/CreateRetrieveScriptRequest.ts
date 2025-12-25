import { CreateRetrieveScriptRequestBody } from './CreateRetrieveScriptRequestBody';


export class CreateRetrieveScriptRequest {
    private 'workspace_id'?: string;
    public body?: CreateRetrieveScriptRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateRetrieveScriptRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateRetrieveScriptRequestBody): CreateRetrieveScriptRequest {
        this['body'] = body;
        return this;
    }
}