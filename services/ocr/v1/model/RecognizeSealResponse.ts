import { SealResult } from './SealResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeSealResponse extends SdkResponse {
    public result?: SealResult;
    public constructor() { 
        super();
    }
    public withResult(result: SealResult): RecognizeSealResponse {
        this['result'] = result;
        return this;
    }
}