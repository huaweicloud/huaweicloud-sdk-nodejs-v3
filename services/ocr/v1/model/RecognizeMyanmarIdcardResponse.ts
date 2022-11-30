import { MyanmarIdcardResult } from './MyanmarIdcardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeMyanmarIdcardResponse extends SdkResponse {
    public result?: MyanmarIdcardResult;
    public constructor() { 
        super();
    }
    public withResult(result: MyanmarIdcardResult): RecognizeMyanmarIdcardResponse {
        this['result'] = result;
        return this;
    }
}