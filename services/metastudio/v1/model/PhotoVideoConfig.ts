

export class PhotoVideoConfig {
    public codec?: PhotoVideoConfigCodecEnum | string;
    public bitrate?: number;
    private 'frame_rate'?: PhotoVideoConfigFrameRateEnum | string;
    public constructor(codec?: string) { 
        this['codec'] = codec;
    }
    public withCodec(codec: PhotoVideoConfigCodecEnum | string): PhotoVideoConfig {
        this['codec'] = codec;
        return this;
    }
    public withBitrate(bitrate: number): PhotoVideoConfig {
        this['bitrate'] = bitrate;
        return this;
    }
    public withFrameRate(frameRate: PhotoVideoConfigFrameRateEnum | string): PhotoVideoConfig {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: PhotoVideoConfigFrameRateEnum | string  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): PhotoVideoConfigFrameRateEnum | string | undefined {
        return this['frame_rate'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PhotoVideoConfigCodecEnum {
    H264 = 'H264'
}
/**
    * @export
    * @enum {string}
    */
export enum PhotoVideoConfigFrameRateEnum {
    E_24 = '24',
    E_25 = '25',
    E_30 = '30'
}
