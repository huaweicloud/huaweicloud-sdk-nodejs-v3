import { VpcHealthConfig } from './VpcHealthConfig';


export class VpcHealthConfigInfo {
    public protocol?: VpcHealthConfigInfoProtocolEnum | string;
    public path?: string;
    public method?: VpcHealthConfigInfoMethodEnum | string;
    public port?: number;
    private 'threshold_normal'?: number;
    private 'threshold_abnormal'?: number;
    private 'time_interval'?: number;
    private 'http_code'?: string;
    private 'enable_client_ssl'?: boolean;
    public status?: VpcHealthConfigInfoStatusEnum | number;
    public timeout?: number;
    private 'vpc_channel_id'?: string;
    public id?: string;
    private 'create_time'?: Date;
    public constructor(protocol?: string, thresholdNormal?: number, thresholdAbnormal?: number, timeInterval?: number) { 
        this['protocol'] = protocol;
        this['threshold_normal'] = thresholdNormal;
        this['threshold_abnormal'] = thresholdAbnormal;
        this['time_interval'] = timeInterval;
    }
    public withProtocol(protocol: VpcHealthConfigInfoProtocolEnum | string): VpcHealthConfigInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withPath(path: string): VpcHealthConfigInfo {
        this['path'] = path;
        return this;
    }
    public withMethod(method: VpcHealthConfigInfoMethodEnum | string): VpcHealthConfigInfo {
        this['method'] = method;
        return this;
    }
    public withPort(port: number): VpcHealthConfigInfo {
        this['port'] = port;
        return this;
    }
    public withThresholdNormal(thresholdNormal: number): VpcHealthConfigInfo {
        this['threshold_normal'] = thresholdNormal;
        return this;
    }
    public set thresholdNormal(thresholdNormal: number  | undefined) {
        this['threshold_normal'] = thresholdNormal;
    }
    public get thresholdNormal(): number | undefined {
        return this['threshold_normal'];
    }
    public withThresholdAbnormal(thresholdAbnormal: number): VpcHealthConfigInfo {
        this['threshold_abnormal'] = thresholdAbnormal;
        return this;
    }
    public set thresholdAbnormal(thresholdAbnormal: number  | undefined) {
        this['threshold_abnormal'] = thresholdAbnormal;
    }
    public get thresholdAbnormal(): number | undefined {
        return this['threshold_abnormal'];
    }
    public withTimeInterval(timeInterval: number): VpcHealthConfigInfo {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withHttpCode(httpCode: string): VpcHealthConfigInfo {
        this['http_code'] = httpCode;
        return this;
    }
    public set httpCode(httpCode: string  | undefined) {
        this['http_code'] = httpCode;
    }
    public get httpCode(): string | undefined {
        return this['http_code'];
    }
    public withEnableClientSsl(enableClientSsl: boolean): VpcHealthConfigInfo {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withStatus(status: VpcHealthConfigInfoStatusEnum | number): VpcHealthConfigInfo {
        this['status'] = status;
        return this;
    }
    public withTimeout(timeout: number): VpcHealthConfigInfo {
        this['timeout'] = timeout;
        return this;
    }
    public withVpcChannelId(vpcChannelId: string): VpcHealthConfigInfo {
        this['vpc_channel_id'] = vpcChannelId;
        return this;
    }
    public set vpcChannelId(vpcChannelId: string  | undefined) {
        this['vpc_channel_id'] = vpcChannelId;
    }
    public get vpcChannelId(): string | undefined {
        return this['vpc_channel_id'];
    }
    public withId(id: string): VpcHealthConfigInfo {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: Date): VpcHealthConfigInfo {
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
export enum VpcHealthConfigInfoProtocolEnum {
    TCP = 'TCP',
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigInfoMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigInfoStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
