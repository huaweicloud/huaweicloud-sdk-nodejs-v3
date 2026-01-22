

export class ListBandwidthDetailRequest {
    private 'play_domains'?: Array<string>;
    public app?: string;
    public stream?: string;
    public country?: Array<string>;
    public region?: Array<string>;
    public isp?: Array<string>;
    public protocol?: ListBandwidthDetailRequestProtocolEnum | string;
    public interval?: ListBandwidthDetailRequestIntervalEnum | number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'service_type'?: ListBandwidthDetailRequestServiceTypeEnum | string;
    private 'ip_type'?: ListBandwidthDetailRequestIpTypeEnum | string;
    public constructor() { 
    }
    public withPlayDomains(playDomains: Array<string>): ListBandwidthDetailRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string>  | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains(): Array<string> | undefined {
        return this['play_domains'];
    }
    public withApp(app: string): ListBandwidthDetailRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListBandwidthDetailRequest {
        this['stream'] = stream;
        return this;
    }
    public withCountry(country: Array<string>): ListBandwidthDetailRequest {
        this['country'] = country;
        return this;
    }
    public withRegion(region: Array<string>): ListBandwidthDetailRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ListBandwidthDetailRequest {
        this['isp'] = isp;
        return this;
    }
    public withProtocol(protocol: ListBandwidthDetailRequestProtocolEnum | string): ListBandwidthDetailRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withInterval(interval: ListBandwidthDetailRequestIntervalEnum | number): ListBandwidthDetailRequest {
        this['interval'] = interval;
        return this;
    }
    public withStartTime(startTime: string): ListBandwidthDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListBandwidthDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withServiceType(serviceType: ListBandwidthDetailRequestServiceTypeEnum | string): ListBandwidthDetailRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListBandwidthDetailRequestServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ListBandwidthDetailRequestServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withIpType(ipType: ListBandwidthDetailRequestIpTypeEnum | string): ListBandwidthDetailRequest {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: ListBandwidthDetailRequestIpTypeEnum | string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): ListBandwidthDetailRequestIpTypeEnum | string | undefined {
        return this['ip_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthDetailRequestProtocolEnum {
    FLV = 'flv',
    HLS = 'hls'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthDetailRequestIntervalEnum {
    NUMBER_300 = 300,
    NUMBER_3600 = 3600,
    NUMBER_86400 = 86400
}
/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthDetailRequestServiceTypeEnum {
    LIVE = 'Live',
    LLL = 'LLL',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBandwidthDetailRequestIpTypeEnum {
    V4 = 'v4',
    V6 = 'v6'
}
