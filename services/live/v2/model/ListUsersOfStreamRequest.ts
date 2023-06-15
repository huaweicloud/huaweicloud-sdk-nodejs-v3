

export class ListUsersOfStreamRequest {
    private 'play_domain': string | undefined;
    public app?: string;
    public stream?: string;
    public isp?: Array<string>;
    public country?: Array<string>;
    public region?: Array<string>;
    public protocol?: ListUsersOfStreamRequestProtocolEnum;
    public interval?: ListUsersOfStreamRequestIntervalEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'service_type'?: ListUsersOfStreamRequestServiceTypeEnum | undefined;
    public constructor(playDomain?: any) { 
        this['play_domain'] = playDomain;
    }
    public withPlayDomain(playDomain: string): ListUsersOfStreamRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain() {
        return this['play_domain'];
    }
    public withApp(app: string): ListUsersOfStreamRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListUsersOfStreamRequest {
        this['stream'] = stream;
        return this;
    }
    public withIsp(isp: Array<string>): ListUsersOfStreamRequest {
        this['isp'] = isp;
        return this;
    }
    public withCountry(country: Array<string>): ListUsersOfStreamRequest {
        this['country'] = country;
        return this;
    }
    public withRegion(region: Array<string>): ListUsersOfStreamRequest {
        this['region'] = region;
        return this;
    }
    public withProtocol(protocol: ListUsersOfStreamRequestProtocolEnum): ListUsersOfStreamRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withInterval(interval: ListUsersOfStreamRequestIntervalEnum): ListUsersOfStreamRequest {
        this['interval'] = interval;
        return this;
    }
    public withStartTime(startTime: string): ListUsersOfStreamRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListUsersOfStreamRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withServiceType(serviceType: ListUsersOfStreamRequestServiceTypeEnum): ListUsersOfStreamRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListUsersOfStreamRequestServiceTypeEnum | undefined) {
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
export enum ListUsersOfStreamRequestProtocolEnum {
    FLV = 'flv',
    HLS = 'hls'
}
/**
    * @export
    * @enum {string}
    */
export enum ListUsersOfStreamRequestIntervalEnum {
    NUMBER_60 = 60,
    NUMBER_300 = 300
}
/**
    * @export
    * @enum {string}
    */
export enum ListUsersOfStreamRequestServiceTypeEnum {
    LIVE = 'Live',
    LLL = 'LLL',
    ALL = 'ALL'
}
