

export class MultiModalConfig {
    private 'video_format'?: MultiModalConfigVideoFormatEnum | string;
    public language?: MultiModalConfigLanguageEnum | string;
    public mode?: MultiModalConfigModeEnum | string;
    public constructor(language?: string, mode?: string) { 
        this['language'] = language;
        this['mode'] = mode;
    }
    public withVideoFormat(videoFormat: MultiModalConfigVideoFormatEnum | string): MultiModalConfig {
        this['video_format'] = videoFormat;
        return this;
    }
    public set videoFormat(videoFormat: MultiModalConfigVideoFormatEnum | string  | undefined) {
        this['video_format'] = videoFormat;
    }
    public get videoFormat(): MultiModalConfigVideoFormatEnum | string | undefined {
        return this['video_format'];
    }
    public withLanguage(language: MultiModalConfigLanguageEnum | string): MultiModalConfig {
        this['language'] = language;
        return this;
    }
    public withMode(mode: MultiModalConfigModeEnum | string): MultiModalConfig {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MultiModalConfigVideoFormatEnum {
    AUTO = 'auto',
    AVI = 'avi',
    MP4 = 'mp4',
    WEBM = 'webm',
    MKV = 'mkv',
    FLV = 'flv'
}
/**
    * @export
    * @enum {string}
    */
export enum MultiModalConfigLanguageEnum {
    EN_GB = 'en_gb'
}
/**
    * @export
    * @enum {string}
    */
export enum MultiModalConfigModeEnum {
    WORD = 'word',
    SENTENCE = 'sentence'
}
