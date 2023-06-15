

export class ShowStreamPortraitRequest {
    private 'play_domain': string | undefined;
    public stream?: string;
    public time: string;
    public constructor(playDomain?: any, time?: any) { 
        this['play_domain'] = playDomain;
        this['time'] = time;
    }
    public withPlayDomain(playDomain: string): ShowStreamPortraitRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain() {
        return this['play_domain'];
    }
    public withStream(stream: string): ShowStreamPortraitRequest {
        this['stream'] = stream;
        return this;
    }
    public withTime(time: string): ShowStreamPortraitRequest {
        this['time'] = time;
        return this;
    }
}