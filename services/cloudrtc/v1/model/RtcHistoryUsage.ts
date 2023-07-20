

export class RtcHistoryUsage {
    public date?: string;
    private 'video_sd'?: number;
    private 'video_hd'?: number;
    private 'video_hdp'?: number;
    public audio?: number;
    private 'total_duration'?: number;
    public constructor() { 
    }
    public withDate(date: string): RtcHistoryUsage {
        this['date'] = date;
        return this;
    }
    public withVideoSd(videoSd: number): RtcHistoryUsage {
        this['video_sd'] = videoSd;
        return this;
    }
    public set videoSd(videoSd: number  | undefined) {
        this['video_sd'] = videoSd;
    }
    public get videoSd(): number | undefined {
        return this['video_sd'];
    }
    public withVideoHd(videoHd: number): RtcHistoryUsage {
        this['video_hd'] = videoHd;
        return this;
    }
    public set videoHd(videoHd: number  | undefined) {
        this['video_hd'] = videoHd;
    }
    public get videoHd(): number | undefined {
        return this['video_hd'];
    }
    public withVideoHdp(videoHdp: number): RtcHistoryUsage {
        this['video_hdp'] = videoHdp;
        return this;
    }
    public set videoHdp(videoHdp: number  | undefined) {
        this['video_hdp'] = videoHdp;
    }
    public get videoHdp(): number | undefined {
        return this['video_hdp'];
    }
    public withAudio(audio: number): RtcHistoryUsage {
        this['audio'] = audio;
        return this;
    }
    public withTotalDuration(totalDuration: number): RtcHistoryUsage {
        this['total_duration'] = totalDuration;
        return this;
    }
    public set totalDuration(totalDuration: number  | undefined) {
        this['total_duration'] = totalDuration;
    }
    public get totalDuration(): number | undefined {
        return this['total_duration'];
    }
}