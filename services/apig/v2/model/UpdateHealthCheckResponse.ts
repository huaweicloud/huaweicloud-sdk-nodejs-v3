import { VpcHealthConfig } from './VpcHealthConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHealthCheckResponse extends SdkResponse {
    public protocol?: UpdateHealthCheckResponseProtocolEnum | string;
    public path?: string;
    public method?: UpdateHealthCheckResponseMethodEnum | string;
    public port?: number;
    private 'threshold_normal'?: number;
    private 'threshold_abnormal'?: number;
    private 'time_interval'?: number;
    private 'http_code'?: string;
    private 'enable_client_ssl'?: boolean;
    public status?: UpdateHealthCheckResponseStatusEnum | number;
    public timeout?: number;
    private 'vpc_channel_id'?: string;
    public id?: string;
    private 'create_time'?: Date;
    public constructor(protocol?: string, thresholdNormal?: number, thresholdAbnormal?: number, timeInterval?: number) { 
        super();
        this['protocol'] = protocol;
        this['threshold_normal'] = thresholdNormal;
        this['threshold_abnormal'] = thresholdAbnormal;
        this['time_interval'] = timeInterval;
    }
    public withProtocol(protocol: UpdateHealthCheckResponseProtocolEnum | string): UpdateHealthCheckResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withPath(path: string): UpdateHealthCheckResponse {
        this['path'] = path;
        return this;
    }
    public withMethod(method: UpdateHealthCheckResponseMethodEnum | string): UpdateHealthCheckResponse {
        this['method'] = method;
        return this;
    }
    public withPort(port: number): UpdateHealthCheckResponse {
        this['port'] = port;
        return this;
    }
    public withThresholdNormal(thresholdNormal: number): UpdateHealthCheckResponse {
        this['threshold_normal'] = thresholdNormal;
        return this;
    }
    public set thresholdNormal(thresholdNormal: number  | undefined) {
        this['threshold_normal'] = thresholdNormal;
    }
    public get thresholdNormal(): number | undefined {
        return this['threshold_normal'];
    }
    public withThresholdAbnormal(thresholdAbnormal: number): UpdateHealthCheckResponse {
        this['threshold_abnormal'] = thresholdAbnormal;
        return this;
    }
    public set thresholdAbnormal(thresholdAbnormal: number  | undefined) {
        this['threshold_abnormal'] = thresholdAbnormal;
    }
    public get thresholdAbnormal(): number | undefined {
        return this['threshold_abnormal'];
    }
    public withTimeInterval(timeInterval: number): UpdateHealthCheckResponse {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withHttpCode(httpCode: string): UpdateHealthCheckResponse {
        this['http_code'] = httpCode;
        return this;
    }
    public set httpCode(httpCode: string  | undefined) {
        this['http_code'] = httpCode;
    }
    public get httpCode(): string | undefined {
        return this['http_code'];
    }
    public withEnableClientSsl(enableClientSsl: boolean): UpdateHealthCheckResponse {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withStatus(status: UpdateHealthCheckResponseStatusEnum | number): UpdateHealthCheckResponse {
        this['status'] = status;
        return this;
    }
    public withTimeout(timeout: number): UpdateHealthCheckResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withVpcChannelId(vpcChannelId: string): UpdateHealthCheckResponse {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withId(id: string): UpdateHealthCheckResponse {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: Date): UpdateHealthCheckResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHealthCheckResponseProtocolEnum {
    TCP = 'TCP',
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateHealthCheckResponseMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateHealthCheckResponseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
