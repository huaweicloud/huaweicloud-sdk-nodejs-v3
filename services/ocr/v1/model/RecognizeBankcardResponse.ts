import { BankcardResult } from './BankcardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeBankcardResponse extends SdkResponse {
    public result?: BankcardResult;
    public constructor() { 
        super();
    }
    public withResult(result: BankcardResult): RecognizeBankcardResponse {
        this['result'] = result;
        return this;
    }
}