

export class TaskSumbitReq {
    public urls: Array<string>;
    public categories?: Array<TaskSumbitReqCategoriesEnum>;
    public constructor(urls?: any) { 
        this['urls'] = urls;
    }
    public withUrls(urls: Array<string>): TaskSumbitReq {
        this['urls'] = urls;
        return this;
    }
    public withCategories(categories: Array<TaskSumbitReqCategoriesEnum>): TaskSumbitReq {
        this['categories'] = categories;
        return this;
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
