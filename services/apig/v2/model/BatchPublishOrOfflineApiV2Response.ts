import { BatchFailure } from './BatchFailure';
import { PublishResp } from './PublishResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchPublishOrOfflineApiV2Response extends SdkResponse {
    public success?: Array<PublishResp>;
    public failure?: Array<BatchFailure>;
    public constructor() { 
        super();
    }
    public withSuccess(success: Array<PublishResp>): BatchPublishOrOfflineApiV2Response {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: Array<BatchFailure>): BatchPublishOrOfflineApiV2Response {
        this['failure'] = failure;
        return this;
    }
}