

export class VideoInfo {
    public width?: number;
    public height?: number;
    public bitrate?: number;
    private 'bitrate_bps'?: number;
    private 'frame_rate'?: number;
    public codec?: string;
    public constructor() { 
    }
    public withWidth(width: number): VideoInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoInfo {
        this['height'] = height;
        return this;
    }
    public withBitrate(bitrate: number): VideoInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withBitrateBps(bitrateBps: number): VideoInfo {
        this['bitrate_bps'] = bitrateBps;
        return this;
    }
    public set bitrateBps(bitrateBps: number  | undefined) {
        this['bitrate_bps'] = bitrateBps;
    }
    public get bitrateBps(): number | undefined {
        return this['bitrate_bps'];
    }
    public withFrameRate(frameRate: number): VideoInfo {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
    public withCodec(codec: string): VideoInfo {
        this['codec'] = codec;
        return this;
    }
}