

export class VpcHealthConfigBase {
    public protocol?: VpcHealthConfigBaseProtocolEnum | string;
    public path?: string;
    public method?: VpcHealthConfigBaseMethodEnum | string;
    public port?: number;
    private 'threshold_normal'?: number;
    private 'threshold_abnormal'?: number;
    private 'time_interval'?: number;
    private 'http_code'?: string;
    private 'enable_client_ssl'?: boolean;
    public status?: VpcHealthConfigBaseStatusEnum | number;
    public constructor(protocol?: string, thresholdNormal?: number, thresholdAbnormal?: number, timeInterval?: number) { 
        this['protocol'] = protocol;
        this['threshold_normal'] = thresholdNormal;
        this['threshold_abnormal'] = thresholdAbnormal;
        this['time_interval'] = timeInterval;
    }
    public withProtocol(protocol: VpcHealthConfigBaseProtocolEnum | string): VpcHealthConfigBase {
        this['protocol'] = protocol;
        return this;
    }
    public withPath(path: string): VpcHealthConfigBase {
        this['path'] = path;
        return this;
    }
    public withMethod(method: VpcHealthConfigBaseMethodEnum | string): VpcHealthConfigBase {
        this['method'] = method;
        return this;
    }
    public withPort(port: number): VpcHealthConfigBase {
        this['port'] = port;
        return this;
    }
    public withThresholdNormal(thresholdNormal: number): VpcHealthConfigBase {
        this['threshold_normal'] = thresholdNormal;
        return this;
    }
    public set thresholdNormal(thresholdNormal: number  | undefined) {
        this['threshold_normal'] = thresholdNormal;
    }
    public get thresholdNormal(): number | undefined {
        return this['threshold_normal'];
    }
    public withThresholdAbnormal(thresholdAbnormal: number): VpcHealthConfigBase {
        this['threshold_abnormal'] = thresholdAbnormal;
        return this;
    }
    public set thresholdAbnormal(thresholdAbnormal: number  | undefined) {
        this['threshold_abnormal'] = thresholdAbnormal;
    }
    public get thresholdAbnormal(): number | undefined {
        return this['threshold_abnormal'];
    }
    public withTimeInterval(timeInterval: number): VpcHealthConfigBase {
        this['time_interval'] = timeInterval;
        return this;
    }
    public set timeInterval(timeInterval: number  | undefined) {
        this['time_interval'] = timeInterval;
    }
    public get timeInterval(): number | undefined {
        return this['time_interval'];
    }
    public withHttpCode(httpCode: string): VpcHealthConfigBase {
        this['http_code'] = httpCode;
        return this;
    }
    public set httpCode(httpCode: string  | undefined) {
        this['http_code'] = httpCode;
    }
    public get httpCode(): string | undefined {
        return this['http_code'];
    }
    public withEnableClientSsl(enableClientSsl: boolean): VpcHealthConfigBase {
        this['enable_client_ssl'] = enableClientSsl;
        return this;
    }
    public set enableClientSsl(enableClientSsl: boolean  | undefined) {
        this['enable_client_ssl'] = enableClientSsl;
    }
    public get enableClientSsl(): boolean | undefined {
        return this['enable_client_ssl'];
    }
    public withStatus(status: VpcHealthConfigBaseStatusEnum | number): VpcHealthConfigBase {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigBaseProtocolEnum {
    TCP = 'TCP',
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigBaseMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD'
}
/**
    * @export
    * @enum {string}
    */
export enum VpcHealthConfigBaseStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
