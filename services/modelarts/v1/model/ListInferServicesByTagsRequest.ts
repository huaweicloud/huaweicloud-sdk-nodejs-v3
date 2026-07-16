import { QueryTmsResourceRequest } from './QueryTmsResourceRequest';


export class ListInferServicesByTagsRequest {
    public limit?: number;
    public offset?: number;
    private 'workspace_id'?: string;
    public body?: QueryTmsResourceRequest;
    public constructor() { 
    }
    public withLimit(limit: number): ListInferServicesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferServicesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListInferServicesByTagsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: QueryTmsResourceRequest): ListInferServicesByTagsRequest {
        this['body'] = body;
        return this;
    }
}