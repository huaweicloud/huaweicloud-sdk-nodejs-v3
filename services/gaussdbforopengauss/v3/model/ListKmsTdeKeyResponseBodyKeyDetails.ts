

export class ListKmsTdeKeyResponseBodyKeyDetails {
    private 'key_id'?: string;
    private 'default_key_flag'?: string;
    private 'key_alias'?: string;
    private 'key_spec'?: string;
    private 'domain_id'?: string;
    private 'key_state'?: string;
    public constructor() { 
    }
    public withKeyId(keyId: string): ListKmsTdeKeyResponseBodyKeyDetails {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withDefaultKeyFlag(defaultKeyFlag: string): ListKmsTdeKeyResponseBodyKeyDetails {
        this['default_key_flag'] = defaultKeyFlag;
        return this;
    }
    public set defaultKeyFlag(defaultKeyFlag: string  | undefined) {
        this['default_key_flag'] = defaultKeyFlag;
    }
    public get defaultKeyFlag(): string | undefined {
        return this['default_key_flag'];
    }
    public withKeyAlias(keyAlias: string): ListKmsTdeKeyResponseBodyKeyDetails {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withKeySpec(keySpec: string): ListKmsTdeKeyResponseBodyKeyDetails {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): string | undefined {
        return this['key_spec'];
    }
    public withDomainId(domainId: string): ListKmsTdeKeyResponseBodyKeyDetails {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withKeyState(keyState: string): ListKmsTdeKeyResponseBodyKeyDetails {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: string  | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState(): string | undefined {
        return this['key_state'];
    }
}