

export class UpStreamDetail {
    public time?: string;
    public fps?: number;
    public rate?: number;
    public delay?: number;
    private 'gop_duration'?: number;
    private 'last_video_pts'?: number;
    private 'last_audio_pts'?: number;
    private 'last_video_audio_pts_diff'?: number;
    public constructor() { 
    }
    public withTime(time: string): UpStreamDetail {
        this['time'] = time;
        return this;
    }
    public withFps(fps: number): UpStreamDetail {
        this['fps'] = fps;
        return this;
    }
    public withRate(rate: number): UpStreamDetail {
        this['rate'] = rate;
        return this;
    }
    public withDelay(delay: number): UpStreamDetail {
        this['delay'] = delay;
        return this;
    }
    public withGopDuration(gopDuration: number): UpStreamDetail {
        this['gop_duration'] = gopDuration;
        return this;
    }
    public set gopDuration(gopDuration: number  | undefined) {
        this['gop_duration'] = gopDuration;
    }
    public get gopDuration(): number | undefined {
        return this['gop_duration'];
    }
    public withLastVideoPts(lastVideoPts: number): UpStreamDetail {
        this['last_video_pts'] = lastVideoPts;
        return this;
    }
    public set lastVideoPts(lastVideoPts: number  | undefined) {
        this['last_video_pts'] = lastVideoPts;
    }
    public get lastVideoPts(): number | undefined {
        return this['last_video_pts'];
    }
    public withLastAudioPts(lastAudioPts: number): UpStreamDetail {
        this['last_audio_pts'] = lastAudioPts;
        return this;
    }
    public set lastAudioPts(lastAudioPts: number  | undefined) {
        this['last_audio_pts'] = lastAudioPts;
    }
    public get lastAudioPts(): number | undefined {
        return this['last_audio_pts'];
    }
    public withLastVideoAudioPtsDiff(lastVideoAudioPtsDiff: number): UpStreamDetail {
        this['last_video_audio_pts_diff'] = lastVideoAudioPtsDiff;
        return this;
    }
    public set lastVideoAudioPtsDiff(lastVideoAudioPtsDiff: number  | undefined) {
        this['last_video_audio_pts_diff'] = lastVideoAudioPtsDiff;
    }
    public get lastVideoAudioPtsDiff(): number | undefined {
        return this['last_video_audio_pts_diff'];
    }
}