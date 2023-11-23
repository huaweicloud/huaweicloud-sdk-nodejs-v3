

export class SourceCdnResp {
    public domain?: string;
    public protocol?: SourceCdnRespProtocolEnum | string;
    private 'authentication_type'?: SourceCdnRespAuthenticationTypeEnum | string;
    public constructor(domain?: string, protocol?: string) { 
        this['domain'] = domain;
        this['protocol'] = protocol;
    }
    public withDomain(domain: string): SourceCdnResp {
        this['domain'] = domain;
        return this;
    }
    public withProtocol(protocol: SourceCdnRespProtocolEnum | string): SourceCdnResp {
        this['protocol'] = protocol;
        return this;
    }
    public withAuthenticationType(authenticationType: SourceCdnRespAuthenticationTypeEnum | string): SourceCdnResp {
        this['authentication_type'] = authenticationType;
        return this;
    }
    public set authenticationType(authenticationType: SourceCdnRespAuthenticationTypeEnum | string  | undefined) {
        this['authentication_type'] = authenticationType;
    }
    public get authenticationType(): SourceCdnRespAuthenticationTypeEnum | string | undefined {
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
    AZURE_SAS_TOKEN = 'AZURE_SAS_TOKEN',
    TENCENT_COS_A = 'TENCENT_COS_A',
    TENCENT_COS_B = 'TENCENT_COS_B',
    TENCENT_COS_C = 'TENCENT_COS_C',
    TENCENT_COS_D = 'TENCENT_COS_D'
}
