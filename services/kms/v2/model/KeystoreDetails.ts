

export class KeystoreDetails {
    private 'keystore_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    private 'keystore_alias'?: string | undefined;
    private 'keystore_type'?: string | undefined;
    private 'hsm_cluster_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): KeystoreDetails {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId() {
        return this['keystore_id'];
    }
    public withDomainId(domainId: string): KeystoreDetails {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withKeystoreAlias(keystoreAlias: string): KeystoreDetails {
        this['keystore_alias'] = keystoreAlias;
        return this;
    }
    public set keystoreAlias(keystoreAlias: string | undefined) {
        this['keystore_alias'] = keystoreAlias;
    }
    public get keystoreAlias() {
        return this['keystore_alias'];
    }
    public withKeystoreType(keystoreType: string): KeystoreDetails {
        this['keystore_type'] = keystoreType;
        return this;
    }
    public set keystoreType(keystoreType: string | undefined) {
        this['keystore_type'] = keystoreType;
    }
    public get keystoreType() {
        return this['keystore_type'];
    }
    public withHsmClusterId(hsmClusterId: string): KeystoreDetails {
        this['hsm_cluster_id'] = hsmClusterId;
        return this;
    }
    public set hsmClusterId(hsmClusterId: string | undefined) {
        this['hsm_cluster_id'] = hsmClusterId;
    }
    public get hsmClusterId() {
        return this['hsm_cluster_id'];
    }
    public withCreateTime(createTime: string): KeystoreDetails {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}