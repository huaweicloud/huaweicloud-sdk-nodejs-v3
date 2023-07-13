import { ThailandIdcardResult } from './ThailandIdcardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeThailandIdcardResponse extends SdkResponse {
    public result?: ThailandIdcardResult;
    public constructor() { 
        super();
    }
    public withResult(result: ThailandIdcardResult): RecognizeThailandIdcardResponse {
        this['result'] = result;
        return this;
    }
}