

export class ReviewConfig {
    private 'no_need_review'?: boolean;
    public constructor() { 
    }
    public withNoNeedReview(noNeedReview: boolean): ReviewConfig {
        this['no_need_review'] = noNeedReview;
        return this;
    }
    public set noNeedReview(noNeedReview: boolean  | undefined) {
        this['no_need_review'] = noNeedReview;
    }
    public get noNeedReview(): boolean | undefined {
        return this['no_need_review'];
    }
}