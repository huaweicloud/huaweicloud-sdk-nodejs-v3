

export class Common {
    public pvc: CommonPvcEnum;
    private 'pvc_version'?: string | undefined;
    private 'video_codec'?: CommonVideoCodecEnum | undefined;
    private 'audio_codec'?: CommonAudioCodecEnum | undefined;
    private 'hls_interval'?: number | undefined;
    public constructor(pvc?: any) { 
        this['pvc'] = pvc;
    }
    public withPvc(pvc: CommonPvcEnum): Common {
        this['pvc'] = pvc;
        return this;
    }
    public withPvcVersion(pvcVersion: string): Common {
        this['pvc_version'] = pvcVersion;
        return this;
    }
    public set pvcVersion(pvcVersion: string | undefined) {
        this['pvc_version'] = pvcVersion;
    }
    public get pvcVersion() {
        return this['pvc_version'];
    }
    public withVideoCodec(videoCodec: CommonVideoCodecEnum): Common {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: CommonVideoCodecEnum | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec() {
        return this['video_codec'];
    }
    public withAudioCodec(audioCodec: CommonAudioCodecEnum): Common {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: CommonAudioCodecEnum | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec() {
        return this['audio_codec'];
    }
    public withHlsInterval(hlsInterval: number): Common {
        this['hls_interval'] = hlsInterval;
        return this;
    }
    public set hlsInterval(hlsInterval: number | undefined) {
        this['hls_interval'] = hlsInterval;
    }
    public get hlsInterval() {
        return this['hls_interval'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommonPvcEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2',
    UNKNOW = 'UNKNOW'
}
/**
    * @export
    * @enum {string}
    */
export enum CommonVideoCodecEnum {
    H264 = 'H264',
    H265 = 'H265',
    UNKNOW = 'UNKNOW'
}
/**
    * @export
    * @enum {string}
    */
export enum CommonAudioCodecEnum {
    AAC = 'AAC',
    HEAAC1 = 'HEAAC1',
    HEAAC2 = 'HEAAC2',
    MP3 = 'MP3'
}
