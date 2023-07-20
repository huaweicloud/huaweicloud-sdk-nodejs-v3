

export class DeleteTagRequest {
    private 'key_id'?: string;
    public key?: string;
    public constructor(keyId?: string, key?: string) { 
        this['key_id'] = keyId;
        this['key'] = key;
    }
    public withKeyId(keyId: string): DeleteTagRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKey(key: string): DeleteTagRequest {
        this['key'] = key;
        return this;
    }
}