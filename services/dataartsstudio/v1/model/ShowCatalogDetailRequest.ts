

export class ShowCatalogDetailRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowCatalogDetailRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public constructor(workspace?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): ShowCatalogDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowCatalogDetailRequestDlmTypeEnum | string): ShowCatalogDetailRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowCatalogDetailRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowCatalogDetailRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowCatalogDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): ShowCatalogDetailRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCatalogDetailRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
