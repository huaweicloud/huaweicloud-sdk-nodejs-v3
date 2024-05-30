

export class ShowDataServiceInstanceRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowDataServiceInstanceRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    public constructor(workspace?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): ShowDataServiceInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowDataServiceInstanceRequestDlmTypeEnum | string): ShowDataServiceInstanceRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowDataServiceInstanceRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowDataServiceInstanceRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowDataServiceInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): ShowDataServiceInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDataServiceInstanceRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
