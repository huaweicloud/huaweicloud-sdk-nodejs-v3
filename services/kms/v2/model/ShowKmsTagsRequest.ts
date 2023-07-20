

export class ShowKmsTagsRequest {
    private 'key_id'?: string;
    public constructor(keyId?: string) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): ShowKmsTagsRequest {
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