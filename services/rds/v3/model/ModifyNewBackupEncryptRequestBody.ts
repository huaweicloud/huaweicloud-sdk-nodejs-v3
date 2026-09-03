

export class ModifyNewBackupEncryptRequestBody {
    private 'kms_key'?: string;
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withKmsKey(kmsKey: string): ModifyNewBackupEncryptRequestBody {
        this['kms_key'] = kmsKey;
        return this;
    }
    public set kmsKey(kmsKey: string  | undefined) {
        this['kms_key'] = kmsKey;
    }
    public get kmsKey(): string | undefined {
        return this['kms_key'];
    }
    public withEnabled(enabled: boolean): ModifyNewBackupEncryptRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}