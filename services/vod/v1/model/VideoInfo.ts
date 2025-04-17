

export class VideoInfo {
    private 'stream_name'?: string;
    public quality?: VideoInfoQualityEnum | string;
    public width?: number;
    public height?: number;
    public bitrate?: number;
    private 'frame_rate'?: number;
    public constructor(quality?: string, bitrate?: number, frameRate?: number) { 
        this['quality'] = quality;
        this['bitrate'] = bitrate;
        this['frame_rate'] = frameRate;
    }
    public withStreamName(streamName: string): VideoInfo {
        this['stream_name'] = streamName;
        return this;
    }
    public set streamName(streamName: string  | undefined) {
        this['stream_name'] = streamName;
    }
    public get streamName(): string | undefined {
        return this['stream_name'];
    }
    public withQuality(quality: VideoInfoQualityEnum | string): VideoInfo {
        this['quality'] = quality;
        return this;
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
}

/**
    * @export
    * @enum {string}
    */
export enum VideoInfoQualityEnum {
    FULL_HD = 'FULL_HD',
    HD = 'HD',
    SD = 'SD',
    FLUENT = 'FLUENT',
    E_2K = '2K',
    E_4K = '4K',
    UNKNOW = 'UNKNOW'
}
