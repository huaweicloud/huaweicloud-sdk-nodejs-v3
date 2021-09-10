import { TextDetectionResponseResult } from './TextDetectionResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunTextModerationResponse extends SdkResponse {
    public result?: TextDetectionResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: TextDetectionResponseResult): RunTextModerationResponse {
        this['result'] = result;
        return this;
    }
}