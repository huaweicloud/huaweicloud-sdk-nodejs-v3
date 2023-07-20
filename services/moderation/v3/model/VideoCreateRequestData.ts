

export class VideoCreateRequestData {
    public url?: string;
    private 'frame_interval'?: number;
    public language?: VideoCreateRequestDataLanguageEnum | string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): VideoCreateRequestData {
        this['url'] = url;
        return this;
    }
    public withFrameInterval(frameInterval: number): VideoCreateRequestData {
        this['frame_interval'] = frameInterval;
        return this;
    }
    public set frameInterval(frameInterval: number  | undefined) {
        this['frame_interval'] = frameInterval;
    }
    public get frameInterval(): number | undefined {
        return this['frame_interval'];
    }
    public withLanguage(language: VideoCreateRequestDataLanguageEnum | string): VideoCreateRequestData {
        this['language'] = language;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoCreateRequestDataLanguageEnum {
    ZH = 'zh'
}
