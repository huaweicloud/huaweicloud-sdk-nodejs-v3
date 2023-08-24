

export class TtsConfig {
    private 'audio_format'?: TtsConfigAudioFormatEnum | string;
    private 'sample_rate'?: TtsConfigSampleRateEnum | string;
    public property?: TtsConfigPropertyEnum | string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public constructor() { 
    }
    public withAudioFormat(audioFormat: TtsConfigAudioFormatEnum | string): TtsConfig {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: TtsConfigAudioFormatEnum | string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): TtsConfigAudioFormatEnum | string | undefined {
        return this['audio_format'];
    }
    public withSampleRate(sampleRate: TtsConfigSampleRateEnum | string): TtsConfig {
        this['sample_rate'] = sampleRate;
        return this;
    }
    public set sampleRate(sampleRate: TtsConfigSampleRateEnum | string  | undefined) {
        this['sample_rate'] = sampleRate;
    }
    public get sampleRate(): TtsConfigSampleRateEnum | string | undefined {
        return this['sample_rate'];
    }
    public withProperty(property: TtsConfigPropertyEnum | string): TtsConfig {
        this['property'] = property;
        return this;
    }
    public withSpeed(speed: number): TtsConfig {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): TtsConfig {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): TtsConfig {
        this['volume'] = volume;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TtsConfigAudioFormatEnum {
    WAV = 'wav',
    MP3 = 'mp3',
    PCM = 'pcm'
}
/**
    * @export
    * @enum {string}
    */
export enum TtsConfigSampleRateEnum {
    E_16000 = '16000',
    E_8000 = '8000'
}
/**
    * @export
    * @enum {string}
    */
export enum TtsConfigPropertyEnum {
    CHINESE_XIAOQI_COMMON = 'chinese_xiaoqi_common',
    CHINESE_XIAOYU_COMMON = 'chinese_xiaoyu_common',
    CHINESE_XIAOYAN_COMMON = 'chinese_xiaoyan_common',
    CHINESE_XIAOXIA_COMMON = 'chinese_xiaoxia_common',
    CHINESE_XIAODAI_COMMON = 'chinese_xiaodai_common',
    CHINESE_XIAOQIAN_COMMON = 'chinese_xiaoqian_common',
    CHINESE_XIAOWANG_COMMON = 'chinese_xiaowang_common',
    CHINESE_XIAOWEN_COMMON = 'chinese_xiaowen_common',
    CHINESE_XIAOJING_COMMON = 'chinese_xiaojing_common',
    CHINESE_XIAOSONG_COMMON = 'chinese_xiaosong_common',
    ENGLISH_CAMEAL_COMMON = 'english_cameal_common',
    CHINESE_HUAXIAOXIA_COMMON = 'chinese_huaxiaoxia_common',
    CHINESE_HUAXIAOGANG_COMMON = 'chinese_huaxiaogang_common',
    CHINESE_HUAXIAOLU_COMMON = 'chinese_huaxiaolu_common',
    CHINESE_HUAXIAOSHU_COMMON = 'chinese_huaxiaoshu_common',
    CHINESE_HUAXIAOWEI_COMMON = 'chinese_huaxiaowei_common',
    CHINESE_HUAXIAOLIANG_COMMON = 'chinese_huaxiaoliang_common',
    CHINESE_HUAXIAODONG_COMMON = 'chinese_huaxiaodong_common',
    CHINESE_HUAXIAOYAN_COMMON = 'chinese_huaxiaoyan_common',
    CHINESE_HUAXIAOXUAN_COMMON = 'chinese_huaxiaoxuan_common',
    CHINESE_HUAXIAOWEN_COMMON = 'chinese_huaxiaowen_common',
    CHINESE_HUAXIAOYANG_COMMON = 'chinese_huaxiaoyang_common',
    CHINESE_HUAXIAOMIN_COMMON = 'chinese_huaxiaomin_common',
    CHINESE_HUANVXIA_LITERATURE = 'chinese_huanvxia_literature',
    CHINESE_HUAXIAOXUAN_LITERATURE = 'chinese_huaxiaoxuan_literature',
    CHINESE_HUAXIAOMEI_COMMON = 'chinese_huaxiaomei_common',
    CHINESE_HUAXIAOFEI_COMMON = 'chinese_huaxiaofei_common',
    CHINESE_HUAXIAOLONG_COMMON = 'chinese_huaxiaolong_common',
    CHINESE_HUAXIAORUI_COMMON = 'chinese_huaxiaorui_common',
    CHINESE_HUAXIAORU_COMMON = 'chinese_huaxiaoru_common',
    CHINESE_HUAXIAOHAN_COMMON = 'chinese_huaxiaohan_common',
    CHINESE_HUAXIAONING_COMMON = 'chinese_huaxiaoning_common',
    CHINESE_HUAXIAOZHEN_COMMON = 'chinese_huaxiaozhen_common',
    CHINESE_HUAXIAOMAN_COMMON = 'chinese_huaxiaoman_common',
    CHINESE_HUAXIAOFANG_COMMON = 'chinese_huaxiaofang_common',
    CHINESE_HUAXIAOJUN_COMMON = 'chinese_huaxiaojun_common',
    ENGLISH_ALVIN_COMMON = 'english_alvin_common',
    ENGLISH_AMY_COMMON = 'english_amy_common'
}
