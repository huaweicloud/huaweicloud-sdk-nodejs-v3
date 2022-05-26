

export class ImageBatchModerationReq {
    public urls: Array<string>;
    public categories?: Array<ImageBatchModerationReqCategoriesEnum>;
    public threshold?: number;
    private 'moderation_rule'?: string | undefined;
    private 'ad_categories'?: Array<string> | undefined;
    private 'show_ocr_text'?: boolean | undefined;
    public constructor(urls?: any) { 
        this['urls'] = urls;
    }
    public withUrls(urls: Array<string>): ImageBatchModerationReq {
        this['urls'] = urls;
        return this;
    }
    public withCategories(categories: Array<ImageBatchModerationReqCategoriesEnum>): ImageBatchModerationReq {
        this['categories'] = categories;
        return this;
    }
    public withThreshold(threshold: number): ImageBatchModerationReq {
        this['threshold'] = threshold;
        return this;
    }
    public withModerationRule(moderationRule: string): ImageBatchModerationReq {
        this['moderation_rule'] = moderationRule;
        return this;
    }
    public set moderationRule(moderationRule: string | undefined) {
        this['moderation_rule'] = moderationRule;
    }
    public get moderationRule() {
        return this['moderation_rule'];
    }
    public withAdCategories(adCategories: Array<string>): ImageBatchModerationReq {
        this['ad_categories'] = adCategories;
        return this;
    }
    public set adCategories(adCategories: Array<string> | undefined) {
        this['ad_categories'] = adCategories;
    }
    public get adCategories() {
        return this['ad_categories'];
    }
    public withShowOcrText(showOcrText: boolean): ImageBatchModerationReq {
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
export enum ImageBatchModerationReqCategoriesEnum {
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    PORN = 'porn',
    AD = 'ad',
    ALL = 'all'
}
