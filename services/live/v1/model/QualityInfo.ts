

export class QualityInfo {
    public templateName?: string;
    public quality?: string;
    private 'PVC'?: QualityInfoPvcEnum | string;
    public hdlb?: QualityInfoHdlbEnum | string;
    public codec?: QualityInfoCodecEnum | string;
    public width?: number;
    public height?: number;
    public bitrate?: number;
    private 'video_frame_rate'?: number;
    public protocol?: QualityInfoProtocolEnum | string;
    public iFrameInterval?: number;
    public gop?: number;
    public constructor(quality?: string, bitrate?: number) { 
        this['quality'] = quality;
        this['bitrate'] = bitrate;
    }
    public withTemplateName(templateName: string): QualityInfo {
        this['templateName'] = templateName;
        return this;
    }
    public withQuality(quality: string): QualityInfo {
        this['quality'] = quality;
        return this;
    }
    public withPvc(pvc: QualityInfoPvcEnum | string): QualityInfo {
        this['PVC'] = pvc;
        return this;
    }
    public set pvc(pvc: QualityInfoPvcEnum | string  | undefined) {
        this['PVC'] = pvc;
    }
    public get pvc(): QualityInfoPvcEnum | string | undefined {
        return this['PVC'];
    }
    public withHdlb(hdlb: QualityInfoHdlbEnum | string): QualityInfo {
        this['hdlb'] = hdlb;
        return this;
    }
    public withCodec(codec: QualityInfoCodecEnum | string): QualityInfo {
        this['codec'] = codec;
        return this;
    }
    public withWidth(width: number): QualityInfo {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): QualityInfo {
        this['height'] = height;
        return this;
    }
    public withBitrate(bitrate: number): QualityInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withVideoFrameRate(videoFrameRate: number): QualityInfo {
        this['video_frame_rate'] = videoFrameRate;
        return this;
    }
    public set videoFrameRate(videoFrameRate: number  | undefined) {
        this['video_frame_rate'] = videoFrameRate;
    }
    public get videoFrameRate(): number | undefined {
        return this['video_frame_rate'];
    }
    public withProtocol(protocol: QualityInfoProtocolEnum | string): QualityInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withIFrameInterval(iFrameInterval: number): QualityInfo {
        this['iFrameInterval'] = iFrameInterval;
        return this;
    }
    public withGop(gop: number): QualityInfo {
        this['gop'] = gop;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QualityInfoPvcEnum {
    ON = 'on',
    OFF = 'off'
}
/**
    * @export
    * @enum {string}
    */
export enum QualityInfoHdlbEnum {
    ON = 'on',
    OFF = 'off'
}
/**
    * @export
    * @enum {string}
    */
export enum QualityInfoCodecEnum {
    H264 = 'H264',
    H265 = 'H265'
}
/**
    * @export
    * @enum {string}
    */
export enum QualityInfoProtocolEnum {
    RTMP = 'RTMP',
    HLS = 'HLS',
    DASH = 'DASH'
}
