

export class CommonInfo {
    public pvc: boolean;
    private 'video_codec'?: CommonInfoVideoCodecEnum | undefined;
    private 'audio_codec'?: CommonInfoAudioCodecEnum | undefined;
    private 'is_black_cut'?: boolean | undefined;
    public format?: CommonInfoFormatEnum;
    private 'hls_interval'?: number | undefined;
    public upsample?: boolean;
    public adaptation?: CommonInfoAdaptationEnum;
    public constructor(pvc?: any) { 
        this['pvc'] = pvc;
    }
    public withPvc(pvc: boolean): CommonInfo {
        this['pvc'] = pvc;
        return this;
    }
    public withVideoCodec(videoCodec: CommonInfoVideoCodecEnum): CommonInfo {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: CommonInfoVideoCodecEnum | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec() {
        return this['video_codec'];
    }
    public withAudioCodec(audioCodec: CommonInfoAudioCodecEnum): CommonInfo {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: CommonInfoAudioCodecEnum | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec() {
        return this['audio_codec'];
    }
    public withIsBlackCut(isBlackCut: boolean): CommonInfo {
        this['is_black_cut'] = isBlackCut;
        return this;
    }
    public set isBlackCut(isBlackCut: boolean | undefined) {
        this['is_black_cut'] = isBlackCut;
    }
    public get isBlackCut() {
        return this['is_black_cut'];
    }
    public withFormat(format: CommonInfoFormatEnum): CommonInfo {
        this['format'] = format;
        return this;
    }
    public withHlsInterval(hlsInterval: number): CommonInfo {
        this['hls_interval'] = hlsInterval;
        return this;
    }
    public set hlsInterval(hlsInterval: number | undefined) {
        this['hls_interval'] = hlsInterval;
    }
    public get hlsInterval() {
        return this['hls_interval'];
    }
    public withUpsample(upsample: boolean): CommonInfo {
        this['upsample'] = upsample;
        return this;
    }
    public withAdaptation(adaptation: CommonInfoAdaptationEnum): CommonInfo {
        this['adaptation'] = adaptation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommonInfoVideoCodecEnum {
    H264 = 'H264',
    H265 = 'H265'
}
/**
    * @export
    * @enum {string}
    */
export enum CommonInfoAudioCodecEnum {
    AAC = 'AAC',
    HEAAC1 = 'HEAAC1',
    HEAAC2 = 'HEAAC2',
    MP3 = 'MP3'
}
/**
    * @export
    * @enum {string}
    */
export enum CommonInfoFormatEnum {
    MP4 = 'MP4',
    HLS = 'HLS',
    DASH = 'DASH',
    DASH_HLS = 'DASH_HLS',
    MP3 = 'MP3',
    ADTS = 'ADTS',
    UNKNOW = 'UNKNOW'
}
/**
    * @export
    * @enum {string}
    */
export enum CommonInfoAdaptationEnum {
    SHORT = 'SHORT',
    LONG = 'LONG',
    NONE = 'NONE'
}
