

export class ShowUpBandwidthRequest {
    private 'publish_domains'?: Array<string>;
    public app?: string;
    public stream?: string;
    public region?: Array<string>;
    public isp?: Array<string>;
    public interval?: ShowUpBandwidthRequestIntervalEnum | number;
    public type?: ShowUpBandwidthRequestTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(publishDomains?: Array<string>) { 
        this['publish_domains'] = publishDomains;
    }
    public withPublishDomains(publishDomains: Array<string>): ShowUpBandwidthRequest {
        this['publish_domains'] = publishDomains;
        return this;
    }
    public set publishDomains(publishDomains: Array<string>  | undefined) {
        this['publish_domains'] = publishDomains;
    }
    public get publishDomains(): Array<string> | undefined {
        return this['publish_domains'];
    }
    public withApp(app: string): ShowUpBandwidthRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ShowUpBandwidthRequest {
        this['stream'] = stream;
        return this;
    }
    public withRegion(region: Array<string>): ShowUpBandwidthRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ShowUpBandwidthRequest {
        this['isp'] = isp;
        return this;
    }
    public withInterval(interval: ShowUpBandwidthRequestIntervalEnum | number): ShowUpBandwidthRequest {
        this['interval'] = interval;
        return this;
    }
    public withType(type: ShowUpBandwidthRequestTypeEnum | string): ShowUpBandwidthRequest {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ShowUpBandwidthRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowUpBandwidthRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUpBandwidthRequestIntervalEnum {
    NUMBER_300 = 300,
    NUMBER_3600 = 3600,
    NUMBER_86400 = 86400
}
/**
    * @export
    * @enum {string}
    */
export enum ShowUpBandwidthRequestTypeEnum {
    RELAY = 'RELAY'
}
