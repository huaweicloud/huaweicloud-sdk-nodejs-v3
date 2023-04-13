

export class SourceCdnResp {
    public domain: string;
    public protocol: SourceCdnRespProtocolEnum;
    private 'authentication_type'?: SourceCdnRespAuthenticationTypeEnum | undefined;
    public constructor(domain?: any, protocol?: any) { 
        this['domain'] = domain;
        this['protocol'] = protocol;
    }
    public withDomain(domain: string): SourceCdnResp {
        this['domain'] = domain;
        return this;
    }
    public withProtocol(protocol: SourceCdnRespProtocolEnum): SourceCdnResp {
        this['protocol'] = protocol;
        return this;
    }
    public withAuthenticationType(authenticationType: SourceCdnRespAuthenticationTypeEnum): SourceCdnResp {
        this['authentication_type'] = authenticationType;
        return this;
    }
    public set authenticationType(authenticationType: SourceCdnRespAuthenticationTypeEnum | undefined) {
        this['authentication_type'] = authenticationType;
    }
    public get authenticationType() {
        return this['authentication_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SourceCdnRespProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https'
}
/**
    * @export
    * @enum {string}
    */
export enum SourceCdnRespAuthenticationTypeEnum {
    NONE = 'NONE',
    QINIU_PRIVATE_AUTHENTICATION = 'QINIU_PRIVATE_AUTHENTICATION',
    ALIYUN_OSS_A = 'ALIYUN_OSS_A',
    ALIYUN_OSS_B = 'ALIYUN_OSS_B',
    ALIYUN_OSS_C = 'ALIYUN_OSS_C',
    KSYUN_PRIVATE_AUTHENTICATION = 'KSYUN_PRIVATE_AUTHENTICATION',
    AZURE_SAS_TOKEN = 'AZURE_SAS_TOKEN'
}
