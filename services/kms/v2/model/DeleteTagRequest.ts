

export class DeleteTagRequest {
    private 'key_id': string | undefined;
    public key: string;
    public constructor(keyId?: any, key?: any) { 
        this['key_id'] = keyId;
        this['key'] = key;
    }
    public withKeyId(keyId: string): DeleteTagRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withKey(key: string): DeleteTagRequest {
        this['key'] = key;
        return this;
    }
}