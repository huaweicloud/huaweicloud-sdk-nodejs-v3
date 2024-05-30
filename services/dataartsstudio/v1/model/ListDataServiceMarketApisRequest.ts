import { MallParaDTO } from './MallParaDTO';


export class ListDataServiceMarketApisRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListDataServiceMarketApisRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: MallParaDTO;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): ListDataServiceMarketApisRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListDataServiceMarketApisRequestDlmTypeEnum | string): ListDataServiceMarketApisRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListDataServiceMarketApisRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListDataServiceMarketApisRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListDataServiceMarketApisRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: MallParaDTO): ListDataServiceMarketApisRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDataServiceMarketApisRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
