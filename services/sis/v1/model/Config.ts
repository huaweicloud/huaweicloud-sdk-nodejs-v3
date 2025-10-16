

export class Config {
    private 'audio_format'?: ConfigAudioFormatEnum | string;
    public property?: ConfigPropertyEnum | string;
    private 'add_punc'?: ConfigAddPuncEnum | string;
    private 'vocabulary_id'?: string;
    private 'digit_norm'?: ConfigDigitNormEnum | string;
    private 'need_word_info'?: ConfigNeedWordInfoEnum | string;
    private 'auto_language_detect'?: ConfigAutoLanguageDetectEnum | string;
    public constructor(audioFormat?: string, property?: string) { 
        this['audio_format'] = audioFormat;
        this['property'] = property;
    }
    public withAudioFormat(audioFormat: ConfigAudioFormatEnum | string): Config {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: ConfigAudioFormatEnum | string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): ConfigAudioFormatEnum | string | undefined {
        return this['audio_format'];
    }
    public withProperty(property: ConfigPropertyEnum | string): Config {
        this['property'] = property;
        return this;
    }
    public withAddPunc(addPunc: ConfigAddPuncEnum | string): Config {
        this['add_punc'] = addPunc;
        return this;
    }
    public set addPunc(addPunc: ConfigAddPuncEnum | string  | undefined) {
        this['add_punc'] = addPunc;
    }
    public get addPunc(): ConfigAddPuncEnum | string | undefined {
        return this['add_punc'];
    }
    public withVocabularyId(vocabularyId: string): Config {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withDigitNorm(digitNorm: ConfigDigitNormEnum | string): Config {
        this['digit_norm'] = digitNorm;
        return this;
    }
    public set digitNorm(digitNorm: ConfigDigitNormEnum | string  | undefined) {
        this['digit_norm'] = digitNorm;
    }
    public get digitNorm(): ConfigDigitNormEnum | string | undefined {
        return this['digit_norm'];
    }
    public withNeedWordInfo(needWordInfo: ConfigNeedWordInfoEnum | string): Config {
        this['need_word_info'] = needWordInfo;
        return this;
    }
    public set needWordInfo(needWordInfo: ConfigNeedWordInfoEnum | string  | undefined) {
        this['need_word_info'] = needWordInfo;
    }
    public get needWordInfo(): ConfigNeedWordInfoEnum | string | undefined {
        return this['need_word_info'];
    }
    public withAutoLanguageDetect(autoLanguageDetect: ConfigAutoLanguageDetectEnum | string): Config {
        this['auto_language_detect'] = autoLanguageDetect;
        return this;
    }
    public set autoLanguageDetect(autoLanguageDetect: ConfigAutoLanguageDetectEnum | string  | undefined) {
        this['auto_language_detect'] = autoLanguageDetect;
    }
    public get autoLanguageDetect(): ConfigAutoLanguageDetectEnum | string | undefined {
        return this['auto_language_detect'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigAudioFormatEnum {
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
    AMRWB = 'amrwb',
    AUTO = 'auto'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigPropertyEnum {
    CHINESE_16K_GENERAL = 'chinese_16k_general',
    CHINESE_16K_TRAVEL = 'chinese_16k_travel',
    CHINESE_8K_COMMON = 'chinese_8k_common',
    CHINESE_16K_COMMON = 'chinese_16k_common',
    SICHUAN_16K_COMMON = 'sichuan_16k_common',
    CANTONESE_16K_COMMON = 'cantonese_16k_common',
    SHANGHAI_16K_COMMON = 'shanghai_16k_common',
    ENGLISH_8K_COMMON = 'english_8k_common',
    ENGLISH_16K_COMMON = 'english_16k_common'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigAddPuncEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigDigitNormEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigNeedWordInfoEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigAutoLanguageDetectEnum {
    YES = 'yes',
    NO = 'no'
}
