import { AcceptanceBillResult } from './AcceptanceBillResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeAcceptanceBillResponse extends SdkResponse {
    public result?: AcceptanceBillResult;
    public constructor() { 
        super();
    }
    public withResult(result: AcceptanceBillResult): RecognizeAcceptanceBillResponse {
        this['result'] = result;
        return this;
    }
}