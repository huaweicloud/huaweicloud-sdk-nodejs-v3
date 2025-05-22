

export class RotateKeyRequestBody {
    private 'master_key_id'?: string;
    public constructor() { 
    }
    public withMasterKeyId(masterKeyId: string): RotateKeyRequestBody {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string  | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId(): string | undefined {
        return this['master_key_id'];
    }
}