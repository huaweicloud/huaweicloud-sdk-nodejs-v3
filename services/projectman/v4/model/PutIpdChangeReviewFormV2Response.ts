import { ReviewEntity } from './ReviewEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PutIpdChangeReviewFormV2Response extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: ReviewEntity;
    public constructor() { 
        super();
    }
    public withStatus(status: string): PutIpdChangeReviewFormV2Response {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): PutIpdChangeReviewFormV2Response {
        this['message'] = message;
        return this;
    }
    public withResult(result: ReviewEntity): PutIpdChangeReviewFormV2Response {
        this['result'] = result;
        return this;
    }
}