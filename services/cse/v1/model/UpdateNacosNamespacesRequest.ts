

export class UpdateNacosNamespacesRequest {
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public namespace?: string;
    private 'namespace_show_name'?: string;
    private 'namespace_desc'?: string;
    public constructor(xEngineId?: string, xEnterpriseProjectID?: string, namespace?: string, namespaceShowName?: string, namespaceDesc?: string) { 
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['namespace'] = namespace;
        this['namespace_show_name'] = namespaceShowName;
        this['namespace_desc'] = namespaceDesc;
    }
    public withXEngineId(xEngineId: string): UpdateNacosNamespacesRequest {
        this['x-engine-id'] = xEngineId;
        return this;
    }
    public set xEngineId(xEngineId: string  | undefined) {
        this['x-engine-id'] = xEngineId;
    }
    public get xEngineId(): string | undefined {
        return this['x-engine-id'];
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): UpdateNacosNamespacesRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withNamespace(namespace: string): UpdateNacosNamespacesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withNamespaceShowName(namespaceShowName: string): UpdateNacosNamespacesRequest {
        this['namespace_show_name'] = namespaceShowName;
        return this;
    }
    public set namespaceShowName(namespaceShowName: string  | undefined) {
        this['namespace_show_name'] = namespaceShowName;
    }
    public get namespaceShowName(): string | undefined {
        return this['namespace_show_name'];
    }
    public withNamespaceDesc(namespaceDesc: string): UpdateNacosNamespacesRequest {
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