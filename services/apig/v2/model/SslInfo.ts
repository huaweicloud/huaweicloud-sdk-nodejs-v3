

export class SslInfo {
    private 'ssl_id'?: string;
    private 'ssl_name'?: string;
    private 'algorithm_type'?: SslInfoAlgorithmTypeEnum | string;
    public type?: number;
    private 'is_has_trusted_root_ca'?: boolean;
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
    public withType(type: number): SslInfo {
        this['type'] = type;
        return this;
    }
    public withIsHasTrustedRootCa(isHasTrustedRootCa: boolean): SslInfo {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
        return this;
    }
    public set isHasTrustedRootCa(isHasTrustedRootCa: boolean  | undefined) {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
    }
    public get isHasTrustedRootCa(): boolean | undefined {
        return this['is_has_trusted_root_ca'];
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
