import { ApiCatalogUpdateParaDTO } from './ApiCatalogUpdateParaDTO';


export class UpdateCatalogRequest {
    public workspace?: string;
    private 'Dlm-Type'?: UpdateCatalogRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public body?: ApiCatalogUpdateParaDTO;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): UpdateCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: UpdateCatalogRequestDlmTypeEnum | string): UpdateCatalogRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: UpdateCatalogRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): UpdateCatalogRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): UpdateCatalogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): UpdateCatalogRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withBody(body: ApiCatalogUpdateParaDTO): UpdateCatalogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateCatalogRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
