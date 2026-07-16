import { QueryTmsResourceCountRequest } from './QueryTmsResourceCountRequest';


export class CountInferServicesByTagsRequest {
    private 'workspace_id'?: string;
    public body?: QueryTmsResourceCountRequest;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): CountInferServicesByTagsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: QueryTmsResourceCountRequest): CountInferServicesByTagsRequest {
        this['body'] = body;
        return this;
    }
}