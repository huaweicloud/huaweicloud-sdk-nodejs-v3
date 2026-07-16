import { CreateTmsTagsRequest } from './CreateTmsTagsRequest';


export class CreateNotebookTagsRequest {
    private 'resource_id'?: string;
    private 'workspace_id'?: string;
    public body?: CreateTmsTagsRequest;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): CreateNotebookTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withWorkspaceId(workspaceId: string): CreateNotebookTagsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateTmsTagsRequest): CreateNotebookTagsRequest {
        this['body'] = body;
        return this;
    }
}