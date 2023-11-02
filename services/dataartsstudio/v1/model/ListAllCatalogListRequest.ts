

export class ListAllCatalogListRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListAllCatalogListRequestDlmTypeEnum | string;
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
    public withWorkspace(workspace: string): ListAllCatalogListRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListAllCatalogListRequestDlmTypeEnum | string): ListAllCatalogListRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListAllCatalogListRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListAllCatalogListRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListAllCatalogListRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): ListAllCatalogListRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withOffset(offset: number): ListAllCatalogListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAllCatalogListRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllCatalogListRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
