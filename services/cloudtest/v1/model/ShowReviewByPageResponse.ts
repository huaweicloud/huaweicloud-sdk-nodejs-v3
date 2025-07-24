import { BasePageInfoReview } from './BasePageInfoReview';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReviewByPageResponse extends SdkResponse {
    public code?: string;
    public data?: BasePageInfoReview;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowReviewByPageResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: BasePageInfoReview): ShowReviewByPageResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowReviewByPageResponse {
        this['message'] = message;
        return this;
    }
}