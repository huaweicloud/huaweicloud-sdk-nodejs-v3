import { ImageBatchSyncDetectionResult } from './ImageBatchSyncDetectionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCheckImageSyncResponse extends SdkResponse {
    private 'request_id'?: string;
    public results?: Array<ImageBatchSyncDetectionResult>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): BatchCheckImageSyncResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withResults(results: Array<ImageBatchSyncDetectionResult>): BatchCheckImageSyncResponse {
        this['results'] = results;
        return this;
    }
}