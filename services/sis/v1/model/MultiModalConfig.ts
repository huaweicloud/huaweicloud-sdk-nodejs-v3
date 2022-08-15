

export class MultiModalConfig {
    private 'video_format'?: MultiModalConfigVideoFormatEnum | undefined;
    public language: MultiModalConfigLanguageEnum;
    public mode: MultiModalConfigModeEnum;
    public constructor(language?: any, mode?: any) { 
        this['language'] = language;
        this['mode'] = mode;
    }
    public withVideoFormat(videoFormat: MultiModalConfigVideoFormatEnum): MultiModalConfig {
        this['video_format'] = videoFormat;
        return this;
    }
    public set videoFormat(videoFormat: MultiModalConfigVideoFormatEnum | undefined) {
        this['video_format'] = videoFormat;
    }
    public get videoFormat() {
        return this['video_format'];
    }
    public withLanguage(language: MultiModalConfigLanguageEnum): MultiModalConfig {
        this['language'] = language;
        return this;
    }
    public withMode(mode: MultiModalConfigModeEnum): MultiModalConfig {
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
