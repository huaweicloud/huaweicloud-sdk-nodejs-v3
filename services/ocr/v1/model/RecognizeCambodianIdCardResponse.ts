import { CambodianIdCardResult } from './CambodianIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeCambodianIdCardResponse extends SdkResponse {
    public result?: CambodianIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: CambodianIdCardResult): RecognizeCambodianIdCardResponse {
        this['result'] = result;
        return this;
    }
}