

export class MetaVideoInfo {
    public bitrate?: number;
    public codec?: string;
    public fps?: number;
    public height?: number;
    public width?: number;
    public constructor() { 
    }
    public withBitrate(bitrate: number): MetaVideoInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withCodec(codec: string): MetaVideoInfo {
        this['codec'] = codec;
        return this;
    }
    public withFps(fps: number): MetaVideoInfo {
        this['fps'] = fps;
        return this;
    }
    public withHeight(height: number): MetaVideoInfo {
        this['height'] = height;
        return this;
    }
    public withWidth(width: number): MetaVideoInfo {
        this['width'] = width;
        return this;
    }
}