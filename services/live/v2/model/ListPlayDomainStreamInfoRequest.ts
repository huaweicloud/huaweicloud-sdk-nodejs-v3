

export class ListPlayDomainStreamInfoRequest {
    private 'play_domains'?: Array<string>;
    public time?: string;
    public constructor(time?: string) { 
        this['time'] = time;
    }
    public withPlayDomains(playDomains: Array<string>): ListPlayDomainStreamInfoRequest {
        this['play_domains'] = playDomains;
        return this;
    }
    public set playDomains(playDomains: Array<string>  | undefined) {
        this['play_domains'] = playDomains;
    }
    public get playDomains(): Array<string> | undefined {
        return this['play_domains'];
    }
    public withTime(time: string): ListPlayDomainStreamInfoRequest {
        this['time'] = time;
        return this;
    }
}