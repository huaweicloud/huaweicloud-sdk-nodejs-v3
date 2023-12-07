import { ApiParaForAuthToInstance } from './ApiParaForAuthToInstance';


export class AuthorizeActionApiToInstanceRequest {
    public workspace?: string;
    private 'Dlm-Type'?: AuthorizeActionApiToInstanceRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    public body?: ApiParaForAuthToInstance;
    public constructor(workspace?: string, contentType?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): AuthorizeActionApiToInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: AuthorizeActionApiToInstanceRequestDlmTypeEnum | string): AuthorizeActionApiToInstanceRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: AuthorizeActionApiToInstanceRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): AuthorizeActionApiToInstanceRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): AuthorizeActionApiToInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ApiParaForAuthToInstance): AuthorizeActionApiToInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizeActionApiToInstanceRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
