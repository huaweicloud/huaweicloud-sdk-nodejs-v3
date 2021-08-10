

export class MetaData {
    public codec?: MetaDataCodecEnum;
    public duration?: number;
    private 'video_size'?: number | undefined;
    public width?: number;
    public hight?: number;
    private 'bit_rate'?: number | undefined;
    private 'frame_rate'?: number | undefined;
    public quality?: string;
    private 'audio_channels'?: number | undefined;
    public constructor() { 
    }
    public withCodec(codec: MetaDataCodecEnum): MetaData {
        this['codec'] = codec;
        return this;
    }
    public withDuration(duration: number): MetaData {
        this['duration'] = duration;
        return this;
    }
    public withVideoSize(videoSize: number): MetaData {
        this['video_size'] = videoSize;
        return this;
    }
    public set videoSize(videoSize: number | undefined) {
        this['video_size'] = videoSize;
    }
    public get videoSize() {
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
    public set bitRate(bitRate: number | undefined) {
        this['bit_rate'] = bitRate;
    }
    public get bitRate() {
        return this['bit_rate'];
    }
    public withFrameRate(frameRate: number): MetaData {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate() {
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
    public set audioChannels(audioChannels: number | undefined) {
        this['audio_channels'] = audioChannels;
    }
    public get audioChannels() {
        return this['audio_channels'];
    }
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
