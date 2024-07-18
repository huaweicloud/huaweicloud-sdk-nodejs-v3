

export class UpdateServerRequestSslOptions {
    public protocol?: UpdateServerRequestSslOptionsProtocolEnum | string;
    public port?: UpdateServerRequestSslOptionsPortEnum | number;
    private 'encryption_algorithm'?: UpdateServerRequestSslOptionsEncryptionAlgorithmEnum | string;
    public constructor() { 
    }
    public withProtocol(protocol: UpdateServerRequestSslOptionsProtocolEnum | string): UpdateServerRequestSslOptions {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: UpdateServerRequestSslOptionsPortEnum | number): UpdateServerRequestSslOptions {
        this['port'] = port;
        return this;
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: UpdateServerRequestSslOptionsEncryptionAlgorithmEnum | string): UpdateServerRequestSslOptions {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: UpdateServerRequestSslOptionsEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): UpdateServerRequestSslOptionsEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateServerRequestSslOptionsProtocolEnum {
    TCP = 'TCP'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateServerRequestSslOptionsPortEnum {
    NUMBER_443 = 443,
    NUMBER_1194 = 1194
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateServerRequestSslOptionsEncryptionAlgorithmEnum {
    AES_128_GCM = 'AES-128-GCM',
    AES_256_GCM = 'AES-256-GCM'
}
