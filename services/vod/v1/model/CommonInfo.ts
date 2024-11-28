

export class CommonInfo {
    public pvc?: boolean;
    private 'video_codec'?: CommonInfoVideoCodecEnum | string;
    private 'audio_codec'?: CommonInfoAudioCodecEnum | string;
    private 'is_black_cut'?: boolean;
    public format?: CommonInfoFormatEnum | string;
    private 'hls_interval'?: number;
    public upsample?: boolean;
    public adaptation?: CommonInfoAdaptationEnum | string;
    public preset?: number;
    private 'max_iframes_interval'?: number;
    private 'hls_audio_separate'?: boolean;
    private 'hls_segment_type'?: CommonInfoHlsSegmentTypeEnum | string;
    public constructor(format?: string) { 
        this['format'] = format;
    }
    public withPvc(pvc: boolean): CommonInfo {
        this['pvc'] = pvc;
        return this;
    }
    public withVideoCodec(videoCodec: CommonInfoVideoCodecEnum | string): CommonInfo {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: CommonInfoVideoCodecEnum | string  | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec(): CommonInfoVideoCodecEnum | string | undefined {
        return this['video_codec'];
    }
    public withAudioCodec(audioCodec: CommonInfoAudioCodecEnum | string): CommonInfo {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: CommonInfoAudioCodecEnum | string  | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec(): CommonInfoAudioCodecEnum | string | undefined {
        return this['audio_codec'];
    }
    public withIsBlackCut(isBlackCut: boolean): CommonInfo {
        this['is_black_cut'] = isBlackCut;
        return this;
    }
    public set isBlackCut(isBlackCut: boolean  | undefined) {
        this['is_black_cut'] = isBlackCut;
    }
    public get isBlackCut(): boolean | undefined {
        return this['is_black_cut'];
    }
    public withFormat(format: CommonInfoFormatEnum | string): CommonInfo {
        this['format'] = format;
        return this;
    }
    public withHlsInterval(hlsInterval: number): CommonInfo {
        this['hls_interval'] = hlsInterval;
        return this;
    }
    public set hlsInterval(hlsInterval: number  | undefined) {
        this['hls_interval'] = hlsInterval;
    }
    public get hlsInterval(): number | undefined {
        return this['hls_interval'];
    }
    public withUpsample(upsample: boolean): CommonInfo {
        this['upsample'] = upsample;
        return this;
    }
    public withAdaptation(adaptation: CommonInfoAdaptationEnum | string): CommonInfo {
        this['adaptation'] = adaptation;
        return this;
    }
    public withPreset(preset: number): CommonInfo {
        this['preset'] = preset;
        return this;
    }
    public withMaxIframesInterval(maxIframesInterval: number): CommonInfo {
        this['max_iframes_interval'] = maxIframesInterval;
        return this;
    }
    public set maxIframesInterval(maxIframesInterval: number  | undefined) {
        this['max_iframes_interval'] = maxIframesInterval;
    }
    public get maxIframesInterval(): number | undefined {
        return this['max_iframes_interval'];
    }
    public withHlsAudioSeparate(hlsAudioSeparate: boolean): CommonInfo {
        this['hls_audio_separate'] = hlsAudioSeparate;
        return this;
    }
    public set hlsAudioSeparate(hlsAudioSeparate: boolean  | undefined) {
        this['hls_audio_separate'] = hlsAudioSeparate;
    }
    public get hlsAudioSeparate(): boolean | undefined {
        return this['hls_audio_separate'];
    }
    public withHlsSegmentType(hlsSegmentType: CommonInfoHlsSegmentTypeEnum | string): CommonInfo {
        this['hls_segment_type'] = hlsSegmentType;
        return this;
    }
    public set hlsSegmentType(hlsSegmentType: CommonInfoHlsSegmentTypeEnum | string  | undefined) {
        this['hls_segment_type'] = hlsSegmentType;
    }
    public get hlsSegmentType(): CommonInfoHlsSegmentTypeEnum | string | undefined {
        return this['hls_segment_type'];
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
/**
    * @export
    * @enum {string}
    */
export enum CommonInfoHlsSegmentTypeEnum {
    TS = 'TS',
    FMP4 = 'FMP4'
}
