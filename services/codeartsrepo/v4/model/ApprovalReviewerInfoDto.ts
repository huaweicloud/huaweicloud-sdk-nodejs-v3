

export class ApprovalReviewerInfoDto {
    private 'reviewer_ids'?: string;
    public constructor() { 
    }
    public withReviewerIds(reviewerIds: string): ApprovalReviewerInfoDto {
        this['reviewer_ids'] = reviewerIds;
        return this;
    }
    public set reviewerIds(reviewerIds: string  | undefined) {
        this['reviewer_ids'] = reviewerIds;
    }
    public get reviewerIds(): string | undefined {
        return this['reviewer_ids'];
    }
}