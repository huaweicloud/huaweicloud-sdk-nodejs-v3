

export class ListBandwidthDetailRequest {
    private 'play_domains'?: Array<string> | undefined;
    public app?: string;
    public stream?: string;
    public country?: Array<string>;
    public region?: Array<string>;
    public isp?: Array<string>;
    public protocol?: ListBandwidthDetailRequestProtocolEnum;
    public interval?: ListBandwidthDetailRequestIntervalEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'service_type'?: ListBandwidthDetailRequestServiceTypeEnum | undefined;
    public constructor() { 
    }
    public withPlayDomains(playDomains: Array<string>): ListBandwidthDetailRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string> | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains() {
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
    public withProtocol(protocol: ListBandwidthDetailRequestProtocolEnum): ListBandwidthDetailRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withInterval(interval: ListBandwidthDetailRequestIntervalEnum): ListBandwidthDetailRequest {
        this['interval'] = interval;
        return this;
    }
    public withStartTime(startTime: string): ListBandwidthDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListBandwidthDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withServiceType(serviceType: ListBandwidthDetailRequestServiceTypeEnum): ListBandwidthDetailRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListBandwidthDetailRequestServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
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
