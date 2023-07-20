

export class VideoObj {
    public width?: number;
    public height?: number;
    public bitrate?: number;
    public constructor(width?: number, height?: number, bitrate?: number) { 
        this['width'] = width;
        this['height'] = height;
        this['bitrate'] = bitrate;
    }
    public withWidth(width: number): VideoObj {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoObj {
        this['height'] = height;
        return this;
    }
    public withBitrate(bitrate: number): VideoObj {
        this['bitrate'] = bitrate;
        return this;
    }
}