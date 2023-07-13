

export class ListDomainTrafficSummaryRequest {
    private 'play_domains'?: Array<string> | undefined;
    public app?: string;
    public stream?: string;
    public region?: Array<string>;
    public isp?: Array<string>;
    public protocol?: ListDomainTrafficSummaryRequestProtocolEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'service_type'?: ListDomainTrafficSummaryRequestServiceTypeEnum | undefined;
    public constructor() { 
    }
    public withPlayDomains(playDomains: Array<string>): ListDomainTrafficSummaryRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string> | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains() {
        return this['play_domains'];
    }
    public withApp(app: string): ListDomainTrafficSummaryRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListDomainTrafficSummaryRequest {
        this['stream'] = stream;
        return this;
    }
    public withRegion(region: Array<string>): ListDomainTrafficSummaryRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ListDomainTrafficSummaryRequest {
        this['isp'] = isp;
        return this;
    }
    public withProtocol(protocol: ListDomainTrafficSummaryRequestProtocolEnum): ListDomainTrafficSummaryRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withStartTime(startTime: string): ListDomainTrafficSummaryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListDomainTrafficSummaryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withServiceType(serviceType: ListDomainTrafficSummaryRequestServiceTypeEnum): ListDomainTrafficSummaryRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: ListDomainTrafficSummaryRequestServiceTypeEnum | undefined) {
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
export enum ListDomainTrafficSummaryRequestProtocolEnum {
    FLV = 'flv',
    HLS = 'hls'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDomainTrafficSummaryRequestServiceTypeEnum {
    LIVE = 'Live',
    LLL = 'LLL',
    ALL = 'ALL'
}
