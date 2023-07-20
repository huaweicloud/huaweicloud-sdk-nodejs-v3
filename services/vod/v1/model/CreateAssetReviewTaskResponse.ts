import { Review } from './Review';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetReviewTaskResponse extends SdkResponse {
    private 'asset_id'?: string;
    public review?: Review;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): CreateAssetReviewTaskResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withReview(review: Review): CreateAssetReviewTaskResponse {
        this['review'] = review;
        return this;
    }
}