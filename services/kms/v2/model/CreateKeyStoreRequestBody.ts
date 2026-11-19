

export class CreateKeyStoreRequestBody {
    private 'keystore_alias'?: string;
    private 'hsm_cluster_id'?: string;
    private 'hsm_ca_cert'?: string;
    private 'cluster_id'?: string;
    private 'keystore_type'?: CreateKeyStoreRequestBodyKeystoreTypeEnum | string;
    private 'proxy_uri_endpoint'?: string;
    private 'proxy_uri_path'?: string;
    private 'proxy_access_key_id'?: string;
    private 'proxy_secret_access_key'?: string;
    private 'proxy_vpc_endpoint_service_name'?: string;
    private 'proxy_vpc_endpoint_service_owner'?: string;
    public constructor(keystoreAlias?: string) { 
        this['keystore_alias'] = keystoreAlias;
    }
    public withKeystoreAlias(keystoreAlias: string): CreateKeyStoreRequestBody {
        this['keystore_alias'] = keystoreAlias;
        return this;
    }
    public set keystoreAlias(keystoreAlias: string  | undefined) {
        this['keystore_alias'] = keystoreAlias;
    }
    public get keystoreAlias(): string | undefined {
        return this['keystore_alias'];
    }
    public withHsmClusterId(hsmClusterId: string): CreateKeyStoreRequestBody {
        this['hsm_cluster_id'] = hsmClusterId;
        return this;
    }
    public set hsmClusterId(hsmClusterId: string  | undefined) {
        this['hsm_cluster_id'] = hsmClusterId;
    }
    public get hsmClusterId(): string | undefined {
        return this['hsm_cluster_id'];
    }
    public withHsmCaCert(hsmCaCert: string): CreateKeyStoreRequestBody {
        this['hsm_ca_cert'] = hsmCaCert;
        return this;
    }
    public set hsmCaCert(hsmCaCert: string  | undefined) {
        this['hsm_ca_cert'] = hsmCaCert;
    }
    public get hsmCaCert(): string | undefined {
        return this['hsm_ca_cert'];
    }
    public withClusterId(clusterId: string): CreateKeyStoreRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withKeystoreType(keystoreType: CreateKeyStoreRequestBodyKeystoreTypeEnum | string): CreateKeyStoreRequestBody {
        this['keystore_type'] = keystoreType;
        return this;
    }
    public set keystoreType(keystoreType: CreateKeyStoreRequestBodyKeystoreTypeEnum | string  | undefined) {
        this['keystore_type'] = keystoreType;
    }
    public get keystoreType(): CreateKeyStoreRequestBodyKeystoreTypeEnum | string | undefined {
        return this['keystore_type'];
    }
    public withProxyUriEndpoint(proxyUriEndpoint: string): CreateKeyStoreRequestBody {
        this['proxy_uri_endpoint'] = proxyUriEndpoint;
        return this;
    }
    public set proxyUriEndpoint(proxyUriEndpoint: string  | undefined) {
        this['proxy_uri_endpoint'] = proxyUriEndpoint;
    }
    public get proxyUriEndpoint(): string | undefined {
        return this['proxy_uri_endpoint'];
    }
    public withProxyUriPath(proxyUriPath: string): CreateKeyStoreRequestBody {
        this['proxy_uri_path'] = proxyUriPath;
        return this;
    }
    public set proxyUriPath(proxyUriPath: string  | undefined) {
        this['proxy_uri_path'] = proxyUriPath;
    }
    public get proxyUriPath(): string | undefined {
        return this['proxy_uri_path'];
    }
    public withProxyAccessKeyId(proxyAccessKeyId: string): CreateKeyStoreRequestBody {
        this['proxy_access_key_id'] = proxyAccessKeyId;
        return this;
    }
    public set proxyAccessKeyId(proxyAccessKeyId: string  | undefined) {
        this['proxy_access_key_id'] = proxyAccessKeyId;
    }
    public get proxyAccessKeyId(): string | undefined {
        return this['proxy_access_key_id'];
    }
    public withProxySecretAccessKey(proxySecretAccessKey: string): CreateKeyStoreRequestBody {
        this['proxy_secret_access_key'] = proxySecretAccessKey;
        return this;
    }
    public set proxySecretAccessKey(proxySecretAccessKey: string  | undefined) {
        this['proxy_secret_access_key'] = proxySecretAccessKey;
    }
    public get proxySecretAccessKey(): string | undefined {
        return this['proxy_secret_access_key'];
    }
    public withProxyVpcEndpointServiceName(proxyVpcEndpointServiceName: string): CreateKeyStoreRequestBody {
        this['proxy_vpc_endpoint_service_name'] = proxyVpcEndpointServiceName;
        return this;
    }
    public set proxyVpcEndpointServiceName(proxyVpcEndpointServiceName: string  | undefined) {
        this['proxy_vpc_endpoint_service_name'] = proxyVpcEndpointServiceName;
    }
    public get proxyVpcEndpointServiceName(): string | undefined {
        return this['proxy_vpc_endpoint_service_name'];
    }
    public withProxyVpcEndpointServiceOwner(proxyVpcEndpointServiceOwner: string): CreateKeyStoreRequestBody {
        this['proxy_vpc_endpoint_service_owner'] = proxyVpcEndpointServiceOwner;
        return this;
    }
    public set proxyVpcEndpointServiceOwner(proxyVpcEndpointServiceOwner: string  | undefined) {
        this['proxy_vpc_endpoint_service_owner'] = proxyVpcEndpointServiceOwner;
    }
    public get proxyVpcEndpointServiceOwner(): string | undefined {
        return this['proxy_vpc_endpoint_service_owner'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateKeyStoreRequestBodyKeystoreTypeEnum {
    DEFAULT = 'DEFAULT',
    DHSM = 'DHSM',
    CDMS = 'CDMS',
    XKS = 'XKS'
}
