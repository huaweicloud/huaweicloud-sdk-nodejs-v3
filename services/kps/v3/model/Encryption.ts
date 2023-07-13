

export class Encryption {
    public type?: EncryptionTypeEnum;
    private 'kms_key_name'?: string | undefined;
    public constructor() { 
    }
    public withType(type: EncryptionTypeEnum): Encryption {
        this['type'] = type;
        return this;
    }
    public withKmsKeyName(kmsKeyName: string): Encryption {
        this['kms_key_name'] = kmsKeyName;
        return this;
    }
    public set kmsKeyName(kmsKeyName: string | undefined) {
        this['kms_key_name'] = kmsKeyName;
    }
    public get kmsKeyName() {
        return this['kms_key_name'];
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
