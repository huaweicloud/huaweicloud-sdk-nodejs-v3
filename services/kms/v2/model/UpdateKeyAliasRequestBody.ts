

export class UpdateKeyAliasRequestBody {
    private 'key_id'?: string;
    private 'key_alias'?: string;
    public sequence?: string;
    public constructor(keyId?: string, keyAlias?: string) { 
        this['key_id'] = keyId;
        this['key_alias'] = keyAlias;
    }
    public withKeyId(keyId: string): UpdateKeyAliasRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyAlias(keyAlias: string): UpdateKeyAliasRequestBody {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withSequence(sequence: string): UpdateKeyAliasRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}