

export class ListDomainTrafficDetailRequest {
    private 'play_domains'?: Array<string>;
    public app?: string;
    public stream?: string;
    public region?: Array<string>;
    public isp?: Array<string>;
    public protocol?: ListDomainTrafficDetailRequestProtocolEnum | string;
    public interval?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'service_type'?: ListDomainTrafficDetailRequestServiceTypeEnum | string;
    public constructor() { 
    }
    public withPlayDomains(playDomains: Array<string>): ListDomainTrafficDetailRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string>  | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains(): Array<string> | undefined {
        return this['play_domains'];
    }
    public withApp(app: string): ListDomainTrafficDetailRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListDomainTrafficDetailRequest {
        this['stream'] = stream;
        return this;
    }
    public withRegion(region: Array<string>): ListDomainTrafficDetailRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ListDomainTrafficDetailRequest {
        this['isp'] = isp;
        return this;
    }
    public withProtocol(protocol: ListDomainTrafficDetailRequestProtocolEnum | string): ListDomainTrafficDetailRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withInterval(interval: number): ListDomainTrafficDetailRequest {
        this['interval'] = interval;
        return this;
    }
    public withStartTime(startTime: string): ListDomainTrafficDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDomainTrafficDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withServiceType(serviceType: ListDomainTrafficDetailRequestServiceTypeEnum | string): ListDomainTrafficDetailRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListDomainTrafficDetailRequestServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): ListDomainTrafficDetailRequestServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDomainTrafficDetailRequestProtocolEnum {
    FLV = 'flv',
    HLS = 'hls'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDomainTrafficDetailRequestServiceTypeEnum {
    LIVE = 'Live',
    LLL = 'LLL',
    ALL = 'ALL'
}
