

export class DeleteAliasRequestBody {
    public aliases?: Array<string>;
    private 'key_id'?: string;
    public constructor(aliases?: Array<string>, keyId?: string) { 
        this['aliases'] = aliases;
        this['key_id'] = keyId;
    }
    public withAliases(aliases: Array<string>): DeleteAliasRequestBody {
        this['aliases'] = aliases;
        return this;
    }
    public withKeyId(keyId: string): DeleteAliasRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
}