

export class ShowPathByIdRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowPathByIdRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): ShowPathByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowPathByIdRequestDlmTypeEnum | string): ShowPathByIdRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowPathByIdRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowPathByIdRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowPathByIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): ShowPathByIdRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withLimit(limit: number): ShowPathByIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowPathByIdRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPathByIdRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
