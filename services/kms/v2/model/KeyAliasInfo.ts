

export class KeyAliasInfo {
    private 'key_id'?: string;
    private 'key_alias'?: string;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeyAliasInfo {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyAlias(keyAlias: string): KeyAliasInfo {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
}