

export class ListLiveSampleLogsRequest {
    private 'play_domain'?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public constructor(playDomain?: string, startTime?: Date, endTime?: Date) { 
        this['play_domain'] = playDomain;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withPlayDomain(playDomain: string): ListLiveSampleLogsRequest {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withStartTime(startTime: Date): ListLiveSampleLogsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ListLiveSampleLogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
}