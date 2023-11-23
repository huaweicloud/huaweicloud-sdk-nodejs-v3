

export class MetaData {
    private 'pack_type'?: MetaDataPackTypeEnum | string;
    public codec?: MetaDataCodecEnum | string;
    public duration?: number;
    private 'duration_ms'?: number;
    private 'video_size'?: number;
    public width?: number;
    public hight?: number;
    private 'bit_rate'?: number;
    private 'frame_rate'?: number;
    public quality?: string;
    private 'audio_channels'?: number;
    public constructor() { 
    }
    public withPackType(packType: MetaDataPackTypeEnum | string): MetaData {
        this['pack_type'] = packType;
        return this;
    }
    public set packType(packType: MetaDataPackTypeEnum | string  | undefined) {
        this['pack_type'] = packType;
    }
    public get packType(): MetaDataPackTypeEnum | string | undefined {
        return this['pack_type'];
    }
    public withCodec(codec: MetaDataCodecEnum | string): MetaData {
        this['codec'] = codec;
        return this;
    }
    public withDuration(duration: number): MetaData {
        this['duration'] = duration;
        return this;
    }
    public withDurationMs(durationMs: number): MetaData {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: number  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): number | undefined {
        return this['duration_ms'];
    }
    public withVideoSize(videoSize: number): MetaData {
        this['video_size'] = videoSize;
        return this;
    }
    public set videoSize(videoSize: number  | undefined) {
        this['video_size'] = videoSize;
    }
    public get videoSize(): number | undefined {
        return this['video_size'];
    }
    public withWidth(width: number): MetaData {
        this['width'] = width;
        return this;
    }
    public withHight(hight: number): MetaData {
        this['hight'] = hight;
        return this;
    }
    public withBitRate(bitRate: number): MetaData {
        this['bit_rate'] = bitRate;
        return this;
    }
    public set bitRate(bitRate: number  | undefined) {
        this['bit_rate'] = bitRate;
    }
    public get bitRate(): number | undefined {
        return this['bit_rate'];
    }
    public withFrameRate(frameRate: number): MetaData {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
    public withQuality(quality: string): MetaData {
        this['quality'] = quality;
        return this;
    }
    public withAudioChannels(audioChannels: number): MetaData {
        this['audio_channels'] = audioChannels;
        return this;
    }
    public set audioChannels(audioChannels: number  | undefined) {
        this['audio_channels'] = audioChannels;
    }
    public get audioChannels(): number | undefined {
        return this['audio_channels'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetaDataPackTypeEnum {
    MP4 = 'MP4',
    TS = 'TS',
    MOV = 'MOV',
    MXF = 'MXF',
    MPG = 'MPG',
    FLV = 'FLV',
    WMV = 'WMV',
    MP3 = 'MP3',
    WMA = 'WMA',
    APE = 'APE',
    FLAC = 'FLAC',
    AAC = 'AAC',
    AC3 = 'AC3',
    MMF = 'MMF',
    AMR = 'AMR',
    M4A = 'M4A',
    M4R = 'M4R',
    OGG = 'OGG',
    WAV = 'WAV',
    WV = 'WV',
    MP2 = 'MP2',
    AVI = 'AVI',
    F4V = 'F4V',
    M4V = 'M4V',
    MPEG = 'MPEG',
    HLS = 'HLS',
    DASH = 'DASH'
}
/**
    * @export
    * @enum {string}
    */
export enum MetaDataCodecEnum {
    MPEG_2 = 'MPEG-2',
    MPEG_4 = 'MPEG-4',
    H_264 = 'H.264',
    H_265 = 'H.265',
    WMV = 'WMV',
    VORBIS = 'Vorbis',
    AAC = 'AAC',
    EAC_3 = 'EAC-3',
    AC_3 = 'AC-3',
    AMR = 'AMR',
    APE = 'APE',
    FLAC = 'FLAC',
    MP3 = 'MP3',
    MP2 = 'MP2',
    WMA = 'WMA',
    PCM = 'PCM',
    ADPCM = 'ADPCM',
    WAVPACK = 'WavPack',
    HEAAC = 'HEAAC',
    UNKNOWN = 'UNKNOWN'
}
