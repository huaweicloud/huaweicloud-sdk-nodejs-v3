

export class CreateServerRequestSslOptions {
    public protocol?: CreateServerRequestSslOptionsProtocolEnum | string;
    public port?: CreateServerRequestSslOptionsPortEnum | number;
    private 'encryption_algorithm'?: CreateServerRequestSslOptionsEncryptionAlgorithmEnum | string;
    private 'is_compressed'?: boolean;
    public constructor() { 
    }
    public withProtocol(protocol: CreateServerRequestSslOptionsProtocolEnum | string): CreateServerRequestSslOptions {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: CreateServerRequestSslOptionsPortEnum | number): CreateServerRequestSslOptions {
        this['port'] = port;
        return this;
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: CreateServerRequestSslOptionsEncryptionAlgorithmEnum | string): CreateServerRequestSslOptions {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: CreateServerRequestSslOptionsEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): CreateServerRequestSslOptionsEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withIsCompressed(isCompressed: boolean): CreateServerRequestSslOptions {
        this['is_compressed'] = isCompressed;
        return this;
    }
    public set isCompressed(isCompressed: boolean  | undefined) {
        this['is_compressed'] = isCompressed;
    }
    public get isCompressed(): boolean | undefined {
        return this['is_compressed'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateServerRequestSslOptionsProtocolEnum {
    TCP = 'TCP'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateServerRequestSslOptionsPortEnum {
    NUMBER_443 = 443,
    NUMBER_1194 = 1194
}
/**
    * @export
    * @enum {string}
    */
export enum CreateServerRequestSslOptionsEncryptionAlgorithmEnum {
    AES_128_GCM = 'AES-128-GCM',
    AES_256_GCM = 'AES-256-GCM'
}
