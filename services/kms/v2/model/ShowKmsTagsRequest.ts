

export class ShowKmsTagsRequest {
    private 'key_id': string | undefined;
    public constructor(keyId?: any) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): ShowKmsTagsRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
}