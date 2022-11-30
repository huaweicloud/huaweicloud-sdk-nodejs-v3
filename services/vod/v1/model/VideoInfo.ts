

export class VideoInfo {
    public quality: VideoInfoQualityEnum;
    public width?: number;
    public height?: number;
    public bitrate?: number;
    private 'frame_rate'?: number | undefined;
    public constructor(quality?: any) { 
        this['quality'] = quality;
    }
    public withQuality(quality: VideoInfoQualityEnum): VideoInfo {
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
    public set frameRate(frameRate: number | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate() {
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
