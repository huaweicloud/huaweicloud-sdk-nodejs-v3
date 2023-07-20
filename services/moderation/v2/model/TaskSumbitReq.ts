

export class TaskSumbitReq {
    public urls?: Array<string>;
    public categories?: Array<TaskSumbitReqCategoriesEnum> | Array<string>;
    private 'moderation_rule'?: string;
    private 'ad_categories'?: Array<string>;
    private 'show_ocr_text'?: boolean;
    public constructor(urls?: Array<string>) { 
        this['urls'] = urls;
    }
    public withUrls(urls: Array<string>): TaskSumbitReq {
        this['urls'] = urls;
        return this;
    }
    public withCategories(categories: Array<TaskSumbitReqCategoriesEnum> | Array<string>): TaskSumbitReq {
        this['categories'] = categories;
        return this;
    }
    public withModerationRule(moderationRule: string): TaskSumbitReq {
        this['moderation_rule'] = moderationRule;
        return this;
    }
    public set moderationRule(moderationRule: string  | undefined) {
        this['moderation_rule'] = moderationRule;
    }
    public get moderationRule(): string | undefined {
        return this['moderation_rule'];
    }
    public withAdCategories(adCategories: Array<string>): TaskSumbitReq {
        this['ad_categories'] = adCategories;
        return this;
    }
    public set adCategories(adCategories: Array<string>  | undefined) {
        this['ad_categories'] = adCategories;
    }
    public get adCategories(): Array<string> | undefined {
        return this['ad_categories'];
    }
    public withShowOcrText(showOcrText: boolean): TaskSumbitReq {
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
export enum TaskSumbitReqCategoriesEnum {
    POLITICS = 'politics',
    PORN = 'porn',
    TERRORISM = 'terrorism'
}
