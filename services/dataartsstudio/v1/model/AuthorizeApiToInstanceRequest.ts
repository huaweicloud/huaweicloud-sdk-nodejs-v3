import { ApiParaForAuthorizeToInstance } from './ApiParaForAuthorizeToInstance';


export class AuthorizeApiToInstanceRequest {
    public workspace?: string;
    private 'Dlm-Type'?: AuthorizeApiToInstanceRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    private 'instance_id'?: string;
    public body?: ApiParaForAuthorizeToInstance;
    public constructor(workspace?: string, contentType?: string, apiId?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): AuthorizeApiToInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: AuthorizeApiToInstanceRequestDlmTypeEnum | string): AuthorizeApiToInstanceRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: AuthorizeApiToInstanceRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): AuthorizeApiToInstanceRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): AuthorizeApiToInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): AuthorizeApiToInstanceRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withInstanceId(instanceId: string): AuthorizeApiToInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ApiParaForAuthorizeToInstance): AuthorizeApiToInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizeApiToInstanceRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
