

export class CreateKeyStoreRequestBody {
    private 'keystore_alias'?: string;
    private 'hsm_cluster_id'?: string;
    private 'hsm_ca_cert'?: string;
    private 'cluster_id'?: string;
    private 'keystore_type'?: CreateKeyStoreRequestBodyKeystoreTypeEnum | string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum CreateKeyStoreRequestBodyKeystoreTypeEnum {
    DEFAULT = 'DEFAULT',
    DHSM = 'DHSM',
    CDMS = 'CDMS'
}
