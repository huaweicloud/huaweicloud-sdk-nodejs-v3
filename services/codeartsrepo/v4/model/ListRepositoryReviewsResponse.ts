import { ReviewDto } from './ReviewDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryReviewsResponse extends SdkResponse {
    public body?: Array<ReviewDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReviewDto>): ListRepositoryReviewsResponse {
        this['body'] = body;
        return this;
    }
}