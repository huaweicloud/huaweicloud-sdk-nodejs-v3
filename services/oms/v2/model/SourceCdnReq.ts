

export class SourceCdnReq {
    private 'authentication_key'?: string;
    private 'authentication_type'?: SourceCdnReqAuthenticationTypeEnum | string;
    public domain?: string;
    public protocol?: SourceCdnReqProtocolEnum | string;
    public constructor(authenticationType?: string, domain?: string, protocol?: string) { 
        this['authentication_type'] = authenticationType;
        this['domain'] = domain;
        this['protocol'] = protocol;
    }
    public withAuthenticationKey(authenticationKey: string): SourceCdnReq {
        this['authentication_key'] = authenticationKey;
        return this;
    }
    public set authenticationKey(authenticationKey: string  | undefined) {
        this['authentication_key'] = authenticationKey;
    }
    public get authenticationKey(): string | undefined {
        return this['authentication_key'];
    }
    public withAuthenticationType(authenticationType: SourceCdnReqAuthenticationTypeEnum | string): SourceCdnReq {
        this['authentication_type'] = authenticationType;
        return this;
    }
    public set authenticationType(authenticationType: SourceCdnReqAuthenticationTypeEnum | string  | undefined) {
        this['authentication_type'] = authenticationType;
    }
    public get authenticationType(): SourceCdnReqAuthenticationTypeEnum | string | undefined {
        return this['authentication_type'];
    }
    public withDomain(domain: string): SourceCdnReq {
        this['domain'] = domain;
        return this;
    }
    public withProtocol(protocol: SourceCdnReqProtocolEnum | string): SourceCdnReq {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceCdnReqAuthenticationTypeEnum {
    NONE = 'NONE',
    QINIU_PRIVATE_AUTHENTICATION = 'QINIU_PRIVATE_AUTHENTICATION',
    ALIYUN_OSS_A = 'ALIYUN_OSS_A',
    ALIYUN_OSS_B = 'ALIYUN_OSS_B',
    ALIYUN_OSS_C = 'ALIYUN_OSS_C',
    KSYUN_PRIVATE_AUTHENTICATION = 'KSYUN_PRIVATE_AUTHENTICATION'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceCdnReqProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https'
}
