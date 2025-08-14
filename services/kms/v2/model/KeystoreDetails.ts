

export class KeystoreDetails {
    private 'keystore_id'?: string;
    private 'domain_id'?: string;
    private 'keystore_alias'?: string;
    private 'keystore_type'?: string;
    private 'hsm_cluster_id'?: string;
    private 'cluster_id'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): KeystoreDetails {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string  | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId(): string | undefined {
        return this['keystore_id'];
    }
    public withDomainId(domainId: string): KeystoreDetails {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withKeystoreAlias(keystoreAlias: string): KeystoreDetails {
        this['keystore_alias'] = keystoreAlias;
        return this;
    }
    public set keystoreAlias(keystoreAlias: string  | undefined) {
        this['keystore_alias'] = keystoreAlias;
    }
    public get keystoreAlias(): string | undefined {
        return this['keystore_alias'];
    }
    public withKeystoreType(keystoreType: string): KeystoreDetails {
        this['keystore_type'] = keystoreType;
        return this;
    }
    public set keystoreType(keystoreType: string  | undefined) {
        this['keystore_type'] = keystoreType;
    }
    public get keystoreType(): string | undefined {
        return this['keystore_type'];
    }
    public withHsmClusterId(hsmClusterId: string): KeystoreDetails {
        this['hsm_cluster_id'] = hsmClusterId;
        return this;
    }
    public set hsmClusterId(hsmClusterId: string  | undefined) {
        this['hsm_cluster_id'] = hsmClusterId;
    }
    public get hsmClusterId(): string | undefined {
        return this['hsm_cluster_id'];
    }
    public withClusterId(clusterId: string): KeystoreDetails {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withCreateTime(createTime: string): KeystoreDetails {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}