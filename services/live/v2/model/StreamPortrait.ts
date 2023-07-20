

export class StreamPortrait {
    public time?: string;
    public flow?: number;
    private 'play_duration'?: number;
    private 'request_count'?: number;
    private 'user_count'?: number;
    private 'peak_user_count'?: number;
    private 'peak_bandwidth'?: number;
    private 'push_duration'?: number;
    public constructor() { 
    }
    public withTime(time: string): StreamPortrait {
        this['time'] = time;
        return this;
    }
    public withFlow(flow: number): StreamPortrait {
        this['flow'] = flow;
        return this;
    }
    public withPlayDuration(playDuration: number): StreamPortrait {
        this['play_duration'] = playDuration;
        return this;
    }
    public set playDuration(playDuration: number  | undefined) {
        this['play_duration'] = playDuration;
    }
    public get playDuration(): number | undefined {
        return this['play_duration'];
    }
    public withRequestCount(requestCount: number): StreamPortrait {
        this['request_count'] = requestCount;
        return this;
    }
    public set requestCount(requestCount: number  | undefined) {
        this['request_count'] = requestCount;
    }
    public get requestCount(): number | undefined {
        return this['request_count'];
    }
    public withUserCount(userCount: number): StreamPortrait {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number  | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount(): number | undefined {
        return this['user_count'];
    }
    public withPeakUserCount(peakUserCount: number): StreamPortrait {
        this['peak_user_count'] = peakUserCount;
        return this;
    }
    public set peakUserCount(peakUserCount: number  | undefined) {
        this['peak_user_count'] = peakUserCount;
    }
    public get peakUserCount(): number | undefined {
        return this['peak_user_count'];
    }
    public withPeakBandwidth(peakBandwidth: number): StreamPortrait {
        this['peak_bandwidth'] = peakBandwidth;
        return this;
    }
    public set peakBandwidth(peakBandwidth: number  | undefined) {
        this['peak_bandwidth'] = peakBandwidth;
    }
    public get peakBandwidth(): number | undefined {
        return this['peak_bandwidth'];
    }
    public withPushDuration(pushDuration: number): StreamPortrait {
        this['push_duration'] = pushDuration;
        return this;
    }
    public set pushDuration(pushDuration: number  | undefined) {
        this['push_duration'] = pushDuration;
    }
    public get pushDuration(): number | undefined {
        return this['push_duration'];
    }
}