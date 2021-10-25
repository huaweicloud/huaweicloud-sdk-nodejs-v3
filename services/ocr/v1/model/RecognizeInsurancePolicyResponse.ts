import { InsurancePolicyResult } from './InsurancePolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeInsurancePolicyResponse extends SdkResponse {
    public result?: InsurancePolicyResult;
    public constructor() { 
        super();
    }
    public withResult(result: InsurancePolicyResult): RecognizeInsurancePolicyResponse {
        this['result'] = result;
        return this;
    }
}