

export class RunModerationAudioRequestBodyConfig {
    public format: RunModerationAudioRequestBodyConfigFormatEnum;
    public property: RunModerationAudioRequestBodyConfigPropertyEnum;
    public constructor(format?: any, property?: any) { 
        this['format'] = format;
        this['property'] = property;
    }
    public withFormat(format: RunModerationAudioRequestBodyConfigFormatEnum): RunModerationAudioRequestBodyConfig {
        this['format'] = format;
        return this;
    }
    public withProperty(property: RunModerationAudioRequestBodyConfigPropertyEnum): RunModerationAudioRequestBodyConfig {
        this['property'] = property;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunModerationAudioRequestBodyConfigFormatEnum {
    PCM16K16BIT = 'pcm16k16bit',
    PCM8K16BIT = 'pcm8k16bit',
    ULAW16K8BIT = 'ulaw16k8bit',
    ULAW8K8BIT = 'ulaw8k8bit',
    ALAW16K8BIT = 'alaw16k8bit',
    ALAW8K8BIT = 'alaw8k8bit',
    MP3 = 'mp3',
    AAC = 'aac',
    WAV = 'wav',
    AMR = 'amr',
    AMRWB = 'amrwb'
}
/**
    * @export
    * @enum {string}
    */
export enum RunModerationAudioRequestBodyConfigPropertyEnum {
    CHINESE_8K_COMMON = 'chinese_8k_common',
    CHINESE_16K_COMMON = 'chinese_16k_common'
}
