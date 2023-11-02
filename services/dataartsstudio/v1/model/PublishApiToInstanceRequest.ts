import { GatewayDTO } from './GatewayDTO';


export class PublishApiToInstanceRequest {
    public workspace?: string;
    private 'Dlm-Type'?: PublishApiToInstanceRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    private 'instance_id'?: string;
    public body?: GatewayDTO;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, apiId?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): PublishApiToInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: PublishApiToInstanceRequestDlmTypeEnum | string): PublishApiToInstanceRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: PublishApiToInstanceRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): PublishApiToInstanceRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): PublishApiToInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): PublishApiToInstanceRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withInstanceId(instanceId: string): PublishApiToInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: GatewayDTO): PublishApiToInstanceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublishApiToInstanceRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
