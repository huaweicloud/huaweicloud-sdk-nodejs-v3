

export class ImageBatchModerationReq {
    public urls: Array<string>;
    public categories?: Array<ImageBatchModerationReqCategoriesEnum>;
    public threshold?: number;
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
