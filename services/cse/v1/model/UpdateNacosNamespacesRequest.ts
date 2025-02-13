

export class UpdateNacosNamespacesRequest {
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public namespace?: string;
    public namespaceShowName?: string;
    public namespaceDesc?: string;
    public constructor(xEngineId?: string, xEnterpriseProjectID?: string, namespace?: string, namespaceShowName?: string, namespaceDesc?: string) { 
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['namespace'] = namespace;
        this['namespaceShowName'] = namespaceShowName;
        this['namespaceDesc'] = namespaceDesc;
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
        this['namespaceShowName'] = namespaceShowName;
        return this;
    }
    public withNamespaceDesc(namespaceDesc: string): UpdateNacosNamespacesRequest {
        this['namespaceDesc'] = namespaceDesc;
        return this;
    }
}