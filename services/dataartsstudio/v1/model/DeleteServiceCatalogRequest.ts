import { ApiCatalogDeleteParaDTO } from './ApiCatalogDeleteParaDTO';


export class DeleteServiceCatalogRequest {
    public workspace?: string;
    private 'Dlm-Type'?: DeleteServiceCatalogRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: ApiCatalogDeleteParaDTO;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): DeleteServiceCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: DeleteServiceCatalogRequestDlmTypeEnum | string): DeleteServiceCatalogRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: DeleteServiceCatalogRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): DeleteServiceCatalogRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): DeleteServiceCatalogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ApiCatalogDeleteParaDTO): DeleteServiceCatalogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteServiceCatalogRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
