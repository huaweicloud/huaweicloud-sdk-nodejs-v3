

export class Encryption {
    public type?: EncryptionTypeEnum | string;
    private 'kms_key_name'?: string;
    private 'kms_key_id'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: EncryptionTypeEnum | string): Encryption {
        this['type'] = type;
        return this;
    }
    public withKmsKeyName(kmsKeyName: string): Encryption {
        this['kms_key_name'] = kmsKeyName;
        return this;
    }
    public set kmsKeyName(kmsKeyName: string  | undefined) {
        this['kms_key_name'] = kmsKeyName;
    }
    public get kmsKeyName(): string | undefined {
        return this['kms_key_name'];
    }
    public withKmsKeyId(kmsKeyId: string): Encryption {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EncryptionTypeEnum {
    DEFAULT = 'default',
    KMS = 'kms'
}
