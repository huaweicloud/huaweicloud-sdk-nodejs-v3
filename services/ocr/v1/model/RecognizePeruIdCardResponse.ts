import { PeruIdCardResult } from './PeruIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizePeruIdCardResponse extends SdkResponse {
    public result?: PeruIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: PeruIdCardResult): RecognizePeruIdCardResponse {
        this['result'] = result;
        return this;
    }
}