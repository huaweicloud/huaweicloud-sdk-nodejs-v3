

export class OperateKeyRequestBody {
    private 'key_id'?: string;
    public sequence?: string;
    public constructor(keyId?: string) { 
        this['key_id'] = keyId;
    }
    public withKeyId(keyId: string): OperateKeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withSequence(sequence: string): OperateKeyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}