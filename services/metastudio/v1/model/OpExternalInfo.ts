

export class OpExternalInfo {
    private 'review_id_list'?: Array<string>;
    private 'algorithm_failure_reason'?: string;
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
    public withAlgorithmFailureReason(algorithmFailureReason: string): OpExternalInfo {
        this['algorithm_failure_reason'] = algorithmFailureReason;
        return this;
    }
    public set algorithmFailureReason(algorithmFailureReason: string  | undefined) {
        this['algorithm_failure_reason'] = algorithmFailureReason;
    }
    public get algorithmFailureReason(): string | undefined {
        return this['algorithm_failure_reason'];
    }
}