
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKafkaPortProtocolResponse extends SdkResponse {
    private 'job_id'?: string;
    public protocol?: UpdateKafkaPortProtocolResponseProtocolEnum | string;
    public enable?: boolean;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateKafkaPortProtocolResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withProtocol(protocol: UpdateKafkaPortProtocolResponseProtocolEnum | string): UpdateKafkaPortProtocolResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withEnable(enable: boolean): UpdateKafkaPortProtocolResponse {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateKafkaPortProtocolResponseProtocolEnum {
    PRIVATE_PLAIN_ENABLE = 'private_plain_enable',
    PRIVATE_SASL_SSL_ENABLE = 'private_sasl_ssl_enable',
    PRIVATE_SASL_PLAINTEXT_ENABLE = 'private_sasl_plaintext_enable',
    PUBLIC_PLAIN_ENABLE = 'public_plain_enable',
    PUBLIC_SASL_SSL_ENABLE = 'public_sasl_ssl_enable',
    PUBLIC_SASL_PLAINTEXT_ENABLE = 'public_sasl_plaintext_enable'
}
