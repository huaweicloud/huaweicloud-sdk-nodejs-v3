

export class SslInfo {
    private 'ssl_id'?: string;
    private 'ssl_name'?: string;
    private 'algorithm_type'?: SslInfoAlgorithmTypeEnum | string;
    public type?: SslInfoTypeEnum | string;
    public constructor() { 
    }
    public withSslId(sslId: string): SslInfo {
        this['ssl_id'] = sslId;
        return this;
    }
    public set sslId(sslId: string  | undefined) {
        this['ssl_id'] = sslId;
    }
    public get sslId(): string | undefined {
        return this['ssl_id'];
    }
    public withSslName(sslName: string): SslInfo {
        this['ssl_name'] = sslName;
        return this;
    }
    public set sslName(sslName: string  | undefined) {
        this['ssl_name'] = sslName;
    }
    public get sslName(): string | undefined {
        return this['ssl_name'];
    }
    public withAlgorithmType(algorithmType: SslInfoAlgorithmTypeEnum | string): SslInfo {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: SslInfoAlgorithmTypeEnum | string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): SslInfoAlgorithmTypeEnum | string | undefined {
        return this['algorithm_type'];
    }
    public withType(type: SslInfoTypeEnum | string): SslInfo {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SslInfoAlgorithmTypeEnum {
    RSA = 'RSA',
    ECC = 'ECC',
    SM2 = 'SM2'
}
/**
    * @export
    * @enum {string}
    */
export enum SslInfoTypeEnum {
    INSTANCE = 'instance',
    GLOBAL = 'global'
}
