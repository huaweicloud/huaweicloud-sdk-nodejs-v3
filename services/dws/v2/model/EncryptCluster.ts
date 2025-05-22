

export class EncryptCluster {
    private 'master_key_id'?: string;
    private 'master_key_name'?: string;
    private 'crypt_algorithm'?: string;
    public constructor(masterKeyId?: string, cryptAlgorithm?: string) { 
        this['master_key_id'] = masterKeyId;
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public withMasterKeyId(masterKeyId: string): EncryptCluster {
        this['master_key_id'] = masterKeyId;
        return this;
    }
    public set masterKeyId(masterKeyId: string  | undefined) {
        this['master_key_id'] = masterKeyId;
    }
    public get masterKeyId(): string | undefined {
        return this['master_key_id'];
    }
    public withMasterKeyName(masterKeyName: string): EncryptCluster {
        this['master_key_name'] = masterKeyName;
        return this;
    }
    public set masterKeyName(masterKeyName: string  | undefined) {
        this['master_key_name'] = masterKeyName;
    }
    public get masterKeyName(): string | undefined {
        return this['master_key_name'];
    }
    public withCryptAlgorithm(cryptAlgorithm: string): EncryptCluster {
        this['crypt_algorithm'] = cryptAlgorithm;
        return this;
    }
    public set cryptAlgorithm(cryptAlgorithm: string  | undefined) {
        this['crypt_algorithm'] = cryptAlgorithm;
    }
    public get cryptAlgorithm(): string | undefined {
        return this['crypt_algorithm'];
    }
}