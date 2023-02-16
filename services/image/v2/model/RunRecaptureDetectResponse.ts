import { RecaptureDetectResponseResult } from './RecaptureDetectResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunRecaptureDetectResponse extends SdkResponse {
    public result?: RecaptureDetectResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: RecaptureDetectResponseResult): RunRecaptureDetectResponse {
        this['result'] = result;
        return this;
    }
}