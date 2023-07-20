import { ImageDetectionResult } from './ImageDetectionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckImageModerationResponse extends SdkResponse {
    private 'request_id'?: string;
    public result?: ImageDetectionResult;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CheckImageModerationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withResult(result: ImageDetectionResult): CheckImageModerationResponse {
        this['result'] = result;
        return this;
    }
}