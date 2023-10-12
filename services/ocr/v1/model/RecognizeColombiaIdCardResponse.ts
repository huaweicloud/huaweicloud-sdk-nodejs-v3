import { ColombiaIdCardResult } from './ColombiaIdCardResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeColombiaIdCardResponse extends SdkResponse {
    public result?: ColombiaIdCardResult;
    public constructor() { 
        super();
    }
    public withResult(result: ColombiaIdCardResult): RecognizeColombiaIdCardResponse {
        this['result'] = result;
        return this;
    }
}