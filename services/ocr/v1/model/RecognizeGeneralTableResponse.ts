import { GeneralTableResult } from './GeneralTableResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeGeneralTableResponse extends SdkResponse {
    public result?: GeneralTableResult;
    public constructor() { 
        super();
    }
    public withResult(result: GeneralTableResult): RecognizeGeneralTableResponse {
        this['result'] = result;
        return this;
    }
}