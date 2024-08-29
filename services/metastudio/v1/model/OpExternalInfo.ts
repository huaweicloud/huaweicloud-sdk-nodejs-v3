

export class OpExternalInfo {
    private 'review_id_list'?: Array<string>;
    public constructor() { 
    }
    public withReviewIdList(reviewIdList: Array<string>): OpExternalInfo {
        this['review_id_list'] = reviewIdList;
        return this;
    }
    public set reviewIdList(reviewIdList: Array<string>  | undefined) {
        this['review_id_list'] = reviewIdList;
    }
    public get reviewIdList(): Array<string> | undefined {
        return this['review_id_list'];
    }
}