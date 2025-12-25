import { ListLogsRequestBody } from './ListLogsRequestBody';


export class ListSearchLogsRequest {
    private 'workspace_id'?: string;
    public body?: ListLogsRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListSearchLogsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ListLogsRequestBody): ListSearchLogsRequest {
        this['body'] = body;
        return this;
    }
}