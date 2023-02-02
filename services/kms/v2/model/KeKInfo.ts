

export class KeKInfo {
    private 'key_id'?: string | undefined;
    private 'domain_id'?: string | undefined;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeKInfo {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withDomainId(domainId: string): KeKInfo {
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