import { ChileIdCardResult } from './ChileIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeChileIdCardResponse extends SdkResponse {
    public result?: ChileIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: ChileIdCardResult): RecognizeChileIdCardResponse {
        this['result'] = result;
        return this;
    }
}