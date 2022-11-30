

export class AudioConfig {
    private 'audio_format'?: AudioConfigAudioFormatEnum | undefined;
    public language: AudioConfigLanguageEnum;
    public mode: AudioConfigModeEnum;
    public constructor(language?: any, mode?: any) { 
        this['language'] = language;
        this['mode'] = mode;
    }
    public withAudioFormat(audioFormat: AudioConfigAudioFormatEnum): AudioConfig {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: AudioConfigAudioFormatEnum | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat() {
        return this['audio_format'];
    }
    public withLanguage(language: AudioConfigLanguageEnum): AudioConfig {
        this['language'] = language;
        return this;
    }
    public withMode(mode: AudioConfigModeEnum): AudioConfig {
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
