import { CatalogueUpdateRequestPojo } from './CatalogueUpdateRequestPojo';


export class UpdateCatalogueRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'catalogue_id'?: string;
    public body?: CatalogueUpdateRequestPojo;
    public constructor(contentType?: string, workspaceId?: string, catalogueId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['catalogue_id'] = catalogueId;
    }
    public withContentType(contentType: string): UpdateCatalogueRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateCatalogueRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCatalogueId(catalogueId: string): UpdateCatalogueRequest {
        this['catalogue_id'] = catalogueId;
        return this;
    }
    public set catalogueId(catalogueId: string  | undefined) {
        this['catalogue_id'] = catalogueId;
    }
    public get catalogueId(): string | undefined {
        return this['catalogue_id'];
    }
    public withBody(body: CatalogueUpdateRequestPojo): UpdateCatalogueRequest {
        this['body'] = body;
        return this;
    }
}