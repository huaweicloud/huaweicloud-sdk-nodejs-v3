

export class CreateKeyStoreRequestBody {
    private 'keystore_alias'?: string;
    private 'hsm_cluster_id'?: string;
    private 'hsm_ca_cert'?: string;
    public constructor(keystoreAlias?: string, hsmClusterId?: string, hsmCaCert?: string) { 
        this['keystore_alias'] = keystoreAlias;
        this['hsm_cluster_id'] = hsmClusterId;
        this['hsm_ca_cert'] = hsmCaCert;
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
}