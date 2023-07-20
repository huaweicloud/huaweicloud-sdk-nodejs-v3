import { TextDetectionResult } from './TextDetectionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunTextModerationResponse extends SdkResponse {
    private 'request_id'?: string;
    public result?: TextDetectionResult;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): RunTextModerationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withResult(result: TextDetectionResult): RunTextModerationResponse {
        this['result'] = result;
        return this;
    }
}