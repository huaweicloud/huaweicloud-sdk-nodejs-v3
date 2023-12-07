

export class ShowPathObjectByIdRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowPathObjectByIdRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): ShowPathObjectByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowPathObjectByIdRequestDlmTypeEnum | string): ShowPathObjectByIdRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowPathObjectByIdRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowPathObjectByIdRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowPathObjectByIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): ShowPathObjectByIdRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withLimit(limit: number): ShowPathObjectByIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowPathObjectByIdRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPathObjectByIdRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
