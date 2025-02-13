

export class CreateNacosNamespacesRequest {
    private 'x-engine-id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    public customNamespaceId?: string;
    public namespaceName?: string;
    public namespaceDesc?: string;
    public constructor(xEngineId?: string, xEnterpriseProjectID?: string, customNamespaceId?: string, namespaceName?: string) { 
        this['x-engine-id'] = xEngineId;
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        this['customNamespaceId'] = customNamespaceId;
        this['namespaceName'] = namespaceName;
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
        this['customNamespaceId'] = customNamespaceId;
        return this;
    }
    public withNamespaceName(namespaceName: string): CreateNacosNamespacesRequest {
        this['namespaceName'] = namespaceName;
        return this;
    }
    public withNamespaceDesc(namespaceDesc: string): CreateNacosNamespacesRequest {
        this['namespaceDesc'] = namespaceDesc;
        return this;
    }
}