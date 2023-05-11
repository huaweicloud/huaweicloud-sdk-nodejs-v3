

export class VideoTagginginference {
    private 'video_title'?: string | undefined;
    public language?: VideoTagginginferenceLanguageEnum;
    private 'use_celebrity'?: string | undefined;
    private 'use_landmark'?: string | undefined;
    private 'use_logo'?: string | undefined;
    private 'use_ocr'?: string | undefined;
    private 'use_sis'?: string | undefined;
    private 'use_tagging'?: string | undefined;
    public constructor() { 
    }
    public withVideoTitle(videoTitle: string): VideoTagginginference {
        this['video_title'] = videoTitle;
        return this;
    }
    public set videoTitle(videoTitle: string | undefined) {
        this['video_title'] = videoTitle;
    }
    public get videoTitle() {
        return this['video_title'];
    }
    public withLanguage(language: VideoTagginginferenceLanguageEnum): VideoTagginginference {
        this['language'] = language;
        return this;
    }
    public withUseCelebrity(useCelebrity: string): VideoTagginginference {
        this['use_celebrity'] = useCelebrity;
        return this;
    }
    public set useCelebrity(useCelebrity: string | undefined) {
        this['use_celebrity'] = useCelebrity;
    }
    public get useCelebrity() {
        return this['use_celebrity'];
    }
    public withUseLandmark(useLandmark: string): VideoTagginginference {
        this['use_landmark'] = useLandmark;
        return this;
    }
    public set useLandmark(useLandmark: string | undefined) {
        this['use_landmark'] = useLandmark;
    }
    public get useLandmark() {
        return this['use_landmark'];
    }
    public withUseLogo(useLogo: string): VideoTagginginference {
        this['use_logo'] = useLogo;
        return this;
    }
    public set useLogo(useLogo: string | undefined) {
        this['use_logo'] = useLogo;
    }
    public get useLogo() {
        return this['use_logo'];
    }
    public withUseOcr(useOcr: string): VideoTagginginference {
        this['use_ocr'] = useOcr;
        return this;
    }
    public set useOcr(useOcr: string | undefined) {
        this['use_ocr'] = useOcr;
    }
    public get useOcr() {
        return this['use_ocr'];
    }
    public withUseSis(useSis: string): VideoTagginginference {
        this['use_sis'] = useSis;
        return this;
    }
    public set useSis(useSis: string | undefined) {
        this['use_sis'] = useSis;
    }
    public get useSis() {
        return this['use_sis'];
    }
    public withUseTagging(useTagging: string): VideoTagginginference {
        this['use_tagging'] = useTagging;
        return this;
    }
    public set useTagging(useTagging: string | undefined) {
        this['use_tagging'] = useTagging;
    }
    public get useTagging() {
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
