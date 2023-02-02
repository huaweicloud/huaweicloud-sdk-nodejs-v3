

export class OperateKeyRequestBody {
    private 'key_id': string | undefined;
    public sequence?: string;
    public constructor(keyId?: any) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): OperateKeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withSequence(sequence: string): OperateKeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}