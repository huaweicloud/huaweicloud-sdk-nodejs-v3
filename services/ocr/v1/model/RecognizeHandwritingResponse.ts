import { HandwritingResult } from './HandwritingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHandwritingResponse extends SdkResponse {
    public result?: HandwritingResult;
    public constructor() { 
        super();
    }
    public withResult(result: HandwritingResult): RecognizeHandwritingResponse {
        this['result'] = result;
        return this;
    }
}