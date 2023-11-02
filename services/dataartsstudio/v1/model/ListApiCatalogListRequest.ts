

export class ListApiCatalogListRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApiCatalogListRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): ListApiCatalogListRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApiCatalogListRequestDlmTypeEnum | string): ListApiCatalogListRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApiCatalogListRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApiCatalogListRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApiCatalogListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): ListApiCatalogListRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withOffset(offset: number): ListApiCatalogListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApiCatalogListRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApiCatalogListRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
