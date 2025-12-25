

export class ListAllSecondCatalogueRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'catalogue_type'?: string;
    private 'catalogue_code'?: string;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListAllSecondCatalogueRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListAllSecondCatalogueRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCatalogueType(catalogueType: string): ListAllSecondCatalogueRequest {
        this['catalogue_type'] = catalogueType;
        return this;
    }
    public set catalogueType(catalogueType: string  | undefined) {
        this['catalogue_type'] = catalogueType;
    }
    public get catalogueType(): string | undefined {
        return this['catalogue_type'];
    }
    public withCatalogueCode(catalogueCode: string): ListAllSecondCatalogueRequest {
        this['catalogue_code'] = catalogueCode;
        return this;
    }
    public set catalogueCode(catalogueCode: string  | undefined) {
        this['catalogue_code'] = catalogueCode;
    }
    public get catalogueCode(): string | undefined {
        return this['catalogue_code'];
    }
}