import { VideoModerationImageDetailList } from './VideoModerationImageDetailList';


export class VideoModerationImageDetail {
    public suggestion?: VideoModerationImageDetailSuggestionEnum | string;
    public category?: VideoModerationImageDetailCategoryEnum | string;
    private 'ocr_text'?: string;
    public time?: number;
    public detail?: Array<VideoModerationImageDetailList>;
    public constructor() { 
    }
    public withSuggestion(suggestion: VideoModerationImageDetailSuggestionEnum | string): VideoModerationImageDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategory(category: VideoModerationImageDetailCategoryEnum | string): VideoModerationImageDetail {
        this['category'] = category;
        return this;
    }
    public withOcrText(ocrText: string): VideoModerationImageDetail {
        this['ocr_text'] = ocrText;
        return this;
    }
    public set ocrText(ocrText: string  | undefined) {
        this['ocr_text'] = ocrText;
    }
    public get ocrText(): string | undefined {
        return this['ocr_text'];
    }
    public withTime(time: number): VideoModerationImageDetail {
        this['time'] = time;
        return this;
    }
    public withDetail(detail: Array<VideoModerationImageDetailList>): VideoModerationImageDetail {
        this['detail'] = detail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoModerationImageDetailSuggestionEnum {
    BLOCK = 'block',
    REVIEW = 'review'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoModerationImageDetailCategoryEnum {
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    PORN = 'porn',
    IMAGE_TEXT = 'image_text'
}
