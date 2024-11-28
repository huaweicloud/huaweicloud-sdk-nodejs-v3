

export class CreateAliasRequestBody {
    private 'key_id'?: string;
    public alias?: string;
    public constructor(keyId?: string, alias?: string) { 
        this['key_id'] = keyId;
        this['alias'] = alias;
    }
    public withKeyId(keyId: string): CreateAliasRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withAlias(alias: string): CreateAliasRequestBody {
        this['alias'] = alias;
        return this;
    }
}