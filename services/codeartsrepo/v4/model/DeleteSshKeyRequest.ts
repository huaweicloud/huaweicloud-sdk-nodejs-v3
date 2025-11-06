

export class DeleteSshKeyRequest {
    private 'key_id'?: number;
    public constructor(keyId?: number) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: number): DeleteSshKeyRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: number  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): number | undefined {
        return this['key_id'];
    }
}