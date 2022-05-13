

export class ImageDetectionReq {
    public url?: string;
    public image?: string;
    private 'moderation_rule'?: string | undefined;
    public categories?: Array<ImageDetectionReqCategoriesEnum>;
    private 'ad_glossaries'?: Array<string> | undefined;
    private 'ad_categories'?: Array<string> | undefined;
    public threshold?: number;
    private 'show_ocr_text'?: boolean | undefined;
    public constructor() { 
    }
    public withUrl(url: string): ImageDetectionReq {
        this['url'] = url;
        return this;
    }
    public withImage(image: string): ImageDetectionReq {
        this['image'] = image;
        return this;
    }
    public withModerationRule(moderationRule: string): ImageDetectionReq {
        this['moderation_rule'] = moderationRule;
        return this;
    }
    public set moderationRule(moderationRule: string | undefined) {
        this['moderation_rule'] = moderationRule;
    }
    public get moderationRule() {
        return this['moderation_rule'];
    }
    public withCategories(categories: Array<ImageDetectionReqCategoriesEnum>): ImageDetectionReq {
        this['categories'] = categories;
        return this;
    }
    public withAdGlossaries(adGlossaries: Array<string>): ImageDetectionReq {
        this['ad_glossaries'] = adGlossaries;
        return this;
    }
    public set adGlossaries(adGlossaries: Array<string> | undefined) {
        this['ad_glossaries'] = adGlossaries;
    }
    public get adGlossaries() {
        return this['ad_glossaries'];
    }
    public withAdCategories(adCategories: Array<string>): ImageDetectionReq {
        this['ad_categories'] = adCategories;
        return this;
    }
    public set adCategories(adCategories: Array<string> | undefined) {
        this['ad_categories'] = adCategories;
    }
    public get adCategories() {
        return this['ad_categories'];
    }
    public withThreshold(threshold: number): ImageDetectionReq {
        this['threshold'] = threshold;
        return this;
    }
    public withShowOcrText(showOcrText: boolean): ImageDetectionReq {
        this['show_ocr_text'] = showOcrText;
        return this;
    }
    public set showOcrText(showOcrText: boolean | undefined) {
        this['show_ocr_text'] = showOcrText;
    }
    public get showOcrText() {
        return this['show_ocr_text'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageDetectionReqCategoriesEnum {
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    PORN = 'porn',
    AD = 'ad',
    ALL = 'all'
}
