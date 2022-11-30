import { GeneralTextResult } from './GeneralTextResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeGeneralTextResponse extends SdkResponse {
    public result?: GeneralTextResult;
    public constructor() { 
        super();
    }
    public withResult(result: GeneralTextResult): RecognizeGeneralTextResponse {
        this['result'] = result;
        return this;
    }
}