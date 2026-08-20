import { ReviewUpdateBodyV2 } from './ReviewUpdateBodyV2';


export class PutIpdChangeReviewFormV2Request {
    private 'project_id'?: string;
    private 'review_id'?: string;
    public body?: ReviewUpdateBodyV2;
    public constructor(projectId?: string, reviewId?: string) { 
        this['project_id'] = projectId;
        this['review_id'] = reviewId;
    }
    public withProjectId(projectId: string): PutIpdChangeReviewFormV2Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withReviewId(reviewId: string): PutIpdChangeReviewFormV2Request {
        this['review_id'] = reviewId;
        return this;
    }
    public set reviewId(reviewId: string  | undefined) {
        this['review_id'] = reviewId;
    }
    public get reviewId(): string | undefined {
        return this['review_id'];
    }
    public withBody(body: ReviewUpdateBodyV2): PutIpdChangeReviewFormV2Request {
        this['body'] = body;
        return this;
    }
}