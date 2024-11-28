

export class EncryptionConfig {
    public mode?: EncryptionConfigModeEnum | string;
    public kmsKeyID?: string;
    public constructor() { 
    }
    public withMode(mode: EncryptionConfigModeEnum | string): EncryptionConfig {
        this['mode'] = mode;
        return this;
    }
    public withKmsKeyID(kmsKeyID: string): EncryptionConfig {
        this['kmsKeyID'] = kmsKeyID;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EncryptionConfigModeEnum {
    DEFAULT = 'Default',
    KMS = 'KMS'
}
