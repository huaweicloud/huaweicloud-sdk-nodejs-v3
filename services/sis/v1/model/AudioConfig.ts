

export class AudioConfig {
    private 'audio_format'?: AudioConfigAudioFormatEnum | string;
    public language?: AudioConfigLanguageEnum | string;
    public mode?: AudioConfigModeEnum | string;
    public constructor(language?: string, mode?: string) { 
        this['language'] = language;
        this['mode'] = mode;
    }
    public withAudioFormat(audioFormat: AudioConfigAudioFormatEnum | string): AudioConfig {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: AudioConfigAudioFormatEnum | string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): AudioConfigAudioFormatEnum | string | undefined {
        return this['audio_format'];
    }
    public withLanguage(language: AudioConfigLanguageEnum | string): AudioConfig {
        this['language'] = language;
        return this;
    }
    public withMode(mode: AudioConfigModeEnum | string): AudioConfig {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioConfigAudioFormatEnum {
    AUTO = 'auto',
    WAV = 'wav',
    AAC = 'aac',
    MP3 = 'mp3',
    AMR = 'amr',
    M4A = 'm4a',
    OPUS = 'opus'
}
/**
    * @export
    * @enum {string}
    */
export enum AudioConfigLanguageEnum {
    EN_GB = 'en_gb'
}
/**
    * @export
    * @enum {string}
    */
export enum AudioConfigModeEnum {
    WORD = 'word',
    SENTENCE = 'sentence'
}
