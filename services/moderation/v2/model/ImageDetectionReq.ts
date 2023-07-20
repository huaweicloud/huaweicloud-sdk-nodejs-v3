

export class ImageDetectionReq {
    public url?: string;
    public image?: string;
    private 'moderation_rule'?: string;
    public categories?: Array<ImageDetectionReqCategoriesEnum> | Array<string>;
    private 'ad_categories'?: Array<string>;
    public threshold?: number;
    private 'show_ocr_text'?: boolean;
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
    public set moderationRule(moderationRule: string  | undefined) {
        this['moderation_rule'] = moderationRule;
    }
    public get moderationRule(): string | undefined {
        return this['moderation_rule'];
    }
    public withCategories(categories: Array<ImageDetectionReqCategoriesEnum> | Array<string>): ImageDetectionReq {
        this['categories'] = categories;
        return this;
    }
    public withAdCategories(adCategories: Array<string>): ImageDetectionReq {
        this['ad_categories'] = adCategories;
        return this;
    }
    public set adCategories(adCategories: Array<string>  | undefined) {
        this['ad_categories'] = adCategories;
    }
    public get adCategories(): Array<string> | undefined {
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
    public set showOcrText(showOcrText: boolean  | undefined) {
        this['show_ocr_text'] = showOcrText;
    }
    public get showOcrText(): boolean | undefined {
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
