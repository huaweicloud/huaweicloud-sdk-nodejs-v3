

export class EditVideoInfo {
    public reference?: EditVideoInfoReferenceEnum | string;
    public width?: number;
    public height?: number;
    public codec?: EditVideoInfoCodecEnum | string;
    public bitrate?: number;
    private 'frame_rate'?: number;
    public constructor() { 
    }
    public withReference(reference: EditVideoInfoReferenceEnum | string): EditVideoInfo {
        this['reference'] = reference;
        return this;
    }
    public withWidth(width: number): EditVideoInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): EditVideoInfo {
        this['height'] = height;
        return this;
    }
    public withCodec(codec: EditVideoInfoCodecEnum | string): EditVideoInfo {
        this['codec'] = codec;
        return this;
    }
    public withBitrate(bitrate: number): EditVideoInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withFrameRate(frameRate: number): EditVideoInfo {
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
export enum EditVideoInfoReferenceEnum {
    MAX = 'MAX',
    MIN = 'MIN',
    CUSTOM = 'CUSTOM',
    SHORT_HEIGHT_SHORT_WIDTH = 'SHORT_HEIGHT_SHORT_WIDTH'
}
/**
    * @export
    * @enum {string}
    */
export enum EditVideoInfoCodecEnum {
    H264 = 'H264',
    H265 = 'H265'
}
