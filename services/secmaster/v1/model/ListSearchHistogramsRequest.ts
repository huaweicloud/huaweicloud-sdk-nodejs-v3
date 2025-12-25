import { ListHistogramsRequestBody } from './ListHistogramsRequestBody';


export class ListSearchHistogramsRequest {
    private 'workspace_id'?: string;
    public body?: ListHistogramsRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListSearchHistogramsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ListHistogramsRequestBody): ListSearchHistogramsRequest {
        this['body'] = body;
        return this;
    }
}