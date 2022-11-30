

export class VideoTemplateInfo {
    public quality: VideoTemplateInfoQualityEnum;
    public width?: number;
    public height?: number;
    public bitrate?: number;
    private 'frame_rate'?: number | undefined;
    public constructor(quality?: any) { 
        this['quality'] = quality;
    }
    public withQuality(quality: VideoTemplateInfoQualityEnum): VideoTemplateInfo {
        this['quality'] = quality;
        return this;
    }
    public withWidth(width: number): VideoTemplateInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoTemplateInfo {
        this['height'] = height;
        return this;
    }
    public withBitrate(bitrate: number): VideoTemplateInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withFrameRate(frameRate: number): VideoTemplateInfo {
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
export enum VideoTemplateInfoQualityEnum {
    FULL_HD = 'FULL_HD',
    HD = 'HD',
    SD = 'SD',
    FLUENT = 'FLUENT',
    AD = 'AD',
    E_2K = '2K',
    E_4K = '4K',
    UNKNOW = 'UNKNOW'
}
