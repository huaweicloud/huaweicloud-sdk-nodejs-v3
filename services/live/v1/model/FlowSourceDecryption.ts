

export class FlowSourceDecryption {
    public algorithm?: FlowSourceDecryptionAlgorithmEnum | string;
    private 'key_type'?: FlowSourceDecryptionKeyTypeEnum | string;
    public passphrase?: string;
    public constructor(keyType?: string, passphrase?: string) { 
        this['key_type'] = keyType;
        this['passphrase'] = passphrase;
    }
    public withAlgorithm(algorithm: FlowSourceDecryptionAlgorithmEnum | string): FlowSourceDecryption {
        this['algorithm'] = algorithm;
        return this;
    }
    public withKeyType(keyType: FlowSourceDecryptionKeyTypeEnum | string): FlowSourceDecryption {
        this['key_type'] = keyType;
        return this;
    }
    public set keyType(keyType: FlowSourceDecryptionKeyTypeEnum | string  | undefined) {
        this['key_type'] = keyType;
    }
    public get keyType(): FlowSourceDecryptionKeyTypeEnum | string | undefined {
        return this['key_type'];
    }
    public withPassphrase(passphrase: string): FlowSourceDecryption {
        this['passphrase'] = passphrase;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowSourceDecryptionAlgorithmEnum {
    AES128 = 'aes128',
    AES192 = 'aes192',
    AES256 = 'aes256'
}
/**
    * @export
    * @enum {string}
    */
export enum FlowSourceDecryptionKeyTypeEnum {
    SPEKE = 'speke',
    STATIC_KEY = 'static-key',
    SRT_PASSWORD = 'srt-password'
}
