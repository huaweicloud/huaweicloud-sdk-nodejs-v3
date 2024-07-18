

export class ShowServerResponseSslOptions {
    public protocol?: string;
    public port?: number;
    private 'encryption_algorithm'?: string;
    private 'authentication_algorithm'?: string;
    private 'is_compressed'?: boolean;
    public constructor() { 
    }
    public withProtocol(protocol: string): ShowServerResponseSslOptions {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: number): ShowServerResponseSslOptions {
        this['port'] = port;
        return this;
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: string): ShowServerResponseSslOptions {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): string | undefined {
        return this['encryption_algorithm'];
    }
    public withAuthenticationAlgorithm(authenticationAlgorithm: string): ShowServerResponseSslOptions {
        this['authentication_algorithm'] = authenticationAlgorithm;
        return this;
    }
    public set authenticationAlgorithm(authenticationAlgorithm: string  | undefined) {
        this['authentication_algorithm'] = authenticationAlgorithm;
    }
    public get authenticationAlgorithm(): string | undefined {
        return this['authentication_algorithm'];
    }
    public withIsCompressed(isCompressed: boolean): ShowServerResponseSslOptions {
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