

export class KeystoreInfo {
    private 'keystore_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public constructor() { 
    }
    public withKeystoreId(keystoreId: string): KeystoreInfo {
        this['keystore_id'] = keystoreId;
        return this;
    }
    public set keystoreId(keystoreId: string | undefined) {
        this['keystore_id'] = keystoreId;
    }
    public get keystoreId() {
        return this['keystore_id'];
    }
    public withDomainId(domainId: string): KeystoreInfo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
}