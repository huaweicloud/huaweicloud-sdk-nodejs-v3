import { VpcHealthConfigBase } from './VpcHealthConfigBase';


export class VpcHealthConfig {
    public protocol?: VpcHealthConfigProtocolEnum | string;
    public path?: string;
    public method?: VpcHealthConfigMethodEnum | string;
    public port?: number;
    private 'threshold_normal'?: number;
    private 'threshold_abnormal'?: number;
    private 'time_interval'?: number;
    private 'http_code'?: string;
    private 'enable_client_ssl'?: boolean;
    public status?: VpcHealthConfigStatusEnum | number;
    public timeout?: number;
    public constructor(protocol?: string, thresholdNormal?: number, thresholdAbnormal?: number, timeInterval?: number) { 
        this['protocol'] = protocol;
        this['threshold_normal'] = thresholdNormal;
        this['threshold_abnormal'] = thresholdAbnormal;
        this['time_interval'] = timeInterval;
    }
    public withProtocol(protocol: VpcHealthConfigProtocolEnum | string): VpcHealthConfig {
        this['protocol'] = protocol;
        return this;
    }
    public withPath(path: string): VpcHealthConfig {
        this['path'] = path;
        return this;
    }
    public withMethod(method: VpcHealthConfigMethodEnum | string): VpcHealthConfig {
        this['method'] = method;
        return this;
    }
    public withPort(port: number): VpcHealthConfig {
        this['port'] = port;
        return this;
    }
    public withThresholdNormal(thresholdNormal: number): VpcHealthConfig {
        this['threshold_normal'] = thresholdNormal;
        return this;
    }
    public set thresholdNormal(thresholdNormal: number  | undefined) {
        this['threshold_normal'] = thresholdNormal;
    }
    public get thresholdNormal(): number | undefined {
        return this['threshold_normal'];
    }
    public withThresholdAbnormal(thresholdAbnormal: number): VpcHealthConfig {
        this['threshold_abnormal'] = thresholdAbnormal;
        return this;
    }
    public set thresholdAbnormal(thresholdAbnormal: number  | undefined) {
        this['threshold_abnormal'] = thresholdAbnormal;
    }
    public get thresholdAbnormal(): number | undefined {
        return this['threshold_abnormal'];
    }
    public withTimeInterval(timeInterval: number): VpcHealthConfig {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withHttpCode(httpCode: string): VpcHealthConfig {
        this['http_code'] = httpCode;
        return this;
    }
    public set httpCode(httpCode: string  | undefined) {
        this['http_code'] = httpCode;
    }
    public get httpCode(): string | undefined {
        return this['http_code'];
    }
    public withEnableClientSsl(enableClientSsl: boolean): VpcHealthConfig {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withStatus(status: VpcHealthConfigStatusEnum | number): VpcHealthConfig {
        this['status'] = status;
        return this;
    }
    public withTimeout(timeout: number): VpcHealthConfig {
        this['timeout'] = timeout;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigProtocolEnum {
    TCP = 'TCP',
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
