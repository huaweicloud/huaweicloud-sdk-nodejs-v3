import { CreateCollectorFilesRequestBody } from './CreateCollectorFilesRequestBody';


export class CreateCollectorFilesRequest {
    private 'workspace_id'?: string;
    public body?: CreateCollectorFilesRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateCollectorFilesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateCollectorFilesRequestBody): CreateCollectorFilesRequest {
        this['body'] = body;
        return this;
    }
}