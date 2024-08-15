

export class ReviewerInfo {
    private 'reviewer_name'?: string;
    private 'reviewer_id'?: string;
    public constructor(reviewerName?: string, reviewerId?: string) { 
        this['reviewer_name'] = reviewerName;
        this['reviewer_id'] = reviewerId;
    }
    public withReviewerName(reviewerName: string): ReviewerInfo {
        this['reviewer_name'] = reviewerName;
        return this;
    }
    public set reviewerName(reviewerName: string  | undefined) {
        this['reviewer_name'] = reviewerName;
    }
    public get reviewerName(): string | undefined {
        return this['reviewer_name'];
    }
    public withReviewerId(reviewerId: string): ReviewerInfo {
        this['reviewer_id'] = reviewerId;
        return this;
    }
    public set reviewerId(reviewerId: string  | undefined) {
        this['reviewer_id'] = reviewerId;
    }
    public get reviewerId(): string | undefined {
        return this['reviewer_id'];
    }
}