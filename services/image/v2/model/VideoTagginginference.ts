

export class VideoTagginginference {
    private 'video_title'?: string;
    public language?: VideoTagginginferenceLanguageEnum | string;
    private 'use_celebrity'?: string;
    private 'use_landmark'?: string;
    private 'use_logo'?: string;
    private 'use_ocr'?: string;
    private 'use_sis'?: string;
    private 'use_tagging'?: string;
    public constructor() { 
    }
    public withVideoTitle(videoTitle: string): VideoTagginginference {
        this['video_title'] = videoTitle;
        return this;
    }
    public set videoTitle(videoTitle: string  | undefined) {
        this['video_title'] = videoTitle;
    }
    public get videoTitle(): string | undefined {
        return this['video_title'];
    }
    public withLanguage(language: VideoTagginginferenceLanguageEnum | string): VideoTagginginference {
        this['language'] = language;
        return this;
    }
    public withUseCelebrity(useCelebrity: string): VideoTagginginference {
        this['use_celebrity'] = useCelebrity;
        return this;
    }
    public set useCelebrity(useCelebrity: string  | undefined) {
        this['use_celebrity'] = useCelebrity;
    }
    public get useCelebrity(): string | undefined {
        return this['use_celebrity'];
    }
    public withUseLandmark(useLandmark: string): VideoTagginginference {
        this['use_landmark'] = useLandmark;
        return this;
    }
    public set useLandmark(useLandmark: string  | undefined) {
        this['use_landmark'] = useLandmark;
    }
    public get useLandmark(): string | undefined {
        return this['use_landmark'];
    }
    public withUseLogo(useLogo: string): VideoTagginginference {
        this['use_logo'] = useLogo;
        return this;
    }
    public set useLogo(useLogo: string  | undefined) {
        this['use_logo'] = useLogo;
    }
    public get useLogo(): string | undefined {
        return this['use_logo'];
    }
    public withUseOcr(useOcr: string): VideoTagginginference {
        this['use_ocr'] = useOcr;
        return this;
    }
    public set useOcr(useOcr: string  | undefined) {
        this['use_ocr'] = useOcr;
    }
    public get useOcr(): string | undefined {
        return this['use_ocr'];
    }
    public withUseSis(useSis: string): VideoTagginginference {
        this['use_sis'] = useSis;
        return this;
    }
    public set useSis(useSis: string  | undefined) {
        this['use_sis'] = useSis;
    }
    public get useSis(): string | undefined {
        return this['use_sis'];
    }
    public withUseTagging(useTagging: string): VideoTagginginference {
        this['use_tagging'] = useTagging;
        return this;
    }
    public set useTagging(useTagging: string  | undefined) {
        this['use_tagging'] = useTagging;
    }
    public get useTagging(): string | undefined {
        return this['use_tagging'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoTagginginferenceLanguageEnum {
    ZH = 'zh',
    EN = 'en'
}
