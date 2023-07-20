import { Review } from './Review';


export class AssetReviewReq {
    private 'asset_id'?: string;
    public review?: Review;
    public constructor(assetId?: string, review?: Review) { 
        this['asset_id'] = assetId;
        this['review'] = review;
    }
    public withAssetId(assetId: string): AssetReviewReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withReview(review: Review): AssetReviewReq {
        this['review'] = review;
        return this;
    }
}