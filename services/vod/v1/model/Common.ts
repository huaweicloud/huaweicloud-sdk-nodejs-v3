

export class Common {
    public pvc?: CommonPvcEnum | string;
    private 'pvc_version'?: string;
    private 'video_codec'?: CommonVideoCodecEnum | string;
    private 'audio_codec'?: CommonAudioCodecEnum | string;
    private 'hls_interval'?: number;
    public constructor(pvc?: string) { 
        this['pvc'] = pvc;
    }
    public withPvc(pvc: CommonPvcEnum | string): Common {
        this['pvc'] = pvc;
        return this;
    }
    public withPvcVersion(pvcVersion: string): Common {
        this['pvc_version'] = pvcVersion;
        return this;
    }
    public set pvcVersion(pvcVersion: string  | undefined) {
        this['pvc_version'] = pvcVersion;
    }
    public get pvcVersion(): string | undefined {
        return this['pvc_version'];
    }
    public withVideoCodec(videoCodec: CommonVideoCodecEnum | string): Common {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: CommonVideoCodecEnum | string  | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec(): CommonVideoCodecEnum | string | undefined {
        return this['video_codec'];
    }
    public withAudioCodec(audioCodec: CommonAudioCodecEnum | string): Common {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: CommonAudioCodecEnum | string  | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec(): CommonAudioCodecEnum | string | undefined {
        return this['audio_codec'];
    }
    public withHlsInterval(hlsInterval: number): Common {
        this['hls_interval'] = hlsInterval;
        return this;
    }
    public set hlsInterval(hlsInterval: number  | undefined) {
        this['hls_interval'] = hlsInterval;
    }
    public get hlsInterval(): number | undefined {
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
