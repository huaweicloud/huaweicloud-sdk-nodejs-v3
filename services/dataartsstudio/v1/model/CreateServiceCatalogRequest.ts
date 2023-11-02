import { ApiCatalogCreateParaDTO } from './ApiCatalogCreateParaDTO';


export class CreateServiceCatalogRequest {
    public workspace?: string;
    private 'Dlm-Type'?: CreateServiceCatalogRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: ApiCatalogCreateParaDTO;
    public constructor(workspace?: string, dlmType?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): CreateServiceCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: CreateServiceCatalogRequestDlmTypeEnum | string): CreateServiceCatalogRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: CreateServiceCatalogRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): CreateServiceCatalogRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): CreateServiceCatalogRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ApiCatalogCreateParaDTO): CreateServiceCatalogRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateServiceCatalogRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
