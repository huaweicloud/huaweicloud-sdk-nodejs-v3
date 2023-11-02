import { CatalogMoveParaDTO } from './CatalogMoveParaDTO';


export class MigrateCatalogRequest {
    public workspace?: string;
    private 'Dlm-Type'?: MigrateCatalogRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'catalog_id'?: string;
    public body?: CatalogMoveParaDTO;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, catalogId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['catalog_id'] = catalogId;
    }
    public withWorkspace(workspace: string): MigrateCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: MigrateCatalogRequestDlmTypeEnum | string): MigrateCatalogRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: MigrateCatalogRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): MigrateCatalogRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): MigrateCatalogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withCatalogId(catalogId: string): MigrateCatalogRequest {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withBody(body: CatalogMoveParaDTO): MigrateCatalogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigrateCatalogRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
