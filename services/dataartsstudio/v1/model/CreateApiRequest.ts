import { Api } from './Api';


export class CreateApiRequest {
    public workspace?: string;
    private 'Dlm-Type'?: CreateApiRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: Api;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): CreateApiRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: CreateApiRequestDlmTypeEnum | string): CreateApiRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: CreateApiRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): CreateApiRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): CreateApiRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: Api): CreateApiRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateApiRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
