import { SearchInfo } from './SearchInfo';


export class ListCatalogueRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public limit?: number;
    public offset?: number;
    public body?: SearchInfo;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListCatalogueRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListCatalogueRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: number): ListCatalogueRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCatalogueRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: SearchInfo): ListCatalogueRequest {
        this['body'] = body;
        return this;
    }
}