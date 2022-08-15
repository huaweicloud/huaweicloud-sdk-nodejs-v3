import { MacaoIdCardResult } from './MacaoIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMacaoIdCardResponse extends SdkResponse {
    public result?: MacaoIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: MacaoIdCardResult): RecognizeMacaoIdCardResponse {
        this['result'] = result;
        return this;
    }
}