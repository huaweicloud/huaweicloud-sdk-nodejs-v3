

export class ImageBatchModerationReq {
    public urls?: Array<string>;
    public categories?: Array<ImageBatchModerationReqCategoriesEnum> | Array<string>;
    public threshold?: number;
    private 'moderation_rule'?: string;
    private 'ad_categories'?: Array<string>;
    private 'show_ocr_text'?: boolean;
    public constructor(urls?: Array<string>) { 
        this['urls'] = urls;
    }
    public withUrls(urls: Array<string>): ImageBatchModerationReq {
        this['urls'] = urls;
        return this;
    }
    public withCategories(categories: Array<ImageBatchModerationReqCategoriesEnum> | Array<string>): ImageBatchModerationReq {
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
    public set moderationRule(moderationRule: string  | undefined) {
        this['moderation_rule'] = moderationRule;
    }
    public get moderationRule(): string | undefined {
        return this['moderation_rule'];
    }
    public withAdCategories(adCategories: Array<string>): ImageBatchModerationReq {
        this['ad_categories'] = adCategories;
        return this;
    }
    public set adCategories(adCategories: Array<string>  | undefined) {
        this['ad_categories'] = adCategories;
    }
    public get adCategories(): Array<string> | undefined {
        return this['ad_categories'];
    }
    public withShowOcrText(showOcrText: boolean): ImageBatchModerationReq {
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
export enum ImageBatchModerationReqCategoriesEnum {
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    PORN = 'porn',
    AD = 'ad',
    ALL = 'all'
}
