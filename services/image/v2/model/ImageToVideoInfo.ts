

export class ImageToVideoInfo {
    private 'bgm_url'?: string | undefined;
    private 'to_gif'?: number | undefined;
    private 'gif_compress'?: number | undefined;
    private 'image_durations'?: Array<number> | undefined;
    public resolution?: Array<number>;
    public fps?: number;
    private 'animation_duration'?: number | undefined;
    public constructor() { 
    }
    public withBgmUrl(bgmUrl: string): ImageToVideoInfo {
        this['bgm_url'] = bgmUrl;
        return this;
    }
    public set bgmUrl(bgmUrl: string | undefined) {
        this['bgm_url'] = bgmUrl;
    }
    public get bgmUrl() {
        return this['bgm_url'];
    }
    public withToGif(toGif: number): ImageToVideoInfo {
        this['to_gif'] = toGif;
        return this;
    }
    public set toGif(toGif: number | undefined) {
        this['to_gif'] = toGif;
    }
    public get toGif() {
        return this['to_gif'];
    }
    public withGifCompress(gifCompress: number): ImageToVideoInfo {
        this['gif_compress'] = gifCompress;
        return this;
    }
    public set gifCompress(gifCompress: number | undefined) {
        this['gif_compress'] = gifCompress;
    }
    public get gifCompress() {
        return this['gif_compress'];
    }
    public withImageDurations(imageDurations: Array<number>): ImageToVideoInfo {
        this['image_durations'] = imageDurations;
        return this;
    }
    public set imageDurations(imageDurations: Array<number> | undefined) {
        this['image_durations'] = imageDurations;
    }
    public get imageDurations() {
        return this['image_durations'];
    }
    public withResolution(resolution: Array<number>): ImageToVideoInfo {
        this['resolution'] = resolution;
        return this;
    }
    public withFps(fps: number): ImageToVideoInfo {
        this['fps'] = fps;
        return this;
    }
    public withAnimationDuration(animationDuration: number): ImageToVideoInfo {
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