

export class AudioInfo {
    private 'sample_rate': AudioInfoSampleRateEnum | undefined;
    public bitrate?: number;
    public channels: AudioInfoChannelsEnum;
    public constructor(sampleRate?: any, channels?: any) { 
        this['sample_rate'] = sampleRate;
        this['channels'] = channels;
    }
    public withSampleRate(sampleRate: AudioInfoSampleRateEnum): AudioInfo {
        this['sample_rate'] = sampleRate;
        return this;
    }
    public set sampleRate(sampleRate: AudioInfoSampleRateEnum | undefined) {
        this['sample_rate'] = sampleRate;
    }
    public get sampleRate() {
        return this['sample_rate'];
    }
    public withBitrate(bitrate: number): AudioInfo {
        this['bitrate'] = bitrate;
        return this;
    }
    public withChannels(channels: AudioInfoChannelsEnum): AudioInfo {
        this['channels'] = channels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioInfoSampleRateEnum {
    AUDIO_SAMPLE_AUTO = 'AUDIO_SAMPLE_AUTO',
    AUDIO_SAMPLE_22050 = 'AUDIO_SAMPLE_22050',
    AUDIO_SAMPLE_32000 = 'AUDIO_SAMPLE_32000',
    AUDIO_SAMPLE_44100 = 'AUDIO_SAMPLE_44100',
    AUDIO_SAMPLE_48000 = 'AUDIO_SAMPLE_48000',
    AUDIO_SAMPLE_96000 = 'AUDIO_SAMPLE_96000'
}
/**
    * @export
    * @enum {string}
    */
export enum AudioInfoChannelsEnum {
    AUDIO_CHANNELS_1 = 'AUDIO_CHANNELS_1',
    AUDIO_CHANNELS_2 = 'AUDIO_CHANNELS_2',
    AUDIO_CHANNELS_5_1 = 'AUDIO_CHANNELS_5_1'
}
