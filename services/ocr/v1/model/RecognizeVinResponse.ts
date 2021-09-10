import { VINResult } from './VINResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeVinResponse extends SdkResponse {
    public result?: VINResult;
    public constructor() { 
        super();
    }
    public withResult(result: VINResult): RecognizeVinResponse {
        this['result'] = result;
        return this;
    }
}