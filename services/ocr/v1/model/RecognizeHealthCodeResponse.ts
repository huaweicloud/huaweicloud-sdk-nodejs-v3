import { HealthCodeResult } from './HealthCodeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHealthCodeResponse extends SdkResponse {
    public result?: HealthCodeResult;
    public constructor() { 
        super();
    }
    public withResult(result: HealthCodeResult): RecognizeHealthCodeResponse {
        this['result'] = result;
        return this;
    }
}