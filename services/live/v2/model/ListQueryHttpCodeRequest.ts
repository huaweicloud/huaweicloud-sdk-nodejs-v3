

export class ListQueryHttpCodeRequest {
    private 'play_domains': Array<string> | undefined;
    public code?: Array<string>;
    public region?: Array<string>;
    public isp?: Array<string>;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(playDomains?: any) { 
        this['play_domains'] = playDomains;
    }
    public withPlayDomains(playDomains: Array<string>): ListQueryHttpCodeRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string> | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains() {
        return this['play_domains'];
    }
    public withCode(code: Array<string>): ListQueryHttpCodeRequest {
        this['code'] = code;
        return this;
    }
    public withRegion(region: Array<string>): ListQueryHttpCodeRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ListQueryHttpCodeRequest {
        this['isp'] = isp;
        return this;
    }
    public withStartTime(startTime: string): ListQueryHttpCodeRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListQueryHttpCodeRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}