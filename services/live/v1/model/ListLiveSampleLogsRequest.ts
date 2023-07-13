

export class ListLiveSampleLogsRequest {
    private 'play_domain': string | undefined;
    private 'start_time': Date | undefined;
    private 'end_time': Date | undefined;
    public constructor(playDomain?: any, startTime?: any, endTime?: any) { 
        this['play_domain'] = playDomain;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withPlayDomain(playDomain: string): ListLiveSampleLogsRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain() {
        return this['play_domain'];
    }
    public withStartTime(startTime: Date): ListLiveSampleLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ListLiveSampleLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}