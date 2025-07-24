import { ReviewPageParam } from './ReviewPageParam';


export class CommRequestReviewPageParam {
    public params?: ReviewPageParam;
    public constructor(params?: ReviewPageParam) { 
        this['params'] = params;
    }
    public withParams(params: ReviewPageParam): CommRequestReviewPageParam {
        this['params'] = params;
        return this;
    }
}