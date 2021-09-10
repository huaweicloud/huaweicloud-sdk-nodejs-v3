import { IdCardResult } from './IdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeIdCardResponse extends SdkResponse {
    public result?: IdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: IdCardResult): RecognizeIdCardResponse {
        this['result'] = result;
        return this;
    }
}