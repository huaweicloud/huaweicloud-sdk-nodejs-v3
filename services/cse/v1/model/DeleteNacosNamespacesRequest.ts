

export class DeleteNacosNamespacesRequest {
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'namespace_id'?: string;
    public constructor(xEngineId?: string, xEnterpriseProjectID?: string, namespaceId?: string) { 
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['namespace_id'] = namespaceId;
    }
    public withXEngineId(xEngineId: string): DeleteNacosNamespacesRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteNacosNamespacesRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withNamespaceId(namespaceId: string): DeleteNacosNamespacesRequest {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: string  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): string | undefined {
        return this['namespace_id'];
    }
}