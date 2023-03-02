

export class VideoSegmentInfo {
    private 'start_time': number | undefined;
    public duration: number;
    private 'to_gif'?: number | undefined;
    public speed?: number;
    private 'gif_compress'?: number | undefined;
    public constructor(startTime?: any, duration?: any) { 
        this['start_time'] = startTime;
        this['duration'] = duration;
    }
    public withStartTime(startTime: number): VideoSegmentInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withDuration(duration: number): VideoSegmentInfo {
        this['duration'] = duration;
        return this;
    }
    public withToGif(toGif: number): VideoSegmentInfo {
        this['to_gif'] = toGif;
        return this;
    }
    public set toGif(toGif: number | undefined) {
        this['to_gif'] = toGif;
    }
    public get toGif() {
        return this['to_gif'];
    }
    public withSpeed(speed: number): VideoSegmentInfo {
        this['speed'] = speed;
        return this;
    }
    public withGifCompress(gifCompress: number): VideoSegmentInfo {
        this['gif_compress'] = gifCompress;
        return this;
    }
    public set gifCompress(gifCompress: number | undefined) {
        this['gif_compress'] = gifCompress;
    }
    public get gifCompress() {
        return this['gif_compress'];
    }
}