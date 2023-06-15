

export class StreamPortrait {
    public time?: string;
    public flow?: number;
    private 'play_duration'?: number | undefined;
    private 'request_count'?: number | undefined;
    private 'user_count'?: number | undefined;
    private 'peak_user_count'?: number | undefined;
    private 'peak_bandwidth'?: number | undefined;
    private 'push_duration'?: number | undefined;
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
    public set playDuration(playDuration: number | undefined) {
        this['play_duration'] = playDuration;
    }
    public get playDuration() {
        return this['play_duration'];
    }
    public withRequestCount(requestCount: number): StreamPortrait {
        this['request_count'] = requestCount;
        return this;
    }
    public set requestCount(requestCount: number | undefined) {
        this['request_count'] = requestCount;
    }
    public get requestCount() {
        return this['request_count'];
    }
    public withUserCount(userCount: number): StreamPortrait {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount() {
        return this['user_count'];
    }
    public withPeakUserCount(peakUserCount: number): StreamPortrait {
        this['peak_user_count'] = peakUserCount;
        return this;
    }
    public set peakUserCount(peakUserCount: number | undefined) {
        this['peak_user_count'] = peakUserCount;
    }
    public get peakUserCount() {
        return this['peak_user_count'];
    }
    public withPeakBandwidth(peakBandwidth: number): StreamPortrait {
        this['peak_bandwidth'] = peakBandwidth;
        return this;
    }
    public set peakBandwidth(peakBandwidth: number | undefined) {
        this['peak_bandwidth'] = peakBandwidth;
    }
    public get peakBandwidth() {
        return this['peak_bandwidth'];
    }
    public withPushDuration(pushDuration: number): StreamPortrait {
        this['push_duration'] = pushDuration;
        return this;
    }
    public set pushDuration(pushDuration: number | undefined) {
        this['push_duration'] = pushDuration;
    }
    public get pushDuration() {
        return this['push_duration'];
    }
}