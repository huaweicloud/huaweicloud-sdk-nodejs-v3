

export class VideoSynthesisInfo {
    private 'bgm_url'?: string | undefined;
    public resolution?: Array<number>;
    public fps?: number;
    private 'animation_duration'?: number | undefined;
    public constructor() { 
    }
    public withBgmUrl(bgmUrl: string): VideoSynthesisInfo {
        this['bgm_url'] = bgmUrl;
        return this;
    }
    public set bgmUrl(bgmUrl: string | undefined) {
        this['bgm_url'] = bgmUrl;
    }
    public get bgmUrl() {
        return this['bgm_url'];
    }
    public withResolution(resolution: Array<number>): VideoSynthesisInfo {
        this['resolution'] = resolution;
        return this;
    }
    public withFps(fps: number): VideoSynthesisInfo {
        this['fps'] = fps;
        return this;
    }
    public withAnimationDuration(animationDuration: number): VideoSynthesisInfo {
        this['animation_duration'] = animationDuration;
        return this;
    }
    public set animationDuration(animationDuration: number | undefined) {
        this['animation_duration'] = animationDuration;
    }
    public get animationDuration() {
        return this['animation_duration'];
    }
}