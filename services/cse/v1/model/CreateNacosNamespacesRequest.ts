

export class CreateNacosNamespacesRequest {
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'custom_namespace_id'?: string;
    private 'namespace_name'?: string;
    private 'namespace_desc'?: string;
    public constructor(xEngineId?: string, xEnterpriseProjectID?: string, customNamespaceId?: string, namespaceName?: string) { 
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['custom_namespace_id'] = customNamespaceId;
        this['namespace_name'] = namespaceName;
    }
    public withXEngineId(xEngineId: string): CreateNacosNamespacesRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): CreateNacosNamespacesRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withCustomNamespaceId(customNamespaceId: string): CreateNacosNamespacesRequest {
        this['custom_namespace_id'] = customNamespaceId;
        return this;
    }
    public set customNamespaceId(customNamespaceId: string  | undefined) {
        this['custom_namespace_id'] = customNamespaceId;
    }
    public get customNamespaceId(): string | undefined {
        return this['custom_namespace_id'];
    }
    public withNamespaceName(namespaceName: string): CreateNacosNamespacesRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withNamespaceDesc(namespaceDesc: string): CreateNacosNamespacesRequest {
        this['namespace_desc'] = namespaceDesc;
        return this;
    }
    public set namespaceDesc(namespaceDesc: string  | undefined) {
        this['namespace_desc'] = namespaceDesc;
    }
    public get namespaceDesc(): string | undefined {
        return this['namespace_desc'];
    }
}