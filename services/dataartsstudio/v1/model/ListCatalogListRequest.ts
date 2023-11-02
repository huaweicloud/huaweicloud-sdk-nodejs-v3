

export class ListCatalogListRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListCatalogListRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): ListCatalogListRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListCatalogListRequestDlmTypeEnum | string): ListCatalogListRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListCatalogListRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListCatalogListRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListCatalogListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): ListCatalogListRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withLimit(limit: number): ListCatalogListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCatalogListRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCatalogListRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
