import { ResourceDataobjectSearch } from './ResourceDataobjectSearch';


export class ListResourcesRequest {
    private 'X-Language'?: string;
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public body?: ResourceDataobjectSearch;
    public constructor(xLanguage?: string, contentType?: string, workspaceId?: string) { 
        this['X-Language'] = xLanguage;
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withXLanguage(xLanguage: string): ListResourcesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): ListResourcesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListResourcesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ResourceDataobjectSearch): ListResourcesRequest {
        this['body'] = body;
        return this;
    }
}